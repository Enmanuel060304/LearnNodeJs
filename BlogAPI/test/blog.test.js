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
      expect(blog._id).toBeDefined()
      expect(blog._id).toBeTruthy()
    })
  })

  
    test('POST /api/blogs incrementa el número de blogs y guarda el contenido correctamente', async () => {
    // Obtener el número de blogs antes del POST
    const blogsAntes = await request(app).get('/api/blogs')
    const totalAntes = blogsAntes.body.length

    const nuevoBlog = {
      title: 'Blog de prueba para POST',
      author: 'Autor de prueba',
      url: 'https://example.com/post-blog',
      likes: 5
    }

    // Crear un nuevo blog
    const response = await request(app).post('/api/blogs').send(nuevoBlog)
    expect(response.status).toBe(201)
    expect(response.body).toMatchObject(nuevoBlog)

    // Obtener el número de blogs después del POST
    const blogsDespues = await request(app).get('/api/blogs')
    const totalDespues = blogsDespues.body.length
    expect(totalDespues).toBe(totalAntes + 1)

    // Verificar que el nuevo blog está en la lista
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
})
