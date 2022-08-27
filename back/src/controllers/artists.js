import express from 'express';
import { Artist } from '../models/artist.js';

export const artistsRouter = express.Router();

// register artist
artistsRouter.post('',(request, response) => {
  return response.send(201)
})