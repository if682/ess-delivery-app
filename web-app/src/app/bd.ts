export interface coupons {
    code: string;
    adm: boolean;
    product: string;
    discount: number;
    status: string;
    begin: string;
    end: string;
}


export const COUPONS: coupons[] = [
    {
        code: "2BIGMEQUIPOR1",
        adm: false,
        product: "Big Méqui",
        discount: 0.5,
        status: "Inativo",
        begin: "21:00-02/04/2022",
        end: "21:00-06/04/2022"
    },
    {
        code: "COXINHA2",
        adm: false,
        product: "Coxinha de Charque com Chernopiry",
        discount: 2,
        status: "Ativo",
        begin: "21:00-12/03/2022",
        end: "21:00-26/03/2022"
    },
    {
        code: "50%OFF",
        adm: true,
        product: "None",
        discount: 0.5,
        status: "Inativo",
        begin: "21:00-02/05/2022",
        end: "21:00-06/05/2022"
    }
];

export interface product {
    name: string; 
    price: number;
}

export interface restaurants {
    name: string;
    products: product[];
}

export const RESTAURANTS: restaurants[] = [
    {
        name: "Méqui",
        products: [ { name: "Big Méqui", price: 15.00 },
                    { name: "Cheddar Méquimelt", price: 12.00 },
                    { name: "Méqui Duplo", price: 12.50 },
                    { name: "Méquishake", price: 10.00 },
                    { name: "Méqui Chicken", price: 10.00 },
                    { name: "Méqui Tasty", price: 18.00 },
                    { name: "Méqui Fritas", price: 9.00 } ]
    },
    {
        name: "BK", 
        products: [ { name: "Big BK", price: 14.50 },
                    { name: "Whopper Duplo", price: 16.00 },
                    { name: "Whopper", price: 12.00 },
                    { name: "BKshake", price: 12.50 },
                    { name: "BK Chicken", price: 10.50 },
                    { name: "Whopper Furioso", price: 17.00 },
                    { name: "BK Fritas", price: 8.50 } ]
    }
];