import { Coupon } from "./src/coupon";

export interface product {
    name: string; 
    price: number;
}

export interface restaurant {
    name: string;
    products: product[];
    coupons: Coupon[];
}

export var restaurants: restaurant[] = [
    {
        name: "Mequi",
        products: [ { name: "Big Méqui", price: 15.00 },
                    { name: "Cheddar Méquimelt", price: 12.00 },
                    { name: "Méqui Duplo", price: 12.50 },
                    { name: "Méquishake", price: 10.00 },
                    { name: "Méqui Chicken", price: 10.00 },
                    { name: "Méqui Tasty", price: 18.00 },
                    { name: "Méqui Fritas", price: 9.00 } ],
        coupons: []
    },
    {
        name: "BK", 
        products: [ { name: "Big BK", price: 14.50 },
                    { name: "Whopper Duplo", price: 16.00 },
                    { name: "Whopper", price: 12.00 },
                    { name: "BKshake", price: 12.50 },
                    { name: "BK Chicken", price: 10.50 },
                    { name: "Whopper Furioso", price: 17.00 },
                    { name: "BK Fritas", price: 8.50 } ],
        coupons: []
    }
];