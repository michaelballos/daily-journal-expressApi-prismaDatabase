import { Stack, Center, Group, Button, Card, Input } from '@mantine/core'

const Login = () => {
  return (
    <>
      <Center>
        <div>
          <Stack>
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
                display: 'flex',
                justifyContent: 'space-around',
                paddingLeft: '4rem',
                paddingRight: '4rem',
              }}
            >
              <Button variant='subtle'>Register</Button>
              <Button variant='subtle'>Login</Button>
            </Group>
          </Stack>
        </div>
      </Center>
    </>
  )
}

export default Login
