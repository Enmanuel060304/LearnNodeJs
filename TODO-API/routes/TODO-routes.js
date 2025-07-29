import { Router } from 'express'
import { safeValidation, partialValidation } from './../middlewares/validation.js'

export const createTodoRouter = (todoController) => {
  const todoRouter = Router()

  todoRouter.get('/', todoController.getAllTodos)
  todoRouter.get('/:id', todoController.getTodoById)
  todoRouter.patch('/:id', partialValidation, todoController.updateTodo)
  todoRouter.post('/', safeValidation, todoController.createTodo)
  todoRouter.delete('/:id', partialValidation, todoController.deleteTodo)

  return todoRouter
}
