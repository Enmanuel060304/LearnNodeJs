export class UserService {
  constructor ({ userRepository }) {
    this.userRepository = userRepository
  }

  getAllUsers = async () => await this.userRepository.getAllUsers()

  createuser = async (data) => await this.userRepository.createUser(data)
}
