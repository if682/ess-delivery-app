import express from 'express';
import ArtistsController from '../controllers/artists.js';
import { authorizationMiddleware } from '../middlewares/authorization.js';

export const artistsRouter = express.Router();

const artistController = new ArtistsController()

artistsRouter.post('', artistController.createArtist);
artistsRouter.get('/:artistId', artistController.getArtist)
artistsRouter.put('/', authorizationMiddleware, artistController.editArtist)
