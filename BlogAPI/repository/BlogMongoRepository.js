import { BlogModel } from '../models/blogModel.js'

export class BlogRepository {
  getAllBlogs = async () => {
    const blogs = await BlogModel.find({})
    return blogs
  }

  createBlog = async (body) => {
    const newBlog = new BlogModel(body)
    return newBlog.save()
  }
}
