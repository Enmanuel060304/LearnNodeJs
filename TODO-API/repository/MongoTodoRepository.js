import { TodoModel } from '../models/TODOmodel.js'

export class TodoRepository {
  async getAllTodos () {
    return await TodoModel.find({})
  }

  async getTodoById (id) {
    const todo = await TodoModel.findById(id)
    if (!todo) throw new Error('Todo not found')
    return todo
  }

  async updateTodo (id, data) {
    const todo = await TodoModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    })

    if (!todo) throw new Error('Todo not found')
    return todo
  }

  async createTodo (data) {
    const todo = new TodoModel(data)
    return await todo.save()
  }

  async deleteTodo (id) {
    const deletedTodo = await TodoModel.findByIdAndDelete(id)
    if (!deletedTodo) throw new Error('Todo not found')
    return deletedTodo
  }
}
