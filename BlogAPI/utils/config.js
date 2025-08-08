import dotenv from 'dotenv'

// !dependencias de blogs
import { createRouter } from '../routes/blogs.route.js'
import { BlogRepository } from '../repository/BlogMongoRepository.js'
import { BlogService } from '../service/blog.service.js'
import { BlogController } from '../controllers/blog.controller.js'

// !dependencias de users
import { UserRepository } from '../repository/UserMongoRepository.js'
import { UserService } from '../service/user.service.js'
import { UserController } from '../controllers/user.controller.js'
import { createUserRouter } from '../routes/user.route.js'

// !configuracion de dependencias blogs
const blogRepository = new BlogRepository()
const blogService = new BlogService({ BlogRepository: blogRepository })
const blogController = new BlogController({ BlogService: blogService })
const blogRouter = createRouter(blogController)

// !configuracion de dependencias users

const userRepository = new UserRepository()
const userService = new UserService({ userRepository })
const userController = new UserController({ userService })
const userRouter = createUserRouter(userController)

dotenv.config()
const PORT = process.env.PORT ?? 3000
const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

export {
  PORT,
  MONGODB_URI,
  blogRouter,
  userRouter
}
