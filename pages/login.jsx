import { Stack, Group, Card, Input } from '@mantine/core'
const Login = () => {
  return (
  <Card
    style={
      {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }
    }
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
  </Card>
  )
}

export default Login
