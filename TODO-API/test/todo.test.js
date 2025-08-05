import supertest from 'supertest'
import { app } from '../app'

describe('Todo API', () => {
  it('should create a new todo', async () => {
    const response = await supertest(app)
      .post('/TODO')
      .send({
        title: 'Test Todo',
        description: 'This is a test todo',
        completed: false
      })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('_id')
    expect(response.body.title).toBe('Test Todo')
    expect(response.body.description).toBe('This is a test todo')
    expect(response.body.completed).toBe(false)
  })
})
