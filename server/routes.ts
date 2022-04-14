import { Router } from 'express';
import { Coupon } from './src/coupon';
import { restaurant, restaurants } from './src/restaurants';
import { PromotionService } from './src/promotion-service';
import { UserService } from './src/user-service';
import { readFiles } from './src/readFiles';
import * as fs from 'fs';
import { Order, users } from './src/users';
const routes = Router();

// Inicialização
var adminService: PromotionService = new PromotionService();
var restaurantsService: PromotionService[] = [];
var usersService: UserService = new UserService();

for(var r of restaurants){
    restaurantsService[r.name] = new PromotionService();
}

// ----------------------------------------------------------------

// Lendo dos arquivos
readFiles(adminService, usersService, restaurantsService);

// ----------------------------------------------------------------

// // Lendo dos arquivos
// fs.readFile("admin-coupons.json", "utf-8", (err, data) => {
//   if(err){
//     console.log(err);
//   }else{
//     adminService.coupons = JSON.parse(data);
//   }
// })

// fs.readFile("users.json", "utf-8", (err, data) => {
//   if(err){
//     console.log(err);
//   }else{
//     usersService.users = JSON.parse(data);
//   }
// })

// fs.readFile("restaurants-coupons.json", "utf-8", (err, data) => {
//   if(err){
//     console.log(err);
//   }else{
//     var json = JSON.parse(data);
//     for(var j of json){
//       restaurantsService[j.name].coupons = j.coupons;
//     }
//   }
// })

// ----------------------------------------------------------------

function updateRestaurantsFile(){
  fs.writeFile("restaurants-coupons.json", JSON.stringify(restaurants), (err) => {
    if(err){
      console.log(err);
    }else{
      console.log("Arquivo restaurants-coupons.json atualizado!");
    }
  })
}

// ----------------------------------------------------------------

routes.get('/payment', (req, res) => {
    return res.send('Pagina de pagamento');
});

// ----------------------------------------------------------------
// ROTAS DE ADMIN
routes.get('/promotion/admin', (req, res) => {
    const promotions = adminService.get();
    res.send(JSON.stringify(promotions));
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

// ----------------------------------------------------------------
/// ROTAS DE RESTAURANTES

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
    const { message } = err;
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

  const err = `Coupon ${id} could not be found.`;
  const message = `Coupon ${id} has been deleted.`;
  
  if (result) {
    res.send({ message: message});
    updateRestaurantsFile();
    console.log(message);
  } else {
    res.status(404).send({ message: err});
  }
});

// ----------------------------------------------------------------
/// ROTAS DE USUÁRIOS

// Retorna os pedidos de um usuário
routes.get('/user/:userId/orders', function(req, res){
  const userId = req.params.id;
  const index = usersService.getUserIndex(userId);
  res.send(JSON.stringify(usersService.users[index].orders));
});

// Adiciona cupom ao pedido
routes.post('/user/:userId/orders', function(req, res){
  // recebo o nome do cupom e o pedido
  const couponName: string = <string> req.body.couponName;
  var order: Order = <Order> req.body.order;
  // vo ver se esse cupom é do restaurante ou se eh de admin
  // se nao existir: foi mal tas quereno dar GOLPE
  // se existir:
    // 1. vo ver se o amount do pedido é >= valor minimo do cupom
    // 2. vo ver se o carinha ja usou esse cupom outra vez (pqp) => tem que salvar os cupons
    // 3. se tudo der certo => aplica o cupom
  var coupon: Coupon = restaurantsService[order.restaurant].getById(couponName);

  if(coupon){
    order = usersService.applyCouponInOrder(order, coupon);

    if(order.coupon == undefined){
      res.status(403).send({ message: `Valor mínimo de ${coupon.minValue} do cupom não foi atingido`});
    }

    res.status(201).send(order);
  }else{
    coupon = adminService[order.restaurant].getById(couponName);
    if(coupon){
      usersService.applyCouponInOrder(order, coupon);
    }else{
      res.status(403).send({ message: "foi mal tas quereno dar GOLPE"});
    }
  }
  
  
  
    // try {
  //   const result = (coupon);
  //   if (result) {
  //     res.status(201).send(result);
  //     adminService.updateFile("admin-coupons.json");
  //     console.log(result);
  //   } else {
  //     res.status(403).send({ message: "Cannot access"});
  //   }
  // } catch (err) {
  //   const {message} = err;
  //   res.status(400).send({ message })
  // }
});


routes.delete('/user/:userId/order/:orderId', function (req, res){
  const { user, iduser } = req.params;
  const result = restaurantsService[rest].delete(id);

  const index = restaurants.findIndex((result) => result.name == rest)
  restaurants[index].coupons = restaurantsService[rest].coupons;

  const err = `Coupon ${id} could not be found.`;
  const message = `Coupon ${id} has been deleted.`;
  
  if (result) {
    res.send({ message: message});
    updateRestaurantsFile();
    console.log(message);
  } else {
    res.status(404).send({ message: err });
  }
});

export default routes;

// Login
// - [ ]  Checagem de ID pra ver se é realmente um cliente ou adm ou restaurante

// User
// - [ ]  Pedido não alcançou o valor mínimo do cupom
// - [ ]  Cupom não pode ter um desconto maior que o valor do produto
// - [ ]  Não pode ter mais de um cupom em um pedido
// - [ ]  Verificar se o cupom está válido na hora da compra
// - [ ]  Cupom de primeira compra do app existe vitalício e só pode ser usado uma vez por cliente
// - [ ]  Todo cupom só pode ser utilizado 1 vez por cliente