export class TODOController {
  constructor ({ todoService }) {
    this.todoService = todoService
  }

  getAllTodos = async (req, res) => {
    try {
      const todos = await this.todoService.getAllTodos()
      res.json(todos)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  getTodoById = async (req, res) => {
    try {
      const todo = await this.todoService.getTodoById(req.params.id)
      res.json(todo)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  updateTodo = async (req, res) => {
    try {
      const todo = await this.todoService.updateTodo(req.params.id, req.body)
      res.json(todo)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  createTodo = async (req, res) => {
    try {
      const newTodo = await this.todoService.createTodo(req.body)
      res.status(201).json(newTodo)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  deleteTodo = async (req, res) => {
    try {
      await this.todoService.deleteTodo(req.params.id)
      res.status(204).json({ message: 'Todo deleted successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
