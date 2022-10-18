import express from 'express';
import cors from 'cors';
import { artistsRouter } from './routes/artists.js';
import { albumsRouter } from './routes/albums.js';
import { songsRouter } from './routes/songs.js';
import { authRouter } from './routes/auth.js';

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb', extended:true}));
app.use(express.urlencoded({limit: '50mb',extended: true}));

app.get("/", (request, response) => {
  return response.status(200).json({ message: "Hello world!" });
});

app.use('/artists', artistsRouter);
app.use('/albums', albumsRouter);
app.use('/songs', songsRouter);
app.use('/auth', authRouter);

export default app;