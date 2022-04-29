import express = require('express');
import bodyParser = require("body-parser");

import { RestaurantesService } from './src/restaurantes-service';
import { Restaurante } from './src/restaurante';

import { Status } from './src/status';
import { Status_service } from './src/status-service';
var app = express();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

var restauranteService: RestaurantesService = new RestaurantesService();

app.get('/restaurant', function(req, res){
  const restaurantes = restauranteService.get();
  res.send(JSON.stringify(restaurantes));
});

app.get('/restaurant/:cnpj', function(req, res){
  const cnpj = req.params.cnpj;
  const restaurante = restauranteService.getById(cnpj);
  if (restaurante) {
    res.send(restaurante);
  } else {
    res.status(404).send({ message: `Restaurante ${cnpj} could not be found`});
  }
});

app.post('/restaurant', function(req: express.Request, res: express.Response){
  const restaurante: Restaurante = <Restaurante> req.body;
  try {
    const result = restauranteService.add(restaurante);
    if (result) {
      res.status(201).send(result);
      console.log(restaurante);
    } else {
      res.status(403).send({ message: "Restaurante list is full"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message })
  }
});

app.put('/restaurant', function (req: express.Request, res: express.Response) {
  const restaurante: Restaurante = <Restaurante> req.body;
  const result = restauranteService.update(restaurante);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ message: `Restaurante ${restaurante.cnpj} could not be found.`});
  }
})

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { app, server, closeServer }