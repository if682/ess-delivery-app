import { product } from '../../promotion/restaurant';
import { Coupon } from 'src/app/admin/coupon';

export interface Order {
    id: string;
    products: product[];
    amount: number;
    coupon: Coupon;
    restaurant: string;
}