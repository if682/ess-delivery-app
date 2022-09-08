import express from 'express';
import { Album } from '../models/album.js';
import { Song } from '../models/song.js';

export const albumsRouter = express.Router();

albumsRouter.post('',async (request, response) => {
    const {name,image,year,createdAt,songs} = request.body;
    try {   
        if(await Album.findOne({ name })) return response.status(400).send({ error: 'Album already exists' });
        //if(image&&!/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(image)) return response.status(400).send({ error: 'Image format is not valid' });
        const album = await Album.create({name, image, year, createdAt, artist : request.userId});
        await Promise.all(songs.map(async song =>{
            const albumSong = new Song({...song, album: album._id}); 
            
            await albumSong.save();
            
            album.songs.push(albumSong);
        }));

        await album.save();

        return response.send({ album });
    } catch (error) {
        return response.status(400).send({ error: 'Register failed' });
    }
});