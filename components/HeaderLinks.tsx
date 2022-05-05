import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

const HeaderLinks = () => {
  const { user } = useUser()

  return user 
  ?  <Link href='/api/auth/logout'>Logout</Link>
  : <Link href='/api/auth/login'>Login</Link>
}

export default HeaderLinks