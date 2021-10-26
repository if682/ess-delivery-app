export class Car {
  id: number;
  name: string;
  brand: string;
  price: number;
  color: string;

  constructor(car: Car) {
    this.id = car.id;
    this.name = car.name;
    this.brand = car.brand;
    this.price = car.price;
    this.color = car.color;
  }

  update(car: Car): void {
    this.name = car.name;
    this.brand = car.brand;
    this.price = car.price;
    this.color = car.color;
  }
}