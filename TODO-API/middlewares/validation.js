import { todoSchema } from '../schemas/todoSchema.js'

const safeValidation = (req, res, next) => {
  const result = todoSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({
      error: JSON.parse(result.error.message)
    })
  }

  next()
}

const partialValidation = (req, res, next) => {
  const result = todoSchema.partial().safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({
      error: JSON.parse(result.error.message)
    })
  }

  next()
}

export { safeValidation, partialValidation }
