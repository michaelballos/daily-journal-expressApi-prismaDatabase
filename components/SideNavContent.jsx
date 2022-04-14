import { Stack } from '@mantine/core'
import Link from 'next/link'

const SideNavContent = () => {
  return (
    <Stack>
      <Link href='/login'>Login</Link>
      <Link href='/journal'>Journal</Link>
      <Link href='/register'>Register</Link>
      <Link href='/projects'>Projects</Link>
    </Stack>
  )
}

export default SideNavContent
