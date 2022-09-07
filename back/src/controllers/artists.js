import express from 'express';
import { Artist } from '../models/artist.js';

export const artistsRouter = express.Router();

// register artist
artistsRouter.post('', async (request, response) => {
  const { email } = request.body;

  try {
    if (await Artist.findOne({ email }))
      return response.status(400).send({ error: 'User already exists' });

    const artist = await Artist.create(request.body);

    artist.password = undefined;

    return response.status(201).send({ artist });
  } catch (error) {
    return response.status(400).json({ message: "Registration failed", error });
  }
});