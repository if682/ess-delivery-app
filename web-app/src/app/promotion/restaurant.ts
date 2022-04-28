import { Coupon } from "../admin/coupon";

export interface product {
    name: string; 
    price: number;
}

export interface restaurant {
    name: string;
    products: product[];
    coupons: Coupon[];
}