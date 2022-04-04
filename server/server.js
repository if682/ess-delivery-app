const express = require('express');
const bodyParser = require('body-parser');

const { ClientService } = require('./src/clients/clients-service');
const { OrderService } = require('./src/orders/orders-service');

var app = express();

exports.app = app;

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json());

var clientService = new ClientService();
var orderService = new OrderService();

app.get('/clients', function (req, res) {
  // get client list
  try {
    const result = clientService.get();
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: 'Client list could not be found' });
    }
  } catch (err) {
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
    } else {
      res.status(403).send({ message: 'Client could not be found' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.post('/client', function (req, res) {
  // register
  const client = req.body;
  try {
    const result = clientService.add(client);
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: 'Client could not be added' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.delete('/client/:id', function (req, res) {
  // delete
  const id = req.params.id;
  try {
    const result = clientService.delete(id);
    if (result) {
      res.status(201).send({ message: 'Client successfully deleted' });
    } else {
      res.status(403).send({ message: 'Client could not be deleted' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.put('/client', function (req, res) {
  // update
  const client = req.body;
  try {
    const result = clientService.update(client);
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: 'Client could not be updated' });
    }
  } catch (err) {
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
      const client = clientService.getByEmail(email);
      res
        .status(201)
        .send({ message: 'Client authenticated', token: client.id });
    } else {
      res.status(403).send({ message: 'Client could not authenticate' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.post('/client/check_password/:id', function (req, res) {
  // login
  const id = req.params.id;
  const password = req.body.password;
  try {
    const result = clientService.checkPassword(id, password);
    if (result) {
      res.status(201).send({ message: 'Correct password' });
    } else {
      res.status(403).send({ message: 'Incorrect password' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.post('/client/forgot_password/:email', function (req, res) {
  // login
  const email = req.params.email;
  try {
    const result = clientService.forgotPassword(email);
    if (result) {
      res.status(201).send({ message: 'E-mail sent' });
    } 
    else {
      res.status(200).send({ message: "E-mail not sent" });
    }
  }
  catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.get('/orders/:page', function (req, res) {
  // get order list
  var page = req.params.page;
  var filters = req.body;
  try {
    const result = orderService.get(page, filters);
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: 'Order list could not be found' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.get('/orders/client/:clientId/:page', function (req, res) {
  // get order list
  const clientId = req.params.clientId;
  const page = req.params.page;
  var filters = req.body;
  try {
    const result = orderService.getByClientId(clientId, page, filters);
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: 'Order list could not be found' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.get('/orders/restaurant/:restaurantId/:page', function (req, res) {
  // get order list
  const restaurantId = req.params.restaurantId;
  const page = req.params.page;
  var filters = req.body;
  try {
    const result = orderService.getByRestaurantId(restaurantId, page, filters);
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: 'Order list could not be found' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.get('/orders/total_orders/:clientId', function (req, res) {
  // get order qt
  const clientId = req.params.clientId;
  try {
    const result = orderService.getTotalOrders(clientId);
    if (result >= 0) {
      res.status(201).send({ total_orders: result });
    } else {
      res.status(403).send({ message: 'Order list could not be found' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.post('/order', function (req, res) {
  // register
  const order = req.body;
  try {
    const result = orderService.add(order);
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: 'Order could not be added' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.delete('/order/:id', function (req, res) {
  // delete
  const id = req.params.id;
  try {
    const result = orderService.delete(id);
    if (result) {
      res.status(201).send({ message: 'Order successfully deleted' });
    } else {
      res.status(403).send({ message: 'Order could not be deleted' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

app.get('/orders/analytics/:clientId', function (req, res) {
  // get order list
  const clientId = req.params.clientId;
  var filters = req.body;
  try {
    const result = orderService.getAnalytics(clientId, filters);
    /*
    result = {
      most_request = {
        food = [ {name: "", total: 3},  {name: "", total: 2}],
        total_food = 5,
        restaurant = [ {name: "", total: 3}, {name: "", total: 2} ],
        total_restaurant = 5
      },
      most_expensive = {
        food = [ {name: "", total: 13.00},  {name: "", total: 5.00}],
        total_food = 18.00,
        restaurant = [ {name: "", total: 13.00}, {name: "", total: 5.00} ],
        total_restaurant = 18.00
      }
    }
    */
    if (result) {
      res.status(201).send(result);
    } else {
      res
        .status(403)
        .send({ message: 'Order analytics could not be calculated' });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message });
  }
});

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
exports.server = server;

function closeServer() {
  server.close();
}
exports.closeServer = closeServer;
