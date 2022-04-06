export class Restaurante {
  nome_restaurante: string;
  cnpj: string;
  cep: string;
  rua: string;
  numero: number;
  cidade: string;
  complemento: string;
  horario_inicio: string;
  horario_fim: string;
  nome_responsavel: string;
  telefone_responsavel: string;
  senha: string;

  constructor(restaurante: Restaurante) {
    this.nome_restaurante = restaurante.nome_responsavel;
    this.cnpj = restaurante.cnpj;
    this.cep = restaurante.cep;
    this.rua = restaurante.rua;
    this.numero = restaurante.numero;
    this.cidade = restaurante.cidade;
    this.complemento = restaurante.complemento;
    this.horario_inicio = restaurante.horario_inicio;
    this.horario_fim = restaurante.horario_fim;
    this.nome_responsavel = restaurante.nome_responsavel;
    this.telefone_responsavel = restaurante.telefone_responsavel;
    this.senha = restaurante.senha;
  }

  update(restaurante: Restaurante): void {
    this.nome_restaurante = restaurante.nome_responsavel;
    this.cnpj = restaurante.cnpj;
    this.cep = restaurante.cep;
    this.rua = restaurante.rua;
    this.numero = restaurante.numero;
    this.cidade = restaurante.cidade;
    this.complemento = restaurante.complemento;
    this.horario_inicio = restaurante.horario_inicio;
    this.horario_fim = restaurante.horario_fim;
    this.nome_responsavel = restaurante.nome_responsavel;
    this.telefone_responsavel = restaurante.telefone_responsavel;
    this.senha = restaurante.senha;
  }
}