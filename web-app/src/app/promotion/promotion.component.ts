import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Coupon } from '../admin/coupon';
import { PromotionService } from './promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  coupon: Coupon = new Coupon();
  public status: string;
  public action: string;

  constructor(private promotionService: PromotionService) {
    this.status = "Inativo";
  }
  
  activate(): void {
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
        this.coupon = new Coupon();
      }
    })
    .catch(erro => alert("Dados inválidos"));
  }

  ngOnInit(): void {
    var path = window.location.pathname;
    var act = path.replace("/promotion/admin/", "");

    if(act == "add-coupon"){
      this.action = "Adicionar um novo cupom";
    }else{
      this.action = "Editar cupom";
    }
  }

}
