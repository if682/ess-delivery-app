export class Restaurante {
  nome_restaurante: string;
  cnpj: string;
  cep: string;
  rua: string;
  numero: string;
  cidade: string;
  complemento: string;
  horario_inicio: string;
  horario_fim: string;
  nome_responsavel: string;
  telefone_responsavel: string;
  email: string;
  senha: string;
  descricao: string;
 

  constructor() {
    this.nome_restaurante = "";
    this.cnpj = "";
    this.cep = "";
    this.rua = "";
    this.numero = "";
    this.cidade = "";
    this.complemento = "";
    this.horario_inicio = "";
    this.horario_fim = "";
    this.nome_responsavel = "";
    this.telefone_responsavel = "";
    this.email = "";
    this.senha = "";
    this.descricao= "";
  }
}