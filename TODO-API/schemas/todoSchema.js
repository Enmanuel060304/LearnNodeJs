import { z } from 'zod'

const todoSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string'
  }),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string'
  }).max(1000).optional(),
  completed: z.boolean().default(false)
})

export { todoSchema }
