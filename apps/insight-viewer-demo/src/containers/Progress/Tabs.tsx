import { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Base from './Base'
import Custom from './Custom'
import NoContentLength from './NoContentLength'
import config from '../../../config'

export default function ProgressTabs(): JSX.Element {
  const [active, setActive] = useState(0)

  function handleChange(index: number): void {
    setActive(index)
  }

  return (
    <Tabs isLazy onChange={handleChange}>
      <TabList>
        <Tab>Default Progress</Tab>
        <Tab>Custom Progress</Tab>
        {config.IS_DEV && <Tab>No Content-Length Progress</Tab>}
      </TabList>

      <TabPanels>
        <TabPanel>{active === 0 && <Base />}</TabPanel>
        <TabPanel>{active === 1 && <Custom />}</TabPanel>
        {config.IS_DEV && (
          <TabPanel>{active === 2 && <NoContentLength />}</TabPanel>
        )}
      </TabPanels>
    </Tabs>
  )
}
