import express from 'express'
import { PORT, blogRouter, userRouter } from './utils/config.js'
import cors from 'cors'
import { connectToDatabase } from './utils/connect.js'
import { unknownEndpoint } from './middlewares/unknowEndPoint.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

app.use(unknownEndpoint)

connectToDatabase()

export {
  app
}
