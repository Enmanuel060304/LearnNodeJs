import request from 'supertest'
import { app } from '../app'

describe('api tes', () => {
  test('GET /api/blogs deberia devolver todos los blogs', async () => {
    const response = await request(app).get('/api/blogs')
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/application\/json/)
    // expect(response.body).toHaveLength(9)
  })

  test('GET deberia tener un id en cada blog', async () => {
    const response = await request(app).get('/api/blogs')
    response.body.forEach(blog => {
      expect(blog.id).toBeDefined()
      expect(blog.id).toBeTruthy()
    })
  })

  
    test('POST /api/blogs incrementa el número de blogs y guarda el contenido correctamente', async () => {
    const blogsAntes = await request(app).get('/api/blogs')
    const totalAntes = blogsAntes.body.length

    const nuevoBlog = {
      title: 'Blog de prueba para POST',
      author: 'Autor de prueba',
      url: 'https://example.com/post-blog',
      likes: 5
    }

    const response = await request(app).post('/api/blogs').send(nuevoBlog)
    expect(response.status).toBe(201)
    expect(response.body).toMatchObject(nuevoBlog)

    const blogsDespues = await request(app).get('/api/blogs')
    const totalDespues = blogsDespues.body.length
    expect(totalDespues).toBe(totalAntes + 1)

    const existe = blogsDespues.body.some(blog =>
      blog.title === nuevoBlog.title &&
      blog.author === nuevoBlog.author &&
      blog.url === nuevoBlog.url &&
      blog.likes === nuevoBlog.likes
    )
    expect(existe).toBe(true)
  })

  test('POST /api/blogs sin likes debe asignar likes = 0', async () => {
    const nuevoBlog = {
      title: 'Blog sin likes',
      author: 'Autor de prueba',
      url: 'https://example.com/post-blog'
    }

    const response = await request(app).post('/api/blogs').send(nuevoBlog)
    expect(response.status).toBe(201)
    expect(response.body).toMatchObject({
      ...nuevoBlog,
      likes: 0
    })
  })

  test('POST /api/blogs sin title o url debe devolver 400', async () => {
    const nuevoBlog = {
      author: 'Autor de prueba',
      likes: 0
    }

    const response = await request(app).post('/api/blogs').send(nuevoBlog)
    expect(response.status).toBe(400)
  })

  test('DELETE /api/blogs/:id debe eliminar un blog existente', async () => {
    const blogsAntes = await request(app).get('/api/blogs')
    const blogAEliminar = blogsAntes.body[0]

    const response = await request(app).delete(`/api/blogs/${blogAEliminar.id}`)
    expect(response.status).toBe(204)

    const blogsDespues = await request(app).get('/api/blogs')
    expect(blogsDespues.body).toHaveLength(blogsAntes.body.length - 1)

    const existe = blogsDespues.body.some(blog => blog.id === blogAEliminar.id)
    expect(existe).toBe(false)
  })
})
