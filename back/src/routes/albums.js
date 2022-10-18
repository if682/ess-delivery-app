import express from 'express';
import { AlbumsController } from '../controllers/albums.js';
import { authorizationMiddleware } from '../middlewares/authorization.js';


export const albumsRouter = express.Router();
export const albumsController = new AlbumsController()

albumsRouter.post('', authorizationMiddleware, albumsController.createAlbum);
albumsRouter.get('', albumsController.getAlbums);
albumsRouter.get('/:albumId', albumsController.getAlbumById);
albumsRouter.get('/fromArtist/:artistId', albumsController.getAlbumByArtistId);
albumsRouter.put('/:albumId', authorizationMiddleware, albumsController.updateAlbum)
