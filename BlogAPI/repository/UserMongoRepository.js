import { UserModel } from '../models/userModel.js'

export class UserRepository {
  getAllUsers = async () => {
    const data = await UserModel.find({})
    return data
  }

  createUser = async (data) => {
    const newUser = new UserModel(data)
    return newUser.save()
  }
}
