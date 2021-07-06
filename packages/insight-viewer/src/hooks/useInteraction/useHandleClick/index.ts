import { useEffect } from 'react'
import { fromEvent, Subscription } from 'rxjs'
import { map, filter, tap } from 'rxjs/operators'
import { ViewportInteraction } from '../types'
import { Viewport } from '../../../types'
import { MOUSE_BUTTON, PRIMARY_CLICK, SECONDARY_CLICK } from '../const'
import { preventContextMenu, hasInteraction } from '../utils'
import {
  getViewport,
  CornerstoneViewport,
} from '../../../utils/cornerstoneHelper'

let subscription: Subscription

type ClickType = typeof PRIMARY_CLICK | typeof SECONDARY_CLICK

function hasClickType(value: unknown): value is ClickType {
  return value === PRIMARY_CLICK || value === SECONDARY_CLICK
}

function getCoord(element: Element, viewport?: Viewport) {
  if (viewport) {
    const { x, y } = viewport

    return {
      x,
      y,
    }
  }
  const {
    translation: { x, y },
  } = getViewport(<HTMLDivElement>element) as CornerstoneViewport
  return {
    x,
    y,
  }
}

export default function useHandleClick({
  element,
  interaction,
  viewport,
}: ViewportInteraction): void {
  useEffect(() => {
    if (!interaction || !element) return undefined

    const mousedown$ = fromEvent<MouseEvent>(
      <HTMLDivElement>element,
      'mousedown'
    )
    let clickType: ClickType | undefined
    if (!interaction) return undefined

    if (!hasInteraction(interaction, [PRIMARY_CLICK, SECONDARY_CLICK]))
      return undefined

    subscription = mousedown$
      .pipe(
        tap(({ button }) => {
          // tap operator for side effect
          if (button === MOUSE_BUTTON.primary) clickType = PRIMARY_CLICK
          if (button === MOUSE_BUTTON.secondary) clickType = SECONDARY_CLICK
        }),
        filter(
          () => hasClickType(clickType) && interaction[clickType] !== undefined
        ),
        tap(({ button }) => {
          if (
            button === MOUSE_BUTTON.secondary &&
            interaction[clickType as ClickType]
          ) {
            element?.addEventListener('contextmenu', preventContextMenu)
          }
        }),
        // for persisting currentTarget https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
        map(({ clientX, clientY, currentTarget }) => ({
          clientX,
          clientY,
          currentTarget,
        }))
      )
      .subscribe(({ clientX, clientY, currentTarget }) => {
        const currentTargetRect = (currentTarget as Element).getBoundingClientRect()
        const { x, y } = getCoord(element, viewport)

        if (hasClickType(clickType)) {
          interaction[clickType]?.(
            -x + clientX - currentTargetRect.left,
            -y + clientY - currentTargetRect.top
          )
        }
      })
    return () => {
      subscription.unsubscribe()
    }
  }, [element, interaction, viewport])

  return undefined
}