import 'jasmine';
import request = require("request-promise");
import { closeServer } from '../server';

const baseUrl = "http://localhost:3000";
const restUrl = `${baseUrl}/restaurant`;

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../server')});

  afterAll(() => {closeServer()});

  it("inicialmente retorna uma lista de restaurantes vazia", () => {
    return request.get(restUrl).then(body => expect(body).toBe("[]")).catch(e => expect(e).toEqual(null));
  })

  it("não cadastra restaurantes com algum campo não preenchido", () => {

    const body = {
      // nome_restaurante: "asd",
      cnpj: "98.765.432/0001-10",
      cep: "23332-233",
      rua: "Governador Schumacher",
      numero: "1",
      cidade: "Aldeia",
      complemento: "Em frente ao pé de jambo",
      horario_inicio: "09:00",
      horario_fim: "18:00",
      nome_responsavel: "José Paulo da Costa",
      telefone_responsavel: "(81) 98989-0011",
      email: "jpc@mail.com",
      senha: "potato"
    }
    const options:any = {method: 'POST', uri: (restUrl), body, json: true};
    return request(options).catch((msg) => {
      expect(msg.statusCode).toBe(400);
      expect(msg.message.match(/^O campo de [^\"]* não foi preenchido$/));
    })
  });

  it("não cadastra restaurantes com cnpj mal-formatado", () => {
    const body = {
      nome_restaurante: "Barraca do Jó",
      cnpj: "98.765.432/0001",
      cep: "23332-233",
      rua: "Governador Schumacher",
      numero: "1",
      cidade: "Aldeia",
      complemento: "Em frente ao pé de jambo",
      horario_inicio: "09:00",
      horario_fim: "18:00",
      nome_responsavel: "José Paulo da Costa",
      telefone_responsavel: "(81) 98989-0011",
      email: "jpc@mail.com",
      senha: "potato"
    }
    const options:any = {method: 'POST', uri: (restUrl), body, json: true};
    return request(options).catch((msg) => {
      expect(msg.statusCode).toBe(400);
      expect(msg.message.match(/^O campo de CNPJ está mal formatado ou incompleto$/));
    })
  })

  it("não cadastra restaurantes com cep mal-formatado", () => {
    const body = {
      nome_restaurante: "Barraca do Jó",
      cnpj: "98.765.432/0001-99",
      cep: "2333233",
      rua: "Governador Schumacher",
      numero: "1",
      cidade: "Aldeia",
      complemento: "Em frente ao pé de jambo",
      horario_inicio: "09:00",
      horario_fim: "18:00",
      nome_responsavel: "José Paulo da Costa",
      telefone_responsavel: "(81) 98989-0011",
      email: "jpc@mail.com",
      senha: "potato"
    }
    const options:any = {method: 'POST', uri: (restUrl), body, json: true};
    return request(options).catch((msg) => {
      expect(msg.statusCode).toBe(400);
      expect(msg.message.match(/^O campo de CNPJ está mal formatado ou incompleto$/));
    })
  })

  it("não cadastra restaurantes com hora de abrir mal-formatada", () => {
    const body = {
      nome_restaurante: "Barraca do Jó",
      cnpj: "98.765.432/0001-99",
      cep: "23332-233",
      rua: "Governador Schumacher",
      numero: "1",
      cidade: "Aldeia",
      complemento: "Em frente ao pé de jambo",
      horario_inicio: "09",
      horario_fim: "18:00",
      nome_responsavel: "José Paulo da Costa",
      telefone_responsavel: "(81) 98989-0011",
      email: "jpc@mail.com",
      senha: "potato"
    }
    const options:any = {method: 'POST', uri: (restUrl), body, json: true};
    return request(options).catch((msg) => {
      expect(msg.statusCode).toBe(400);
      expect(msg.message.match(/^O campo de Hora de Abrir está mal formatado ou incompleto$/));
    })
  })

  it("não cadastra restaurantes com hora de fechar mal-formatada", () => {
    const body = {
      nome_restaurante: "Barraca do Jó",
      cnpj: "98.765.432/0001-99",
      cep: "23332-233",
      rua: "Governador Schumacher",
      numero: "1",
      cidade: "Aldeia",
      complemento: "Em frente ao pé de jambo",
      horario_inicio: "09:00",
      horario_fim: "1:00",
      nome_responsavel: "José Paulo da Costa",
      telefone_responsavel: "(81) 98989-0011",
      email: "jpc@mail.com",
      senha: "potato"
    }
    const options:any = {method: 'POST', uri: (restUrl), body, json: true};
    return request(options).catch((msg) => {
      expect(msg.statusCode).toBe(400);
      expect(msg.message.match(/^O campo de Hora de Fechar está mal formatado ou incompleto$/));
    })
  })

  it("não cadastra restaurantes com telefone mal-formatado", () => {
    const body = {
      nome_restaurante: "Barraca do Jó",
      cnpj: "98.765.432/0001-99",
      cep: "23332-233",
      rua: "Governador Schumacher",
      numero: "1",
      cidade: "Aldeia",
      complemento: "Em frente ao pé de jambo",
      horario_inicio: "09:00",
      horario_fim: "18:00",
      nome_responsavel: "José Paulo da Costa",
      telefone_responsavel: "8198989-001",
      email: "jpc@mail.com",
      senha: "potato"
    }
    const options:any = {method: 'POST', uri: (restUrl), body, json: true};
    return request(options).catch((msg) => {
      expect(msg.statusCode).toBe(400);
      expect(msg.message.match(/^O campo de Telefone do Responsável está mal formatado ou incompleto$/));
    })
  })

  it("não cadastra restaurantes com e-mail mal-formatado", () => {
    const body = {
      nome_restaurante: "Barraca do Jó",
      cnpj: "98.765.432/0001-99",
      cep: "23332-233",
      rua: "Governador Schumacher",
      numero: "1",
      cidade: "Aldeia",
      complemento: "Em frente ao pé de jambo",
      horario_inicio: "09:00",
      horario_fim: "18:00",
      nome_responsavel: "José Paulo da Costa",
      telefone_responsavel: "(81) 98989-0011",
      email: "jpc@mail",
      senha: "potato"
    }
    const options:any = {method: 'POST', uri: (restUrl), body, json: true};
    return request(options).catch((msg) => {
      expect(msg.statusCode).toBe(400);
      expect(msg.message.match(/^O campo de E-mail para Contato está mal formatado ou incompleto$/));
    })
  })

  it("cadastra restaurante com sucesso", () => {
    const body = {
      nome_restaurante: "Barraca do Jó",
      cnpj: "98.765.432/0001-99",
      cep: "23332-233",
      rua: "Governador Schumacher",
      numero: "1",
      cidade: "Aldeia",
      complemento: "Em frente ao pé de jambo",
      horario_inicio: "09:00",
      horario_fim: "18:00",
      nome_responsavel: "José Paulo da Costa",
      telefone_responsavel: "(81) 98989-0011",
      email: "jpc@mail.com",
      senha: "potato"
    }
    const options :any = {method: 'POST', uri: (restUrl), body, json: true};
    return request(options).then(msg => {
         expect(msg).toEqual(body);
     });
  });

  it("não cadastra restaurantes com cnpj já existente", () => {
    const rest1 = {
      nome_restaurante: "Barraca do Jó",
      cnpj: "98.765.432/0001-98",
      cep: "23332-233",
      rua: "Governador Schumacher",
      numero: "1",
      cidade: "Aldeia",
      complemento: "Em frente ao pé de jambo",
      horario_inicio: "09:00",
      horario_fim: "18:00",
      nome_responsavel: "José Paulo da Costa",
      telefone_responsavel: "(81) 98989-0011",
      email: "jpc@mail.com",
      senha: "potato"
    }

    const rest2 = {
      nome_restaurante: "Bar da Júlia",
      cnpj: "98.765.432/0001-98",
      cep: "12345-678",
      rua: "Governador Rubinho",
      numero: "2",
      cidade: "Olinda",
      complemento: "Em frente ao pé de carambola",
      horario_inicio: "21:00",
      horario_fim: "06:00",
      nome_responsavel: "Júlia César da Silva",
      telefone_responsavel: "(81) 98989-0011",
      email: "jpc@mail.com",
      senha: "potato"
    }
    var options:any = {method: 'POST', uri: (restUrl), body:rest1, json: true};
    return request(options).then((msg) => {
      expect(msg).toEqual(rest1);

      options = {method: 'POST', uri: (restUrl), body:rest2, json: true}
      return request(options).catch((msg)=>{
        expect(msg.statusCode).toBe(401);
        expect(msg.message.match(/^Um restaurante já foi cadastrado com esse CNPJ$/));
      })
    })

  })
  
})