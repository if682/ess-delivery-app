import express from 'express';
import { authorizationMiddleware } from '../middlewares/authorization.js';
import { Artist } from '../models/artist.js';

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
artistsRouter.get('/:artistId', async (request, response) => {
  try{
    const artist = await Artist.findOne({"_id": request.params.artistId});
    if (artist) return response.send(artist);
    else return response.status(404).json({message: "Could not find the artist"});
  }catch(error){
    return response.status(500).json({message: "Something went wrong with the server", error});
  }
})

// Edit artist informations
artistsRouter.put('/', authorizationMiddleware, async (request, response) => {
  try{
    if (await Artist.findOne({"_id": request.userId})) {
      const body = request.body;
      delete body.password;
      delete body.createdAt;
      delete body._id;
      await Artist.updateOne({"_id": request.userId}, body);
      const artist =  await Artist.findOne({"_id": request.userId});
      
      return response.send(artist);
    }
    else return response.status(404).json({message: "Could not find the artist"});
  }catch(error){
    return response.status(500).json({message: "Something went wrong with the server", error});
  }
})
