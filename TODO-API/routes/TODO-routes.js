import { Router } from 'express'
import { TODOController } from '../controllers/TODO-controller.js'

export const createTodoRouter = ({ todoModel }) => {
  const todoRouter = Router()
  const todoController = new TODOController({ todoModel })

  todoRouter.get('/', todoController.getAllTodos)
  todoRouter.get('/:id', todoController.getTodoById)
  todoRouter.patch('/:id', todoController.updateTodo)
  todoRouter.post('/', todoController.createTodo)
  todoRouter.delete('/:id', todoController.deleteTodo)

  return todoRouter
}
