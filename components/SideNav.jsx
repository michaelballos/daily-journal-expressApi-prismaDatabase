import { useState, useCallback } from 'react'
import { Drawer, Burger, Stack } from '@mantine/core'

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
