export class TodoService {
  constructor ({ TodoRepository }) {
    this.todoRepository = TodoRepository
  }

  getAllTodos = async () => {
    return this.todoRepository.getAllTodos()
  }

  getTodoById = async (id) => {
    return this.todoRepository.getTodoById(id)
  }

  updateTodo = async (id, data) => {
    return this.todoRepository.updateTodo(id, data)
  }

  createTodo = async (data) => {
    return this.todoRepository.createTodo(data)
  }

  deleteTodo = async (id) => {
    return this.todoRepository.deleteTodo(id)
  }
}
