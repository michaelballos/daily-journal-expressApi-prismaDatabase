import { useState, useCallback } from 'react'
import { Drawer, Group, Burger, Stack } from '@mantine/core'

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
      <Group position='center'>
        <Burger opened={opened} title={title} onClick={handleClick} />
      </Group>
    </>
  )
}

export default SideNav
