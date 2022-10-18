import express from 'express';
import { authorizationMiddleware } from '../middlewares/authorization.js';
import SongsController from '../controllers/songs.js';
export const songsRouter = express.Router();
const songsController = new SongsController()

songsRouter.post('',authorizationMiddleware,songsController.createSong);
songsRouter.get('',songsController.getSongs);
songsRouter.get('/:songId', songsController.getSongById);
songsRouter.get('/fromAlbum/:albumId', songsController.getSongsFromAlbumId);
songsRouter.delete('/:songId',songsController.deleteSong)
