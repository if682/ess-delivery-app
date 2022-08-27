import mongoose from 'mongoose';

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  country: {
    type: String,
  },
  genre: {
    type: String,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export const Artist = mongoose.model('Artist', ArtistSchema);