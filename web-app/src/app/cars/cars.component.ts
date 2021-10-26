import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Car } from './car';
import { CarService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
   constructor(private carService: CarService) {}

   car: Car = new Car();
   cars: Car[] = [];

   createCar(c: Car): void {
      this.carService.create(c)
      .then(result => {
            if (result) {
               this.cars.push(<Car> result);
               this.car = new Car();
            }
         })
         .catch(erro => alert(erro));
   }

   ngOnInit(): void {
      this.carService.getCars()
         .then(cars => this.cars = cars)
         .catch(erro => alert(erro));
   }

}