import { Coupon } from "./coupon";

import crypto = require('crypto');

export class PromotionService {
  coupons: Coupon[] = [];
  
  add(coupon: Coupon): Coupon {
    const idCount = crypto.randomBytes(4).toString('HEX'); 
    //serve para ele gerar 4 bytes de caracteres aleatórios e depois transformar tudo em uma sting no formato hexadecimal
    
    // if (this.coupons.length >= 10) return null;
    const newCoupon = new Coupon(<Coupon> { id: idCount, ...coupon });
    // if (newCoupon.price <= 0) {
    //   throw Error("Price can't equal or less than zero")
    // }
    console.log(this.coupons)
    this.coupons.push(newCoupon);
    return newCoupon;
  }

  update(coupon: Coupon) : Coupon {
    console.log(this.coupons)
    var result : Coupon = this.coupons.find(c => c.id == c.id);
    if (result) result.update(coupon);
    return result;
  }

  get() : Coupon[] {
    return this.coupons;
  }
  
  getById(couponId: string) : Coupon {
    return this.coupons.find(({ id }) => id == couponId);
  }
}
