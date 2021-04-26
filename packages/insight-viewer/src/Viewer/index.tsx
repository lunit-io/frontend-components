import React, { useRef } from 'react'
import Wrapper from '../components/Wrapper'
import { WithChildren } from '../types'
import { useLoadImage } from '../modules/cornerstoneHelper'

export type Prop = WithChildren<{
  imageId?: string
}>

export default function Viewer({ imageId = undefined }: Prop): JSX.Element {
  const elRef = useRef<HTMLDivElement>(null)

  useLoadImage({
    imageId,
    type: 'wado',
    ref: elRef,
  })

  return <Wrapper ref={elRef} />
}

export function WebImageViewer({ imageId = undefined }: Prop): JSX.Element {
  const elRef = useRef<HTMLDivElement>(null)

  useLoadImage({
    imageId,
    type: 'web',
    ref: elRef,
  })

  return <Wrapper ref={elRef} />
}
