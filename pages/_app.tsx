import Head from 'next/head'
import {
  Group,
  AppShell,
  useMantineTheme,
  Header,
  Footer,
} from '@mantine/core'
import '../styles/globals.css'
import SideNav from '../components/SideNav'
import HeaderLinks from '../components/HeaderLinks'
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  const theme = useMantineTheme()
  return (
    <UserProvider>
      <Head>
        <title>Productivity Journal</title>
        <meta name='description' content='A Personal Productivity App' />
      </Head>
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
            <HeaderLinks />
          </Group>
        </Header>
      }
    >
      <Component {...pageProps} />
    </AppShell>
    </UserProvider>
  )
}

export default MyApp
