import express from 'express';
import { Album } from '../models/album.js';

export const albumsRouter = express.Router();

albumsRouter.post('',async (request, response) => {
    const {name,image} = request.body;
    try {   
        if(await Album.findOne({ name })) return response.status(400).send({ error: 'Album already exists' });
        if(image&&!/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(image)) return response.status(400).send({ error: 'Image format is not valid' });
        const album = await Album.create(request.body);
        return response.send({ album });
    } catch (error) {
        return response.status(400).send({ error: 'Register failed' });
    }
});