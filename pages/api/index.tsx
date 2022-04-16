import express, {
  Router,
  RequestHandler,
  NextFunction,
  Response,
  Request,
} from 'express'

/**
 * route interface for each route in 'routes' field of 'Conroller' class
 */ 
interface IRoute {
  path: string
  method: string
  handler: (req: Request, res: Response, next: NextFunction) => void | Promise<void>
  localMiddleware: ((req: Request, res: Response, next: NextFunction) => void)[]
}

/**
 * http methods
 */
export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const app = express()
const port = 3000

class AuthController extends Controller {
/**
 * this.routes will be mapped to /auth
 */
  path = '/auth' 
  routes = [
    {

/**
 * will become /auth/login
 */
      path: '/login',
      method: 'get',
      handler: this.handleLogin,
      localMiddleware: []
    },
    {
      path: '/register',
      method: 'post',
      handler: this.handleRegister,
    }
/*
 * other routes
 */
  ]

  constructor() {
    super()
  } 

  async handleLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // gets credentials from client
      const { username, password } = req.body
      const userService = new UserService( username, password )
      // use login service
      const result = await userService.login()
      if (result.success) {
        // send success response
        res.status(200).send(result)
      } else {
        // send error response
        res.status(401).send(result)
      }
    } catch (error) {
      // handle error
      next(error)
    }
  }
  
  async handleRegister(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await new UserService(req.body).register()

      if (result.success) {
        // send success response
        res.status(200).send(result)
      } else {
        // send error response
        res.status(401).send(result)
      }
    } catch (error) {
      // handle error
      next(error)
    }
  }
}