import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

export const BlogModel = mongoose.model('Blog', blogSchema, 'blogs')
