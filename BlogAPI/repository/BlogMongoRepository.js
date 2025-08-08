import { BlogModel } from '../models/blogModel.js'
import { UserModel } from '../models/userModel.js'

export class BlogRepository {
  getAllBlogs = async () => {
    const blogs = await BlogModel.find({})
    return blogs
  }

  createBlog = async (body) => {
    const user = await UserModel.findById(body.userId)
    if (!user) {
      throw new Error('User not found')
    }

    const newBlog = await BlogModel.create({
      ...body,
      userId: user._id
    })

    user.blogs = user.blogs.concat(newBlog._id)

    await user.save()
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
