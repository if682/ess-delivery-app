import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Coupon } from '../admin/coupon';
import { Restaurant, Product } from '../admin/restaurant';
import { PromotionService } from './promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  coupon: Coupon = new Coupon();
  public status: string;
  public title: string;
  public action: string;
  public type: string;
  public restaurant: Restaurant;
  productname: string;

  constructor(private promotionService: PromotionService, private acRoute: ActivatedRoute) {
    this.status = "Inativo";
    this.restaurant = window.history.state.data;
  }
  
  activate(): void {
    if(this.status == "Inativo"){
      this.status = "Ativo";
    }else{
      this.status = "Inativo";
    }
  }

  createCoupon(newCoupon: Coupon): void {
    newCoupon.product = this.productname;
    
    newCoupon.status = this.status;

    alert(newCoupon.product);

    this.promotionService.createCoupon(newCoupon)
    .then(result => {
      if (result) {
        this.coupon = new Coupon();
      }
    })
    .catch(erro => alert("Dados inválidos"));
  }

  ngOnInit(): void {
    this.acRoute.params.subscribe((params: Params) => [this.action, this.type] = [params['action'], params['type']]);
    this.promotionService.type = this.type;
    this.promotionService.id = this.restaurant.name;
    if(this.action == "add-coupon"){
      this.title = "Adicionar um novo cupom";
    }else{
      this.title = "Editar cupom";
    }
  }

}

