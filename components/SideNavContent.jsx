import { Stack } from '@mantine/core'
import Link from 'next/link'
import SideNav from './SideNav'

const SideNavContent = () => {
  return (
    <>
      <Stack>
      
        <Link href='/journal'>Journal</Link>
        <Link href='/projects'>Projects</Link>
      </Stack>
    </>
  )
}

export default SideNavContent
