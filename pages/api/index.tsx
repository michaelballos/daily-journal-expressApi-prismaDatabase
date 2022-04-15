import express, { Response, Request } from 'express'

const app = express()
const port = 3000

app.get('/users', (req: Request, res: Response) => {
  // Authenticate the user
  res.send('users!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
