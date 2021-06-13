import { Box } from '@chakra-ui/react'
import { DICOMImageViewer } from '@lunit/insight-viewer'
import useImageSelect from './useImageSelect'

export default function SelectableImage(): JSX.Element {
  const { ImageSelect, selected } = useImageSelect()

  return (
    <>
      <Box mb={6}>
        <ImageSelect />
      </Box>

      <div style={{ maxWidth: '100%', aspectRatio: '1 / 1' }}>
        <DICOMImageViewer imageId={selected} />
      </div>
    </>
  )
}
