export const unknownEndpoint = (req, res) => {
  res.status(404).json({
    errorMessage: 'Endpoint not found',
    endPoints: {
      blogs: {
        getAll: '/api/blogs',
        create: '/api/blogs',
        delete: '/api/blogs/:id'
      },
      users: {
        getAll: '/api/users',
        create: '/api/users',
        delete: '/api/users/:id'
      }
    }
  })
}
