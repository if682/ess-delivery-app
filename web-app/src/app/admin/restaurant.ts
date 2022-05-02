import { Coupon } from "./coupon";

export interface Product {
    name: string; 
    price: number;
}

export interface Restaurant {
    name: string;
    products: Product[];
    coupons: Coupon[];
}
