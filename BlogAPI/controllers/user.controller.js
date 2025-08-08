export class UserController {
  constructor ({ userService }) {
    this.userService = userService
  }

  getAllUsers = async (req, res) => {
    try {
      const data = await this.userService.getAllUsers()
      res.json(data)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  createUser = async (req, res) => {
    try {
      const newUser = await this.userService.createUser(req.body)
      res.json(newUser)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
