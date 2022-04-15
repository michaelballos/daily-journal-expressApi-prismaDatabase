import { Group, Button, Card, Input } from '@mantine/core'

const Login = () => {
  return (
    <>
      <Input
        style={{
          width: '25vw',
          padding: '.25rem',
        }}
        placeholder='Email'
      />
      <Input
        style={{
          width: '25vw',
          padding: '.25rem',
        }}
        placeholder='Password'
      />
      <Group
        style={{
          padding: '.25rem',
        }}
      >
        <Button
          style={{
            width: '7vw',
          }}
          variant='subtle'
        >
          Register
        </Button>
        <Button
          style={{
            width: '7vw',
          }}
          variant='subtle'
        >
          Login
        </Button>
      </Group>
    </>
  )
}

export default Login
