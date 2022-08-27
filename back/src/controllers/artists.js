import express from 'express';
import { Artist } from '../models/artist.js';

export const artistsRouter = express.Router();

// register artist
artistsRouter.post('', async (request, response) => {
  try {
    const artist = await Artist.create(request.body);

    return response.status(201).send({ artist });
  } catch (error) {
    return response.status(400).json({ message: "Registration failed", error });
  }
});