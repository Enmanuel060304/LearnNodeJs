import { Router } from 'express'

export const createUserRouter = (controller) => {
  const userRouter = Router()

  userRouter.get('/', controller.getAllUsers)
  userRouter.post('/', controller.createUser)

  return userRouter
}
