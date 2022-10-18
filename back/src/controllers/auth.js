import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Artist } from '../models/artist.js';
export default class AuthController {
  constructor() {

  }

  login = async (request, response) => {
    const { email, password } = request.body;

    const artist = await Artist.findOne({ email }).select('+password');

    if (!artist) {
      return response.status(400).send({ error: 'Invalid credentials' });
    }

    if (!await bcrypt.compare(password, artist.password)) {
      return response.status(400).send({ error: 'Invalid credentials' });
    }

    artist.password = undefined;

    const token = jwt.sign({ id: artist.id }, process.env.JWT_HASH_SECRET, {
      expiresIn: 86400
    });

    response.send({ artist, token });
  }

  validateToken = async(request, response)=>{
    return response.json({ userId: request.userId });
  }
}