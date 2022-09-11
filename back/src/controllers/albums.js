import express from 'express';
import { Album } from '../models/album.js';
import { Song } from '../models/song.js';

export const albumsRouter = express.Router();

albumsRouter.post('',async (request, response) => {
    const {name,image,year,songs} = request.body;

    const userId = request.userId;
        const same = await Album.findOne({ name });   
        if(same && same.artist == userId) return response.status(400).send({ error: 'Album already exists' });
        if(!songs.length) return response.status(400).send({ error: 'A album needs a song' });
        if(!songs.every((song)=>{
            return song.name && song.url;
        })) return response.status(400).send({ error: 'A song is missing required an argument' });
    
    try {        
        const album = await Album.create({name, image, year, artist : userId});
        await Promise.all(songs.map(async song =>{
            const albumSong = new Song({...song, album: album._id}); 
            
            await albumSong.save();
            
            album.songs.push(albumSong);
        }));

        await album.save();

        return response.send({ album });
        //return response.send(`po`);
    } catch (error) {
        return response.status(400).send({ error: 'Register failed' });
        
    }
});