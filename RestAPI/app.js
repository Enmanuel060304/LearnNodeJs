import express from 'express'
import crypto from 'crypto'
import { z } from 'zod'

const PORT = process.env.PORT ?? 3000

let notas = [
  { id: crypto.randomUUID(), title: 'Note 1', content: 'Content of note 1' },
  { id: crypto.randomUUID(), title: 'Note 2', content: 'Content of note 2' },
  { id: crypto.randomUUID(), title: 'Note 3', content: 'Content of note 3' },
  { id: crypto.randomUUID(), title: 'Note 4', content: 'Content of note 4' },
  { id: crypto.randomUUID(), title: 'Note 5', content: 'Content of note 5' }
]

const notaSchema = z.object({
  title: z.string({ required_error: 'Title is required', invalid_type_error: 'Title must be a string' }).min(2).max(100),
  content: z.string({ required_error: 'Content is required', invalid_type_error: 'Content must be a string' }).min(2).max(1000)
})

const app = express()
app.disable('x-powered-by')
app.use(express.json())

app.post('/api/notas', (req, res) => {
  const result = notaSchema.safeParse(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const newNota = {
    id: crypto.randomUUID(),
    ...result.data
  }

  notas = notas.concat(newNota)

  res.status(201).json(newNota)
})

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' })
})

app.get('/api/notas', (req, res) => {
  res.json(notas)
})

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' })
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
