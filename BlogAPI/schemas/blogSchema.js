import { z } from 'zod'

export const blogSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  url: z.string().min(1, { message: 'URL is required' }),
  likes: z.number().min(0).optional()
})
