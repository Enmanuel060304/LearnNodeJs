export class TODOController {
  constructor ({ todoService }) {
    this.todoService = todoService
  }

  getAllTodos = async (req, res) => {
    const todos = await this.todoService.findAll()
    res.json(todos)
  }

  getTodoById = async (req, res) => {
    const todo = await this.todoService.getTodoById(req.params.id)
    res.json(todo)
  }

  updateTodo = async (req, res) => {
    const updatedTodo = await this.todoService.updateTodo(req.params.id, req.body)
    res.json(updatedTodo)
  }

  createTodo = async (req, res) => {
    const newTodo = await this.todoService.createTodo(req.body)
    res.status(201).json(newTodo)
  }

  deleteTodo = async (req, res) => {
    await this.todoService.deleteTodo(req.params.id)
    res.status(204).send()
  }
}
