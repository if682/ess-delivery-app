import { Coupon } from "./coupon";

import crypto = require('crypto');

import { restaurants } from "./readFiles"; 

import * as fs from 'fs';

export class PromotionService {
  coupons: Coupon[] = [];
  
  get() : Coupon[] {
    return this.coupons;
  }
  
  getByName(couponName: string) : Coupon {
    return this.coupons.find(({ name }) => name == couponName);
  }

  // o valor minimo do cupom é maior do valor do produto (restaurante)
  isAValidCoupon(coupon: Coupon){
    // // 1. procurar o produto do cupom em restaurante
    // // 2. ver se price < coupon.minValue
    if (coupon.minValue < 0 || coupon.discount < 0 || coupon.discount > 1){
      return false;
    }else{
      return true;
    }
  }

  add(coupon: Coupon): Coupon {
    const idCount = crypto.randomBytes(4).toString('HEX'); 

    const newCoupon = new Coupon(<Coupon> { id: idCount, ...coupon });
    // if (newCoupon.price <= 0) {
    //   throw Error("Price can't equal or less than zero")
    // }
    var c = this.getByName(newCoupon.name);
    
    if (this.isAValidCoupon(newCoupon) && (c == undefined)){
      this.coupons.push(newCoupon);
      console.log(newCoupon);
    }else{
      return undefined;
    }

    return newCoupon;
  
  }
  

  update(couponName: string, coupon: Coupon) : Coupon {
    var result: Coupon = this.getByName(couponName);
    var couponIndex = this.coupons.findIndex((result) => result.id == couponName); // retorna o índice do cupom no array

    if (result) {
      var couponAux = <Coupon> { 
        ...this.coupons[couponIndex],  // preserva tudo que já tem no cupom 
        ...coupon                      // altera apenas o que é necessário
      }
      // se for de admin ou passar no valid ele altera
      if (this.isAValidCoupon(couponAux)){
        this.coupons[couponIndex] = couponAux;
      } else{
        result = undefined;
      }
    }

    return result;
  }


  delete(couponName: string) : Coupon {
    var result: Coupon = this.getByName(couponName);
    var couponIndex = this.coupons.findIndex((result) => result.id == couponName);
    
    if (result) {
      this.coupons.splice(couponIndex, 1);
    }
    return result;
  }

  updateFile(fileName: string){
    fs.writeFile(fileName, JSON.stringify(this.coupons), (err) => {
      if(err){
        console.log(err);
      }else{
        console.log(`Arquivo ${fileName} atualizado!`);
      }
    })
  }
  
}
