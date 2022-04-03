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

app.get('/clients', function(req: express.Request, res: express.Response){ // adicionar cliente
  // get client list
  try {
    const result = clientService.get();

    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: "Client list could not be found"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message });
  }
});

app.get('/client/:id', function(req: express.Request, res: express.Response){ // adicionar cliente
  // get client data by ID
  const id: number = <number> req.params.id;
  try {
    const result = clientService.getById(id);

    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: "Client could not be found"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message });
  }
});

app.post('/client', function(req: express.Request, res: express.Response){ // adicionar cliente
  // register
  const client: Client = <Client> req.body;
  try {
    const result = clientService.add(client);
    setClients();

    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: "Client could not be added"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message });
  }
});

app.delete('/client/:id', function (req: express.Request, res: express.Response) {
  // delete
  const id: number = <number> req.params.id;
  try {
    const result = clientService.delete(id);
    console.log('result:', result);
    setClients();

    if (result) {
      res.status(201).send({ message: "Client successfully deleted"});
    } else {
      res.status(403).send({ message: "Client could not be deleted"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message });
  }
});

app.put('/client', function (req: express.Request, res: express.Response) {
  // update
  const client: Client = <Client> req.body;
  try {
    const result = clientService.update(client);
    setClients();

    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: "Client could not be updated"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message });
  }
});

app.post('/client/login', function(req: express.Request, res: express.Response){ 
  // login
  const email: string = <string> req.body.email;
  const password: string = <string> req.body.password;
  try {
    const result = clientService.authenticate(email, password);

    if (result) {
      res.status(201).send({ message: "Client authenticated"});
    } else {
      res.status(403).send({ message: "Client could not authenticate"});
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
        //console.log(JSON.parse(i.replace('\n', '')));
        var obj = JSON.parse(i.replace('\n', ''));
        clientService.clients.push(obj);
        clientService.idCount = clientService.idCount > obj.id + 1 ? clientService.idCount : obj.id + 1;
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
  server.close();
}

export { app, server, closeServer }