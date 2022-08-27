import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

ArtistSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

export const Artist = mongoose.model('Artist', ArtistSchema);