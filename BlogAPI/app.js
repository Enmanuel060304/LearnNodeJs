import express from 'express'
import { PORT, MONGODB_URI } from './utils/config.js'
import cors from 'cors'
import mongoose from 'mongoose'

import { createRouter } from './routes/blogs.route.js'
import { BlogRepository } from './repository/BlogMongoRepository.js'
import { BlogService } from './service/blog.service.js'
import { BlogController } from './controllers/blog.controller.js'

const blogRepository = new BlogRepository()
const blogService = new BlogService({ BlogRepository: blogRepository })
const blogController = new BlogController({ BlogService: blogService })
const blogRouter = createRouter(blogController)

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

mongoose.connect(MONGODB_URI).then(() => {
  console.log('conectado a mongo db')
}).catch((error) => {
  console.error(`algo malo paso y no pudimos conectarnos a mongo db error ${error}`)
})

export {
  app
}
