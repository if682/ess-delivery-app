import "jasmine";
import request = require("request-promise");
import { closeServer } from "../server";

const baseUrl = "http://localhost:3000";
const promotionsUrl = `${baseUrl}/promotions`;
const paymentsUrl = `${baseUrl}/payments`;

describe("O servidor", () => {
	var server: any;

	beforeAll(() => {
		server = require("../server");
	});
	afterAll(() => {
		server.closeServer();
	});

	it("Inicialmente retornará uma lista de promoções vazia.", () => {
		return request
			.get(promotionsUrl)
			.then((body) => expect(body).toBe("[]"))
			.catch((e) => expect(e).toEqual(null));
	});

	it("Inicialmente retornará uma lista de métodos de pagamento vazia.", () => {
		return request
			.get(paymentsUrl)
			.then((body) => expect(body).toBe("[]"))
			.catch((e) => expect(e).toEqual(null));
	});

	//   it("só cadastra com preco positivo", () => {
	//     const body = {
	//       name: "Lancer",
	//       brand: "Mitsubishi",
	//       price: -100,
	//       color: "BLACK"
	//     }
	//     const options:any = {method: 'POST', uri: (carsUrl), body, json: true};
	//     return request(options).catch(({ statusCode }) => {
	//       expect(statusCode).toBe(400);
	//     })
	//   });

	//   it("cadastra carro com sucesso", () => {
	//     const body = {
	//       name: "Lancer",
	//       brand: "Mitsubishi",
	//       price: 90,
	//       color: "BLACK"
	//     }
	//     const options :any = {method: 'POST', uri: (carsUrl), body, json: true};
	//     const newCar = { id: 0, ...body };
	//     return request(options).then(body => {
	//          expect(body).toEqual(newCar);
	//      });
	//   });
});
