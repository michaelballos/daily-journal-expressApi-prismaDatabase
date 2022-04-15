import { 
  Stack,
  Group,
  Button,
  Input
} from '@mantine/core'

const Login = () => {
  return (
    <div
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
      <Group position='center' spacing={'sm'}>
        <Button
          variant='subtle'
        >
          Register
        </Button>
        <Button
          variant='subtle'
        >
          Login
        </Button>
      </Group>
    </Stack>
    </div>
  )
}

export default Login
