import {
  PasswordInput,
  Text,
  Card,
  Stack,
  Group,
  Button,
  Input,
} from '@mantine/core'
import Link from 'next/link'

const Register = () => {
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
      <Stack align='center' justify='center'>
        <Text>Register</Text>
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
          required
          placeholder='Password'
          label='Password'
          description='Password must include at least one letter, number and special character'
        />
        <PasswordInput
          style={{
            width: '25vw',
            padding: '.1rem',
          }}
          required
          label='Retype Password'
          placeholder='Password'
          description='Password must match'
        />
        <Group position='center' spacing={'sm'}>
          <Button
            variant='subtle'
          >
            Register
          </Button>
        </Group>
      </Stack>
    </Card>
  )
}

export default Register
