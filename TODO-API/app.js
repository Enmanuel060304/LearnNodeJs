import express from 'express'

import { createTodoRouter } from './routes/TODO-routes.js'
import { TodoRepository } from './repository/MongoTodoRepository.js'
import { TODOController } from './controllers/TODO-controller.js'
import { TodoService } from './service/todoService.js'
import mongoose from 'mongoose'
import { MONGO_URL } from './utils/config.js'

// inyecccion manual de dependencias
const todoRepository = new TodoRepository()
const todoService = new TodoService({ TodoRepository: todoRepository })
const todoController = new TODOController(todoService)
const todoRouter = createTodoRouter(todoController)

const app = express()

app.use(express.json())

app.use('/TODO', todoRouter)

app.use((req, res) => {
  res.status(404).send('Route not found')
})

mongoose.connect(MONGO_URL).then(() => {
  console.log('Connected to MongoDB')
}).catch(err => {
  console.error('Failed to connect to MongoDB', err)
})

export { app }
