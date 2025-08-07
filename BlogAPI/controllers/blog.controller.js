export class BlogController {
  constructor ({ BlogService }) {
    this.BlogService = BlogService
  }

  getAllBlogs = async (req, res) => {
    try {
      const blogs = await this.BlogService.getAllBlogs()
      res.json(blogs)
    } catch (error) {
      res.status(500).json({ errorMessage: error.message })
    }
  }

  createBlog = async (req, res) => {
    try {
      const newBlog = await this.BlogService.createBlog(req.body)
      res.status(201).json(newBlog)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  deleteBlog = async (req, res) => {
    try {
      const { id } = req.params
      await this.BlogService.deleteBlog(id)
      res.status(204).send()
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
