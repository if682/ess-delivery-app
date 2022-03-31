import { Coupon } from "./coupon";

import crypto = require('crypto');

export class PromotionService {
  coupons: Coupon[] = [];
  
  add(coupon: Coupon): Coupon {
    const idCount = crypto.randomBytes(4).toString('HEX'); 
    //serve para ele gerar 4 bytes de caracteres aleatórios e depois transformar tudo em uma sting no formato hexadecimal

    const newCoupon = new Coupon(<Coupon> { id: idCount, ...coupon });
    // if (newCoupon.price <= 0) {
    //   throw Error("Price can't equal or less than zero")
    // }
    console.log(newCoupon);

    this.coupons.push(newCoupon);
    return newCoupon;
  
  }
  
  getById(couponId: string) : Coupon {
    return this.coupons.find(({ id }) => id == couponId);
  }

  update(couponId: string, coupon: Coupon) : Coupon {
    var result: Coupon = this.getById(couponId);
    var couponIndex = this.coupons.findIndex((result) => result.id == couponId); // retorna o índice do cupom no array

    if (result) {
      this.coupons[couponIndex] = <Coupon> { 
        ...this.coupons[couponIndex],  // preserva tudo que já tem no cupom 
        ...coupon                      // altera apenas o que é necessário
      }      
    }

    return result;
  }

  get() : Coupon[] {
    return this.coupons;
  }
  
}
