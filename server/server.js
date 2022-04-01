//Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");

const {ClientService} = require("./src/clients-service");

var fs = require('fs');
var app = express();

exports.app = app;

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json());

var clientService = new ClientService();
var clientFile = './database/client.txt';

app.get('/clients', function (req, res) {
    // get client list
    try {
      const result = clientService.get();
      if (result) {
        res.status(201).send(result);
      }
      else {
        res.status(403).send({ message: "Client list could not be found" });
      }
    }
    catch (err) {
      const { message } = err;
      res.status(400).send({ message });
    }
});
app.get('/client/:id', function (req, res) {
    // get client data by ID
    const id = req.params.id;
    try {
      const result = clientService.getById(id);
      if (result) {
        res.status(201).send(result);
      }
      else {
        res.status(403).send({ message: "Client could not be found" });
      }
    }
    catch (err) {
      const { message } = err;
      res.status(400).send({ message });
    }
});

app.post('/client', function (req, res) {
    // register
    const client = req.body;
    try {
      const result = clientService.add(client);
      setClients();
      if (result) {
        res.status(201).send(result);
      }
      else {
        res.status(403).send({ message: "Client could not be added" });
      }
    }
    catch (err) {
      const { message } = err;
      res.status(400).send({ message });
    }
});
app.delete('/client/:id', function (req, res) {
    // delete
    const id = req.params.id;
    try {
      const result = clientService.delete(id);
      console.log('result:', result);
      setClients();
      if (result) {
        res.status(201).send({ message: "Client successfully deleted" });
      }
      else {
        res.status(403).send({ message: "Client could not be deleted" });
      }
    }
    catch (err) {
      const { message } = err;
      res.status(400).send({ message });
    }
});
app.put('/client', function (req, res) {
    // update
    const client = req.body;
    try {
      const result = clientService.update(client);
      setClients();
      if (result) {
        res.status(201).send(result);
      }
      else {
        res.status(403).send({ message: "Client could not be updated" });
      }
    }
    catch (err) {
      const { message } = err;
      res.status(400).send({ message });
    }
});
app.post('/client/login', function (req, res) {
    // login
    const email = req.body.email;
    const password = req.body.password;
    try {
      const result = clientService.authenticate(email, password);
      if (result) {
        res.status(201).send({ message: "Client authenticated" });
      }
      else {
        res.status(403).send({ message: "Client could not authenticate" });
      }
    }
    catch (err) {
      const { message } = err;
      res.status(400).send({ message });
    }
});

function getClients() {
    fs.readFile(clientFile, 'utf8', function (err, data) {
        if (err)
            throw err;
        const arr = data.toString().replace(/\r\n/g, '\n').split('\n');
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

function setClients() {
    fs.writeFile(clientFile, '', function (err) {
        if (err)
            throw err;
    });
    for (let i of clientService.clients) {
        fs.appendFile(clientFile, JSON.stringify(i) + '\n', function (err) {
            if (err)
                throw err;
        });
    }
}

var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    getClients();
});
exports.server = server;

function closeServer() {
    server.close();
}
exports.closeServer = closeServer;