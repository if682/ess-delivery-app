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
    alert("eu nao sei que alerta eh esse" + window.history.state.data);
  }

  // checa se a ação foi realizada por admin ou restaurante e redireciona para a rota da ação
  checkType(): void {
    this.route.navigateByUrl("promotion/admin/add-coupon", {state: {data: window.history.state.data}})
    /*alert(this.type); 
    if(this.type == "restaurants"){
      this.restaurant = window.history.state.data; // recebe quem é o restaurante
      this.route.navigate(["promotion/", this.type, this.restaurant.name, action], { state: { data: this.restaurant } })
    }
    else{
      this.admin = window.history.state.data; // recebe quem é o admin
      alert(this.admin.name);
      this.route.navigate(["/promotion/admin/add-coupon"])
    }*/
  }




}

