import express from 'express';
import { Artist } from '../models/artist.js';
import { Song } from '../models/song.js';

export const artistsRouter = express.Router();

// register artist
artistsRouter.post('', async (request, response) => {
  const { email } = request.body;

  try {
    if (await Artist.findOne({ email }))
      return response.status(400).send({ error: 'User already exists' });

    const artist = await Artist.create(request.body);

    artist.password = undefined;

    return response.status(201).send({ artist });
  } catch (error) {
    return response.status(400).json({ message: "Registration failed", error });
  }
});

// Get artist information
artistsRouter.get('/:name', async (request, response) => {
  try{
    const artist = await Artist.findOne({"name": request.params.name});
    if (artist) response.send(artist);
    else throw "Artist doesn't exist in the database";
  }catch(error){
    return response.status(404).json({message: "Could not find the artist", error});
  }
})

// Get artist musics
artistsRouter.get('/:name/songs', async (request, response) => {
  try{
    const artist = await Artist.findOne({"name": request.params.name});
    const songs = await Song.find({"participations": request.params.name});
    if (artist && songs) response.send(songs);
    else if (!artist) throw "Artist doesn't exist in the database";
    else if (!songs) response.send({});
  }catch(error){
    return response.status(404).json({message: "Could not find any music with the artist", error});
  }
})

// Edit artist informations
artistsRouter.put('/:name', async (request, response) => {
  try{
    const artist = await Artist.findOne({"name": request.params.name});  
    if (artist) {
      for (let values in request.body) { artist[values] = request.body[values]; }
      return response.send(artist);
    }
    else throw "Artist doesn't exist in the database";
  }catch(error){
    console.log(error);
    return response.status(404).json({message: "Could not find the artist", error});
  }
})
