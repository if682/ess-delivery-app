import { Router } from 'express';
import { Car } from './src/car';
import { CarService } from './src/cars-service';
import { Coupon } from './src/coupon';
import { PromotionService } from './src/promotion-service';

const routes = Router();

var promotionService: PromotionService = new PromotionService();

routes.get('/promotion', (req, res) => {
    const promotions = promotionService.get();
    res.send(JSON.stringify(promotions));
  });

routes.get('/payment', (req, res) => {
    return res.send('Pagina de pagamento');
});

// var carService: CarService = new CarService();

// routes.get('/cars', function(req, res){
//   const cars = carService.get();
//   res.send(JSON.stringify(cars));
// });

// routes.get('/cars/:id', function(req, res){
//   const id = req.params.id;
//   const car = carService.getById(id);
//   if (car) {
//     res.send(car);
//   } else {
//     res.status(404).send({ message: `Car ${id} could not be found`});
//   }
// });

routes.get('/promotion/:id', function(req, res){
  const id = req.params.id;
  const coupon = promotionService.getById(id);
  if (coupon) {
    res.send(coupon);
  } else {
    res.status(404).send({ message: ` Coupon ${id} could not be found`});
  }
});

// routes.post('/cars', function(req, res){
//   const car: Car = <Car> req.body;
//   try {
//     const result = carService.add(car);
//     if (result) {
//       res.status(201).send(result);
//     } else {
//       res.status(403).send({ message: "Car list is full"});
//     }
//   } catch (err) {
//     const {message} = err;
//     res.status(400).send({ message })
//   }
// });

routes.post('/promotion', function(req, res){
  const coupon: Coupon = <Coupon> req.body;
  try {
    const result = promotionService.add(coupon);
    if (result) {
      res.status(201).send(result);
      console.log(result);
    } else {
      res.status(403).send({ message: "Cannot access"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message })
  }
});

// routes.put('/cars', function (req, res) {
//   const car: Car = <Car> req.body;
//   const result = carService.update(car);
//   if (result) {
//     res.send(result);
//   } else {
//     res.status(404).send({ message: `Car ${car.id} could not be found.`});
//   }
// })

routes.put('/promotion/:id', function (req, res) {
  const id = req.params.id;
  const coupon: Coupon = <Coupon> req.body;
  const result = promotionService.update(id, coupon);

  const message = `Coupon ${id} has been updated.`;
  const err = `Coupon ${id} could not be found.`;

  if (result) {
    res.send({ message: message});
    console.log(message);
  } else {
    res.status(404).send({ message: err});
  }
  
})

export default routes;