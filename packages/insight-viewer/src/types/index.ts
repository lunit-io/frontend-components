import { Dispatch, SetStateAction } from 'react'

export type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode
}
export type Element = HTMLDivElement | null
export type ViewerError = Error & { status?: number }
export type OnError = (e: ViewerError) => void
export type ProgressComponent = ({
  progress,
}: {
  progress: number
}) => JSX.Element
export type Viewer = ({
  imageId,
  children,
}: WithChildren<{
  imageId: string
}>) => JSX.Element
export type RequestInterceptor = (request: Request) => void
export interface BasicViewport {
  scale: number
  invert: boolean
  hflip: boolean
  vflip: boolean
  x: number
  y: number
  windowWidth: number
  windowCenter: number
}
export type Viewport = Partial<BasicViewport> & {
  _default?: Partial<BasicViewport>
  _reset?: Partial<BasicViewport>
}

export interface HTTP {
  onError: OnError
  requestInterceptor: RequestInterceptor
}

export type OnViewportChange = Dispatch<SetStateAction<Viewport>>

export type ViewerProp = {
  imageId: string
} & Partial<HTTP>
