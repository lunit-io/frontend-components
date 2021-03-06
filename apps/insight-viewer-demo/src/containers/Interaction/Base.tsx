import { Box, Text, Button, Stack } from '@chakra-ui/react'
import Viewer, {
  useInteraction,
  useViewport,
  useMultiframe,
  Interaction,
  Wheel,
  isValidViewport,
} from '@lunit/insight-viewer'
import CodeBlock from '../../components/CodeBlock'
import Control from './Control'
import WheelControl from './Control/Wheel'
import OverlayLayer from '../../components/OverlayLayer'
import CustomProgress from '../../components/CustomProgress'
import { ViewerWrapper } from '../../components/Wrapper'
import { BASE_CODE } from './Code'
import Canvas from './Canvas'
import useIsOneColumn from '../../hooks/useIsOneColumn'

const IMAGES = [
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000000.dcm',
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000001.dcm',
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000002.dcm',
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000003.dcm',
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000004.dcm',
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000005.dcm',
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000006.dcm',
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000007.dcm',
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000008.dcm',
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000009.dcm',
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000010.dcm',
]

const MIN_FRAME = 0
const MAX_FRAME = IMAGES.length - 1
const MIN_SCALE = 0.178
const MAX_SCALE = 3

export default function App(): JSX.Element {
  const { image, frame, setFrame } = useMultiframe(IMAGES)
  const { interaction, setInteraction } = useInteraction()
  const { viewport, setViewport, resetViewport } = useViewport({
    scale: 1,
  })
  const isOneColumn = useIsOneColumn()

  function handleChange(type: string) {
    return (value: string) => {
      setInteraction((prev: Interaction) => ({
        ...prev,
        [type]: value === 'none' ? undefined : value,
      }))
    }
  }

  const handleFrame: Wheel = (_, deltaY) => {
    if (deltaY !== 0)
      setFrame(prev =>
        Math.min(Math.max(prev + (deltaY > 0 ? 1 : -1), MIN_FRAME), MAX_FRAME)
      )
  }

  const handleScale: Wheel = (_, deltaY) => {
    if (deltaY !== 0)
      setViewport(prev => {
        if (!isValidViewport(prev)) return prev
        return {
          ...prev,
          scale: Math.min(
            Math.max(prev.scale + (deltaY > 0 ? 0.25 : -0.25), MIN_SCALE),
            MAX_SCALE
          ),
        }
      })
  }

  const handler = {
    frame: handleFrame,
    scale: handleScale,
  }

  function handleWheel(value: string) {
    setInteraction((prev: Interaction) => ({
      ...prev,
      mouseWheel:
        value === 'none' ? undefined : handler[value as keyof typeof handler],
    }))
  }

  return (
    <Box>
      <Stack
        direction={['column', 'row']}
        spacing={isOneColumn ? '0px' : '80px'}
        align="flex-start"
      >
        <Box>
          <Control onChange={handleChange} />
          <WheelControl onChange={handleWheel} />
          <Box mb={6}>
            <Text className="test">
              frame: <span className="frame">{frame}</span>
            </Text>
          </Box>
        </Box>
        <Box>
          <Button
            colorScheme="blue"
            onClick={resetViewport}
            className="reset"
            mb={isOneColumn ? '20px' : '0px'}
          >
            Reset
          </Button>
        </Box>
      </Stack>

      <Stack direction="row">
        <ViewerWrapper>
          <Viewer.Dicom
            imageId={image}
            interaction={interaction}
            onViewportChange={setViewport}
            viewport={viewport}
            Progress={CustomProgress}
          >
            <OverlayLayer viewport={viewport} />
            <Canvas viewport={viewport} />
          </Viewer.Dicom>
        </ViewerWrapper>
      </Stack>

      <Box>
        <CodeBlock code={BASE_CODE} />
      </Box>
    </Box>
  )
}
