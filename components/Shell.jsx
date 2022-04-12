import React, { useState, useCallback } from 'react'
import {
  Group,
  Button,
  AppShell,
  useMantineTheme,
  Header,
  Footer,
  Text,
} from '@mantine/core'
import SideNav from './SideNav'

const Shell = () => {
  const theme = useMantineTheme()

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      fixed
      footer={
        <Footer height={60} p='md'>
          Application footer
        </Footer>
      }
      header={
        <Header height={50} p='md'>
          <Group>
            <SideNav />
            <Text>Application header</Text>
          </Group>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  )
}

export default Shell
