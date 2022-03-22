import { Router } from 'express'
import { Car } from './src/car'
import { CarService } from './src/cars-service';

const routes = Router();

routes.get('/promotion', (req, res) => {
    return res.send('Pagina de promocao');
});

routes.get('/payment', (req, res) => {
    return res.send('Pagina de pagamento');
});

var carService: CarService = new CarService();

routes.get('/cars', function(req, res){
  const cars = carService.get();
  res.send(JSON.stringify(cars));
});

routes.get('/cars/:id', function(req, res){
  const id = req.params.id;
  const car = carService.getById(id);
  if (car) {
    res.send(car);
  } else {
    res.status(404).send({ message: `Car ${id} could not be found`});
  }
});

routes.post('/cars', function(req, res){
  const car: Car = <Car> req.body;
  try {
    const result = carService.add(car);
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: "Car list is full"});
    }
  } catch (err) {
    const {message} = err;
    res.status(400).send({ message })
  }
});

routes.put('/cars', function (req, res) {
  const car: Car = <Car> req.body;
  const result = carService.update(car);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ message: `Car ${car.id} could not be found.`});
  }
})

export default routes;