import 'jasmine';
import request = require("request-promise");
import { closeServer, server } from '../server';

const baseUrl = "http://localhost:3000";
const emailUrl = `${baseUrl}/payment/confirm/`

describe("O servico de email", () => {    
    var server: any;

    beforeEach(() => server = require('../server'));
    afterAll(() => server.closeServer())

    it("Envia email corretamente", () => {
        const user = {
            name: "Zenio",
            id: "11a84677",
            email: "miletinho@arrocha.lo.fi",
            orders: [ {
                id: "2787c166",
                products: [{
                    name: "Big Méqui",
                    price: 15,
                    quantity: 2
                }, {
                    name: "Cheddar Méquimelt",
                    price: 12,
                    quantity: 1
                }],
                amount: 16.8,
                restaurant: "Mequi",
                coupon: {
                    id: "388ac565",
                    name: "2BIGMEQUIPOR9",
                    adm: false,
                    minValue: 15,
                    product: "Big Méqui",
                    discount: 0.6,
                    status: "Inativo"
                }
            }]
        }

        const body = user.orders[0];
        const userid = user.id;
        const uri = emailUrl+userid;
        console.log(uri)
        const options = {method: 'POST', uri:uri, body, json:true};
        return request(options).catch(({ statusCode }) => {
			expect(statusCode).toBe(201);
		});
        
    });

    it("Envia email incorretamente", () => {
        const user = {
            name: "Mileto",
            id: "343422",
            email: "miletinho@arrocha.lo.fi",
            orders: [ {
                id: "2787c166",
                products: [{
                    name: "Big Méqui",
                    price: 15,
                    quantity: 2
                }, {
                    name: "Cheddar Méquimelt",
                    price: 12,
                    quantity: 1
                }],
                amount: 16.8,
                restaurant: "Mequi",
                coupon: {
                    id: "388ac565",
                    name: "2BIGMEQUIPOR9",
                    adm: false,
                    minValue: 15,
                    product: "Big Méqui",
                    discount: 0.6,
                    status: "Inativo"
                }
            }]
        }

        const body = user.orders[0];
        const userid = user.id;
        const uri = emailUrl+userid;
        console.log(uri)
        const options = {method: 'POST', uri:uri, body, json:true};
        return request(options).catch(({ statusCode }) => {
			expect(statusCode).toBe(400);
		});    
    });
});


