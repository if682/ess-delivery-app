import 'jasmine';
import request = require("request-promise");
import { closeServer } from '../server';

const baseUrl = "http://localhost:3000";
const musicasUrl = `${baseUrl}/musicas`

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../server')});

  afterAll(() => {server.closeServer()});

  it("inicialmente retorna uma lista de alunos vazia", () => {
    return request.get(musicasUrl).then(body => expect(body).toBe("[]")).catch(e => expect(e).toEqual(null));
  })

  it("só cadastra com preco positivo", () => {
    const body = {
      nome: "only girl",
      artista_banda: "rihanna",
      ano_lancamento: 2023,
    }
    const options:any = {method: 'POST', uri: (musicasUrl), body, json: true};
    return request(options).catch(({ statusCode }) => {
      expect(statusCode).toBe(400);
    })
  });

  it("cadastra carro com sucesso", () => {
    const body = {
      nome: "Lancer",
      artista_banda: "Mitsubishi",
      ano_lancamento: 90,
    }
    const options :any = {method: 'POST', uri: (musicasUrl), body, json: true};
    const newMusica = { id: 0, ...body };
    return request(options).then(body => {
         expect(body).toEqual(newMusica);
     });
  });

})