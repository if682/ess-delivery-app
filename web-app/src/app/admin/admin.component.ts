import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Admin } from './admin';
import { AdminService } from './admin.service';
import { Coupon } from './coupon';
import { Restaurant } from './restaurant';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',    
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  restaurant: Restaurant;
  admin: Admin;
  coupons: Coupon[];
  type: string;

  constructor(private service: AdminService, private acRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.acRoute.params.subscribe((params: Params) => this.type = params['type']);
  }

  // checa se a ação foi realizada por admin ou restaurante e redireciona para a rota da ação
  checkType(action:string): void {
    if(this.type=="restaurants"){
      this.restaurant = window.history.state.data; // recebe quem é o restaurante
      this.route.navigate(["promotion/", this.type, this.restaurant.name, action], { state: { data: this.restaurant } })
    }
    else{
      this.admin = window.history.state.data; // recebe quem é o admin
      this.route.navigate(["promotion/admin", action], { state: { data: this.admin } })
    }
  }




}

