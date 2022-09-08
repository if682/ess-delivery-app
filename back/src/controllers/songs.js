import express from 'express';

import { Song } from '../models/song.js';
import { Artist } from '../models/artist.js';
export const songsRouter = express.Router();

songsRouter.post('',async (request, response) => {
    const {url,participations} = request.body;
    try {
        let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
        let match = url.match(regExp);
        if(match && match[2].length == 11){        
            if(await Song.findOne({ url })) return response.status(400).send({ error: 'Song already exists' });
            if(!participations||await Artist.findOne({ 'name' : participations })){
                const song = await Song.create(request.body);
                return response.send({ song });
                
            }
            else return response.status(400).send({ error: 'Featuring artist does not exist'});
            
        }
        else return response.status(400).send({ error: 'Not a youtube URL' });         
    } catch (error) {
        return response.status(400).send({ error: 'Register failed' });
    }
});
