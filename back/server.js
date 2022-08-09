import express from 'express'
import cors from 'cors'

// const { v4: uuid } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  return response.status(200).json({message: "Hello world!"})
})

export default app;