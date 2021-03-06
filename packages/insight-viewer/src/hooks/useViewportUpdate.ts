import { useEffect } from 'react'
import {
  getViewport,
  setViewport,
  CornerstoneViewport,
} from '../utils/cornerstoneHelper'
import {
  formatCornerstoneViewport,
  formatViewport,
} from '../utils/common/formatViewport'
import { Element, Viewport, OnViewportChange } from '../types'

interface Prop {
  element: Element
  viewport?: Viewport
  initialViewport: CornerstoneViewport | undefined
  onViewportChange?: OnViewportChange
}

export default function useViewportUpdate({
  element,
  viewport: newViewport,
  initialViewport,
  onViewportChange,
}: Prop): void {
  useEffect(() => {
    if (!element || !newViewport) return

    const willReset = newViewport?._reset && initialViewport
    const viewport = willReset
      ? initialViewport
      : getViewport(<HTMLDivElement>element)

    if (!viewport) return

    setViewport(
      <HTMLDivElement>element,
      formatCornerstoneViewport(viewport, newViewport)
    )

    // When resetting, update Viewer's viewport prop
    if (willReset && onViewportChange) {
      onViewportChange({
        ...formatViewport(initialViewport),
        ...(newViewport?._reset ?? {}),
      })
    }
  }, [element, newViewport, initialViewport, onViewportChange])
}
