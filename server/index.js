const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = http.createServer(app);
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});