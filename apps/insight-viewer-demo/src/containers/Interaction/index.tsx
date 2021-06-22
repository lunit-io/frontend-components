import { Box } from '@chakra-ui/react'
import Viewer, { useInteraction } from '@lunit/insight-viewer'
import CodeBlock from '../../components/CodeBlock'
import Control from './Control'

const IMAGE_ID =
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000011.dcm'

const Code = `\
  import Viewer, { useInteraction, Interaction } from '@lunit/insight-viewer'

  export default function Viewer() {
    const { interaction, setInteraction } = useInteraction()

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const v = e.target.value

      setInteraction((prev: Interaction) => ({
        ...prev,
        mouseDownMove: v === 'none' ? undefined : v,
      }))
    }

    return (
      <>
        <input type="radio" value="none" onChange={handleChange} />
        <input type="radio" value="pan" onChange={handleChange} />
        <input type="radio" value="adjust" onChange={handleChange} />
        <Viewer.Dicom imageId={IMAGE_ID} interaction={interaction}>
          <OverlayLayer viewport={viewport} />
        </Viewer.Dicom>
      </>
    )
  }
  `

function Interaction(): JSX.Element {
  const { interaction, setInteraction } = useInteraction()

  return (
    <Box w={700}>
      <Control setInteraction={setInteraction} />
      <Box w={500} h={500}>
        <Viewer.Dicom imageId={IMAGE_ID} interaction={interaction} />
      </Box>
      <Box w={900}>
        <CodeBlock code={Code} />
      </Box>
    </Box>
  )
}

export default Interaction
