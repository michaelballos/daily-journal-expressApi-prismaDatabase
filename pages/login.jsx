import { 
  PasswordInput,
  Text,
  Card,
  Stack,
  Group,
  Button,
  Input
} from '@mantine/core'
import Link from 'next/link'
import { useMutation } from 'react-query'
const Login = () => {
 

  return (
    <Card
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
    <Stack 
      align='center' 
      justify='center'
    >
      <Text>
        Login
      </Text>
      <Input
        style={{
          width: '25vw',
          padding: '.1rem',
        }}
        placeholder='Email'
      />
      <PasswordInput
        style={{
          width: '25vw',
          padding: '.1rem',
        }}
        placeholder='Password'
      />
      <Group
        position='center'
        spacing={'sm'}>
        <Button
          variant='subtle'
        >
          <Link
            href='/register'>
          Register
          </Link>
        </Button>
        <Button
          variant='subtle'
        >
          Login
        </Button>
      </Group>
    </Stack>
    </Card>
  )
}

export default Login
