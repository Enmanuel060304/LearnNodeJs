import { startServer } from './app.js'
import { TodoRepository } from './repository/MongoTodoRepository.js'

const todoRepository = new TodoRepository()
startServer(todoRepository)
