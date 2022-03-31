import express = require('express');
import bodyParser = require("body-parser");

import { ClientService } from './src/clients-service';
import { Client } from './src/client';
var fs = require('fs');

var app = express();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

var clientService: ClientService = new ClientService();
var clientFile = './database/client.txt';

app.post('/client', async function(req: express.Request, res: express.Response){ // adicionar cliente
  const client: Client = <Client> req.body;
  try {
    const result = clientService.add(client);
    setClients()
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: "Client could not be add"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message });
  }
});

function getClients() : void {
  fs.readFile(clientFile, 'utf8', function(err: any, data: { toString: () => string; }) {
    if(err) throw err;

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

    for (let i of arr) {
      if (i) {
        console.log(JSON.parse(i.replace('\n', '')));
        clientService.clients.push(JSON.parse(i.replace('\n', '')));
        clientService.idCount++;
      }
    }
  });
}

function setClients() : void {
  fs.writeFile(clientFile, '', function(err: any){
    if(err) throw err;
  });

  for (let i of clientService.clients) {
    fs.appendFile(clientFile, JSON.stringify(i)+'\n', function(err: any){
      if(err) throw err;
    });
  }

}

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  getClients();
});

function closeServer(): void {
  console.log('bye');
  server.close();
}

export { app, server, closeServer }