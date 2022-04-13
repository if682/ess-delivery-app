import { Router } from 'express';
import { Coupon } from './src/coupon';
import { PromotionService } from './src/promotion-service';
import * as fs from 'fs';
import { restaurant, restaurants } from './restaurants';
import { users } from './users';
const routes = Router();

var adminService: PromotionService = new PromotionService();
var restaurantsService: PromotionService[] = [];

// inicializando os restaurantes
for(var r of restaurants){
    restaurantsService[r.name] = new PromotionService();
}

fs.readFile("admin-coupons.json", "utf-8", (err, data) => {
  if(err){
    console.log(err);
  }else{
    adminService.coupons = JSON.parse(data);
  }
})

fs.readFile("restaurants-coupons.json", "utf-8", (err, data) => {
  if(err){
    console.log(err);
  }else{
    var json = JSON.parse(data);
    for(var j of json){
      restaurantsService[j.name].coupons = j.coupons;
    }
  }
})

function updateRestaurantsFile(){
  fs.writeFile("restaurants-coupons.json", JSON.stringify(restaurants), (err) => {
    if(err){
      console.log(err);
    }else{
      console.log("Arquivo restaurants-coupons.json atualizado!");
    }
  })
}

routes.get('/promotion/admin', (req, res) => {
    const promotions = adminService.get();
    res.send(JSON.stringify(promotions));
});

routes.get('/payment', (req, res) => {
    return res.send('Pagina de pagamento');
});

routes.get('/promotion/admin/:id', function(req, res){
  const id = req.params.id;
  const coupon = adminService.getById(id);
  if (coupon) {
    res.send(coupon);
  } else {
    res.status(404).send({ message: ` Coupon ${id} could not be found`});
  }
});

routes.post('/promotion/admin', function(req, res){
  const coupon: Coupon = <Coupon> req.body;
  try {
    const result = adminService.add(coupon);
    if (result) {
      res.status(201).send(result);
      adminService.updateFile("admin-coupons.json");
      console.log(result);
    } else {
      res.status(403).send({ message: "Cannot access"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message })
  }
});

routes.put('/promotion/admin/:id', function (req, res) {
  const id = req.params.id;
  const coupon: Coupon = <Coupon> req.body;
  const result = adminService.update(id, coupon);

  const message = `Coupon ${id} has been updated.`;
  const err = `Coupon ${id} could not be found.`;

  if (result) {
    res.send({ message: message});
    adminService.updateFile("admin-coupons.json");
    console.log(message);
  } else {
    res.status(404).send({ message: err});
  }
  
});

routes.delete('/promotion/admin/:id', function (req, res){
  const id = req.params.id;
  const result = adminService.delete(id);
  
  const message = `Coupon ${id} has been deleted.`;
  const err = `Coupon ${id} could not be found.`;

  if (result) {
    res.send({ message: message});
    adminService.updateFile("admin-coupons.json");
    console.log(message);
  } else {
    res.status(404).send({ message: err});
  }
})

/// RESTAURANTES

routes.get('/promotion/restaurants', (req, res) => {
  res.send(JSON.stringify(restaurants));
});

// retorna todos os cupons de um restaurante
routes.get('/promotion/restaurants/:rest', (req, res) => {
  const restName = req.params.rest;
  const index = restaurants.findIndex((result) => result.name == restName)
  res.send(JSON.stringify(restaurants[index].coupons));
});

routes.get('/promotion/restaurants/:rest/:id', function(req, res){
  const { rest, id } = req.params;
  const coupon = restaurantsService[rest].getById(id);
  if (coupon) {
    res.send(coupon);
  } else {
    res.status(404).send({ message: ` Coupon ${id} could not be found`});
  }
});

routes.post('/promotion/restaurants/:rest', function(req, res){
  const coupon: Coupon = <Coupon> req.body;
  const restName: string = req.params.rest;
  const index = restaurants.findIndex((result) => result.name == restName)
  try {
    const result = restaurantsService[restName].add(coupon);
    console.log(restaurantsService[restName].coupons);
    restaurants[index].coupons = restaurantsService[restName].coupons;
    if (result) {
      res.status(201).send(result);
      updateRestaurantsFile();
      console.log(result);
    } else {
      res.status(403).send({ message: "Cannot access"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message })
  }
});


routes.put('/promotion/restaurants/:rest/:id', function (req, res) {
  const { rest, id } = req.params;
  const coupon: Coupon = <Coupon> req.body;
  const result = restaurantsService[rest].update(id, coupon);
  const index = restaurants.findIndex((result) => result.name == rest)
  restaurants[index].coupons = restaurantsService[rest].coupons;
  const err = `Coupon ${id} could not be found.`;
  const message = `Coupon ${id} has been updated.`;
  if (result) {
    res.send({ message: message});
    updateRestaurantsFile();
    console.log(message);
  } else {
    res.status(404).send({ message: err});
  }

});

routes.delete('/promotion/restaurants/:rest/:id', function (req, res){
  const { rest, id } = req.params;
  const result = restaurantsService[rest].delete(id);
  const index = restaurants.findIndex((result) => result.name == rest)
  restaurants[index].coupons = restaurantsService[rest].coupons;
  const message = `Coupon ${id} has been deleted.`;
  const err = `Coupon ${id} could not be found.`;
  if (result) {
    res.send({ message: message});
    updateRestaurantsFile();
    console.log(message);
  } else {
    res.status(404).send({ message: err});
  }
})

//clientes
//adicionar cupon no pedido
//remover cupom do pedido 
// 

routes.post('/user')

export default routes;