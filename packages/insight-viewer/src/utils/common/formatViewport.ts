import { CornerstoneViewport } from '../cornerstoneHelper'
import { Viewport } from '../../Context/Viewport/types'
import { ViewportContextDefaultValue } from '../../Context/Viewport/const'

export function formatViewport(
  cornerstoneViewport: CornerstoneViewport | undefined
): Viewport {
  if (!cornerstoneViewport) return ViewportContextDefaultValue

  const { scale, invert, hflip, vflip, translation, voi } = cornerstoneViewport

  return {
    scale,
    invert,
    hflip,
    vflip,
    x: translation.x,
    y: translation.y,
    windowWidth: voi.windowWidth,
    windowCenter: voi.windowCenter,
    mouseDown: undefined,
  }
}

export function formatCornerstoneViewport(
  cornerstoneViewport: CornerstoneViewport,
  viewport: Partial<Viewport> = {}
): CornerstoneViewport {
  return {
    ...cornerstoneViewport,
    scale: viewport.scale ?? cornerstoneViewport.scale,
    invert: viewport.invert ?? cornerstoneViewport.invert,
    hflip: viewport.hflip ?? cornerstoneViewport.hflip,
    vflip: viewport.vflip ?? cornerstoneViewport.vflip,
    translation: {
      x: viewport.x ?? cornerstoneViewport.translation.x,
      y: viewport.y ?? cornerstoneViewport.translation.y,
    },
    voi: {
      windowWidth: viewport.windowWidth ?? cornerstoneViewport.voi.windowWidth,
      windowCenter:
        viewport.windowCenter ?? cornerstoneViewport.voi.windowCenter,
    },
  }
}
