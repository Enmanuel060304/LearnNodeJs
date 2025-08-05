import { Router } from 'express'

export const createRouter = (controller) => {
  const BlogsRouter = Router()

  BlogsRouter.get('/', controller.getAllBlogs)

  BlogsRouter.post('/', controller.createBlog)

  return BlogsRouter
}
