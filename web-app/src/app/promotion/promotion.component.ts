import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Coupon } from '../admin/coupon';
import { Restaurant, Product } from '../admin/restaurant';
import { LocalStorageService } from '../local-storage.service';
import { PromotionService } from './promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  coupon: Coupon = new Coupon();
  status: string;
  type: string;
  data: any;
  productname: string;
  localStorage = new LocalStorageService();
  
  constructor(private promotionService: PromotionService, private route: Router) {
    this.status = "Inativo";
    // this.type = this.localStorage.get('type');
    // this.data = this.localStorage.get(this.type);
  }
  
  ngOnInit(): void {
    //this.acRoute.params.subscribe((params: Params) => [this.action, this.type] = [params['action'], params['type']]);
    // this.promotionService.type = this.localStorage.get('type');
    this.type = this.localStorage.get('type');
    this.data = this.localStorage.get(this.type);
    //if(this.action == "add-coupon"){
    //  this.title = "Adicionar um novo cupom";

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

    // alert(newCoupon.product);

    this.promotionService.createCoupon(newCoupon)
    .then(couponCreated => {
      if (couponCreated) {
        var currentCoupons: Coupon[] = this.localStorage.get('coupons');
        
        if(currentCoupons.length > 0) {
          currentCoupons.push(couponCreated);
        } else {
          currentCoupons = [couponCreated];
        }
        this.localStorage.set('coupons', currentCoupons);
        this.coupon = new Coupon();
      }
    })
    .catch(erro => alert("Dados inválidos"));
  }


  // updateLocalStorage(newCoupon: Coupon) {
  //   var coupons = this.localStorage.get('coupons');
  //   this.localStorage.remove('coupons');
  //   // var coupons = this.promotionService.getCoupons();
  //   coupons.push(newCoupon);
  //   console.log(coupons);
  //   this.localStorage.set('coupons', coupons);
  // }

  back(){
    if(this.type == 'rest'){
      this.route.navigate(["promotion", this.type, this.data.name]);
    }else{
      this.route.navigate(["promotion", this.type]);
    }
  }

}

