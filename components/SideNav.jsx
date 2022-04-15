import { 
  useState,
  useCallback
} from 'react'
import {
  Drawer,
  Burger,
  Stack
} from '@mantine/core'
import SideNavContent from './SideNavContent'

const SideNav = () => {
  const [opened, setOpened] = useState(false)
  const title = opened ? 'Close Navigation' : 'Open Navigation'
  const handleClick = useCallback(() => {
    setOpened(!opened)
  }, [opened])

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title='Navigation'
        padding='xl'
        size='sm'
      >
        <Stack>
          <SideNavContent
           opened={opened}
           setOpened={setOpened}

          />
        </Stack>
      </Drawer>
      <Burger
        size='sm'
        mr='xl'
        opened={opened}
        title={title}
        onClick={handleClick}
      />
    </>
  )
}

export default SideNav
