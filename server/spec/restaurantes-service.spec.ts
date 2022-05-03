import 'jasmine';
import { Restaurante } from '../src/restaurante';
import { RestaurantesService } from '../src/restaurantes-service';

describe("O servico de carros", () => {
  var restService: RestaurantesService;

  beforeEach(() => restService = new RestaurantesService())

  it("é inicialmente vazio", () => {
    expect(restService.restaurantes.length).toBe(0);
  })

  it("cadastra restaurantes corretamente", () => {
    const sample = <Restaurante> {
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
    restService.add(sample);

    expect(restService.restaurantes.length).toBe(1);
    const result = restService.restaurantes[0];
    expect(result.nome_restaurante).toBe(sample.nome_restaurante);
    expect(result.cnpj).toBe(sample.cnpj);
    expect(result.cep).toBe(sample.cep);
    expect(result.rua).toBe(sample.rua);
    expect(result.numero).toBe(sample.numero);
    expect(result.cidade).toBe(sample.cidade);
    expect(result.complemento).toBe(sample.complemento);
    expect(result.horario_inicio).toBe(sample.horario_inicio);
    expect(result.horario_fim).toBe(sample.horario_fim);
    expect(result.nome_responsavel).toBe(sample.nome_responsavel);
    expect(result.telefone_responsavel).toBe(sample.telefone_responsavel);
    expect(result.email).toBe(sample.email);
    expect(result.senha).toBe(sample.senha);
  })
})