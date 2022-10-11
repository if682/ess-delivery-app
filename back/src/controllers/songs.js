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
        return response.status(500).send({message: "Something went wrong with the server", error});
    }
});

songsRouter.get('',async (request, response) => {
    try {
        const songs = await Song.find();
        return response.send({songs});
    } catch (error) {
        return response.status(500).send({ message: 'Error loading songs',error });
    }
});
songsRouter.get('/:songId', async (request, response) => {
    try{
      const song = await Song.findOne({"_id": request.params.songId});
      if (song) return response.send(song);
      else return response.status(404).json({message: "Could not find the song"});
    }catch(error){
      return response.status(500).json({message: "Something went wrong with the server", error});
    }
});
songsRouter.get('/fromAlbum/:albumId', async (request, response) => {
    try{
      const songs = await Song.find({"album": request.params.albumId});
      if (songs){
        return response.send(songs);
     }
      else return response.status(404).json({message: "Album does not exist or album has no songs"});
    }catch(error){
      return response.status(500).json({message: "Something went wrong with the server", error});
    }
});
songsRouter.delete('/:songId',async (request, response) => {
    try{
      const song = await Song.findByIdAndDelete({"_id": request.params.songId});
      if (song){
        return response.send(song);
     }
      else return response.status(404).json({message: "Song does not exist"});
    }catch(error){
      return response.status(500).json({message: "Something went wrong with the server", error});
    }
})
