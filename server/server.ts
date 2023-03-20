import express = require('express');
import bodyParser = require("body-parser");

import { MusicaService } from './src/musicas-service';
import { Musica } from './src/musica';

var app = express();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

var musicaService: MusicaService = new MusicaService();

app.get('/musicas', function(req, res){
  const musicas = musicaService.get();
  res.send(JSON.stringify(musicas));
});

app.get('/musicas/:id', function(req, res){
  const id = req.params.id;
  const musica = musicaService.getById(id);
  if (musica) {
    res.send(musica);
  } else {
    res.status(404).send({ message: `Musica ${id} could not be found`});
  }
});

app.post('/musicas', function(req: express.Request, res: express.Response){
  const musica: Musica = <Musica> req.body;
  try {
    const result = musicaService.add(musica);
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: "Musica list is full"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message })
  }
});

app.put('/musicas', function (req: express.Request, res: express.Response) {
  const musica: Musica = <Musica> req.body;
  const result = musicaService.update(musica);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ message: `Musica ${musica.id} could not be found.`});
  }
})

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { app, server, closeServer }