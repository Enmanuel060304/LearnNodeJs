import { blogSchema } from '../schemas/blogSchema.js'

export const validateBlog = (req, res, next) => {
  const result = blogSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).json({
      errors: result.error.format()
    })
  }
  next()
}
