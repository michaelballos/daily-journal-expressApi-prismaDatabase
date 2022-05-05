import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

const HeaderLinks = () => {
  const { user, error } = useUser()
  error ? 'something went wrong please try again' : null
  return user 
  ?  <Link href='/api/auth/login'>Login</Link>
  : <Link href='/api/auth/login'>Login</Link>
}

export default HeaderLinks