import { TodoModel } from '../models/TODOmodel.js'

export class TodoRepository {
  async getAllTodos () {
    return await TodoModel.find({})
  }

  async getTodoById (id) {
    return await TodoModel.findById(id)
  }

  async updateTodo (id, data) {
    return await TodoModel.findByIdAndUpdate(id, data, { new: true })
  }

  async createTodo (data) {
    const todo = new TodoModel(data)
    return await todo.save()
  }

  async deleteTodo (id) {
    return await TodoModel.findByIdAndDelete(id)
  }
}
