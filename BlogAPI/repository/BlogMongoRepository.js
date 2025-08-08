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
    const result = await BlogModel.findByIdAndDelete(id)
    if (!result) {
      throw new Error('Blog not found')
    }
    return result
  }

  updateBlog = async (id, newData) => {
    const response = await BlogModel.findByIdAndUpdate(id, newData, { new: true })
    if (!response) {
      throw new Error('Blog not found')
    }
    return response
  }
}
