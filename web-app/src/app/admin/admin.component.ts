import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private service: AdminService, private acRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.acRoute.params.subscribe((params: Params) => this.type = params['type']);
    if(this.type == "admin"){
      this.admin = window.history.state.data;
      this.coupons = window.history.state.coupons;
    }else{
      this.restaurant = window.history.state.data;
    }
  }


}
