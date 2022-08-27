import express from 'express';
import cors from 'cors';
import { artistsRouter } from './controllers/artists.js';

// const { v4: uuid } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  return response.status(200).json({ message: "Hello world!" });
});

app.use('/artists', artistsRouter);

export default app;