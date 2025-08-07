import mongoose from 'mongoose'
import { use } from 'react'

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  passwordhash: String,
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
    }
  ]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordhash
  }
})

const User = mongoose.model('User', userSchema)

export default User
