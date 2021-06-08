import { useEffect, useState, useContext } from 'react'
import {
  displayImage,
  loadImage as cornerstoneLoadImage,
} from '../utils/cornerstoneHelper'
import getHttpClient from '../utils/httpClient'
import { loadingProgressMessage } from '../utils/messageService'
import LoaderContext from '../Context'
import useViewportUpdate from './useViewportUpdate'
import { Element } from '../types'

interface Prop {
  imageId: string
  element: Element
  setLoader: () => Promise<boolean>
  isSingleImage?: boolean
}

export default function useImageLoader({
  imageId,
  element,
  setLoader,
  isSingleImage = true,
}: Prop): void {
  const [hasLoader, setHasLoader] = useState(false)
  const { onError, setHeader } = useContext(LoaderContext)

  // eslint-disable-next-line no-extra-semi
  ;(async function asyncLoad(): Promise<undefined> {
    if (hasLoader) return undefined
    setHasLoader(await setLoader())
    return undefined
  })()

  useViewportUpdate(<HTMLDivElement>element)

  useEffect(() => {
    if (!hasLoader) return undefined
    if (!element) return undefined

    async function loadImage(): Promise<void> {
      try {
        const image = await cornerstoneLoadImage(imageId, {
          loader: getHttpClient(isSingleImage, setHeader),
        })

        if (isSingleImage) loadingProgressMessage.sendMessage(100)

        displayImage(<HTMLDivElement>element, image)
      } catch (e) {
        /**
         * ky HTTPError
         * https://github.com/sindresorhus/ky/blob/main/source/errors/HTTPError.ts
         * { error: { name: 'HTTPError', options, request, response, message, stack }
         */
        onError(new Error(e?.error?.message || e.message))
      }
    }

    loadImage()
    return undefined
  }, [imageId, element, isSingleImage, hasLoader, onError, setHeader])
  return undefined
}
