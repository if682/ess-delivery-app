import express from 'express';
import cors from 'cors';
import { artistsRouter } from './controllers/artists.js';
import { albumsRouter } from './controllers/albums.js';
import { songsRouter } from './controllers/songs.js';
import { loginRouter } from './controllers/login.js';

// const { v4: uuid } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  return response.status(200).json({ message: "Hello world!" });
});

app.use('/artists', artistsRouter);
app.use('/albums', albumsRouter);
app.use('/songs', songsRouter);
app.use('/login', loginRouter);

export default app;