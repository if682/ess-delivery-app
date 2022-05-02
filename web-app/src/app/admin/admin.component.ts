import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
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
  localStorage = new LocalStorageService();
  // coupons: Coupon[];
  type: string;

  constructor(private service: AdminService, private acRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.type = this.localStorage.get('type');
    // this.acRoute.params.subscribe((params: Params) => this.type = params['type']);
    // alert("eu nao sei que alerta eh esse" + window.history.state.data);
  }

  checkType(): void {
    // this.route.navigateByUrl("promotion/admin/add-coupon");
    // alert(this.type);
    if(this.type == "rest"){
      this.restaurant = this.localStorage.get('rest'); // recebe quem é o restaurante
      this.route.navigate(["promotion/", this.type, this.restaurant.name, 'add-coupon']);
    }
    else{
      this.admin = this.localStorage.get('admin');
      alert(this.admin.name);
      this.route.navigate(["admin/add"]);
    }
  }




}

