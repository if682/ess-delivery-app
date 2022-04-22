import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Coupon } from './coupon';
import { PromotionService } from './promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  coupon: Coupon = new Coupon();
  coupons: Coupon[] = [];
  public status: string;

  constructor(private promotionService: PromotionService) {
    this.status = "Inativo";
  }
  
  activate(): void{
    if(this.status == "Inativo"){
      this.status = "Ativo";
    }else{
      this.status = "Inativo";
    }
  }

  createCoupon(newCoupon: Coupon): void {
    newCoupon.status = this.status;

    this.promotionService.createCoupon(newCoupon)
    .then(result => {
          if (result) {
            this.coupons.push(<Coupon> result);
            this.coupon = new Coupon();
          }
      })
      .catch(erro => alert(erro));
  }

  ngOnInit(): void {
      
  }

}
