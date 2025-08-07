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

  deleteBlog = async (id) => {
    const result = await BlogModel.deleteOne({ _id: id })
    if (result.deletedCount === 0) {
      throw new Error('Blog not found')
    }
    return result
  }
}
