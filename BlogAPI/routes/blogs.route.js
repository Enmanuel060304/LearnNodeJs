import { Router } from 'express'
import { validateBlog } from '../middlewares/validator.js'

export const createRouter = (controller) => {
  const BlogsRouter = Router()

  BlogsRouter.get('/', controller.getAllBlogs)

  BlogsRouter.post('/', validateBlog, controller.createBlog)

  BlogsRouter.delete('/:id', controller.deleteBlog)

  return BlogsRouter
}
