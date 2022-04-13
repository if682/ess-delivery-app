export class Coupon {
    id: string;
    name: string;
    adm: boolean;
    product: string;
    discount: number;
    status: string;
    begin: string;
    end: string;

  constructor(coupon: Coupon) {
      this.id = coupon.id;
      this.name = coupon.name;
      this.adm = coupon.adm;
      this.product = coupon.product;
      this.discount = coupon.discount;
      this.status = coupon.status;
      this.begin = coupon.begin;
      this.end = coupon.end;
  }

  update(coupon: Coupon): void {
      this.name = coupon.name;
      this.product = coupon.product;
      this.discount = coupon.discount;
      this.status = coupon.status;
      this.begin = coupon.begin;
      this.end = coupon.end;
  }
}