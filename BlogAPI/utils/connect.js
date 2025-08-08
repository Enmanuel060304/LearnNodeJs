import mongoose from 'mongoose'
import { MONGODB_URI } from './config.js'

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error.message}`)
    process.exit(1)
  }
}
