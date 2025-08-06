import request from 'supertest'
import { app } from '../app'

describe('api tes', () => {
  test('GET /api/blogs deberia devolver todos los blogs', async () => {
    const response = await request(app).get('/api/blogs')
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/application\/json/)
    expect(response.body).toHaveLength(8)
  })

  test('POST crear un blog', async () => {
    const newBlog = {
      title: 'Nuevo Blog',
      author: 'Contenido del nuevo blog',
      url: 'https://example.com/nuevo-blog',
      likes: 0
    }

    const response = await request(app).post('/api/blogs').send(newBlog)

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject(newBlog)
  })
})

