import mongoose from 'mongoose';

const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  artist: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Artist',
    required : true,
  },
  songs: [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Song',
    required : true,
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export const Album = mongoose.model('Album', AlbumSchema);