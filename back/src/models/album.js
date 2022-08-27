import mongoose from 'mongoose';

const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    unique: true,
    required: true,
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

export const Album = mongoose.model('Album', AlbumSchema);