import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    unique: true,
    required: true,
  },
  participations: {
    type: String,
  },
  explicit: {
    type: Boolean
  },
  artist: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Artist',
    required : true,
  },
  album : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Album',
    required : true,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export const Song = mongoose.model('Song', SongSchema);