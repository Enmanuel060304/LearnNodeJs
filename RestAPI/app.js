import express from 'express'

const PORT = process.env.PORT ?? 3000

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' })
})

app.get('/health', (req, res) => {
  res.json({ status: 'OK' })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' })
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
