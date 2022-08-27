import mongoose from 'mongoose';

export const connectDB = async (DB_URL) => {
  try {
    await mongoose.connect(DB_URL)
    console.log("Database connection established!")
  } catch (error) {
    console.log("Error connecting Database instance due to:", error)
    throw error
  }
}

mongoose.Promise = global.Promise;
