import cornerstone from 'cornerstone-core'

export type Image = cornerstone.Image
export type CornerstoneViewport = cornerstone.Viewport

export function enable(element: HTMLDivElement): void {
  cornerstone.enable(element)
  // eslint-disable-next-line no-console
  console.log('enabled')
}

export function disable(element: HTMLDivElement): void {
  cornerstone.disable(element)
  // eslint-disable-next-line no-console
  console.log('disabled')
}

export function resize(element: HTMLDivElement): void {
  cornerstone.resize(element)
}

export function getCornerstone(): typeof cornerstone {
  return cornerstone
}

export function displayImage(
  element: HTMLDivElement,
  image: cornerstone.Image
): void {
  const viewport = cornerstone.getDefaultViewportForImage(element, image)
  cornerstone.displayImage(element, image, viewport)
}

export function loadImage(
  imageId: string,
  options?: Record<string, unknown>
): ReturnType<typeof cornerstone.loadImage> {
  return cornerstone.loadImage(imageId, options)
}

export function getViewport(
  element: HTMLDivElement
): cornerstone.Viewport | undefined {
  return cornerstone.getViewport(element)
}

export function setViewport(
  element: HTMLDivElement,
  viewport: cornerstone.Viewport
): ReturnType<typeof cornerstone.setViewport> {
  return cornerstone.setViewport(element, viewport)
}

export const EVENT = {
  IMAGE_RENDERED: 'cornerstoneimagerendered',
}
