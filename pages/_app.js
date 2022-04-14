import {
  Group,
  AppShell,
  useMantineTheme,
  Header,
  Footer,
  Text,
} from '@mantine/core'
import '../styles/globals.css'
import SideNav from '../components/SideNav.jsx'

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </AppShell>
  )
}

export default MyApp
