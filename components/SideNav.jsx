import { useState, useCallback } from 'react'
import {
  Drawer,
  useMantineTheme,
  Group,
  Burger,
  Stack,
  MediaQuery,
  Aside,
} from '@mantine/core'

const SideNav = ({ opened, setOpened, handleClick }) => {
  const title = opened ? 'Close Navigation' : 'Open Navigation'
  const [opened, setOpened] = useState(false)
  const handleClick = useCallback(() => {
    setOpened(!opened)
  }, [opened])
  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title='Register'
        padding='xl'
        size='xl'
      >
        <Stack></Stack>
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
