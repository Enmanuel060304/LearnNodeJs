export class BlogService {
  constructor ({ BlogRepository }) {
    this.BlogRepository = BlogRepository
  }

  getAllBlogs = async () => this.BlogRepository.getAllBlogs()

  createBlog = async (body) => this.BlogRepository.createBlog(body)
}
