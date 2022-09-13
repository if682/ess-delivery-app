import express from 'express';

import { Song } from '../models/song.js';
import { Artist } from '../models/artist.js';
import { Album } from '../models/album.js';
export const songsRouter = express.Router();

songsRouter.post('',async (request, response) => {
    const userId = request.userId;
    const {name,url,participations,explicit,album} = request.body;
    try {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
        const match = url.match(regExp);
        if(!match || match[2].length !== 11) return response.status(400).send({ error: 'Not a youtube URL' });       

        if(await Song.findOne({ url })) return response.status(400).send({ error: 'Song already exists' });

        const featuringArtist = await Artist.findOne({ 'name' : participations });
        if(participations&&(featuringArtist._id == request.userId)) return response.status(400).send({ error: 'Featuring artist is not valid'});

        if(album.length !== 24) return response.status(400).send({ error: 'Album does not exist'});
        const fatherAlbum = await Album.findById(album);
        if(!fatherAlbum) return response.status(400).send({ error: 'Album does not exist'});

        if(fatherAlbum.artist != userId) return response.status(400).send({ error: 'Album does not belong to this artist'});

        const song = await Song.create({name,url,participations,explicit,album,artist:userId});
        return response.send({ song });           
                   
    } catch (error) {
        return response.status(500).send({ error });
    }
});
