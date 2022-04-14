import { Coupon } from "./coupon";
import { product } from "./restaurants";

export interface Order {
    id: string;
    products: product[];
    amount: number;
    coupon: Coupon;
    restaurant: string;
}

export interface User {
    name: string;
    id: string;
    orders: Order[];
}

export var users: User[] = [
    {
        name: "Malu",
        id: "578dbdea",
        orders: []
    },
    {
        name: "Clara",
        id: "a95eb53c",
        orders: []
    },
    {
        name: "Mileto",
        id: "11a84677",
        orders: []
    }
];