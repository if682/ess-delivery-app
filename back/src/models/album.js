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
  artist: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Artist',
    require : true,
  },
  songs: [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Song',
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export const Album = mongoose.model('Album', AlbumSchema);