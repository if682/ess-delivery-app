import { Pedido } from './pedido';


enum statusVal {
  INVALIDO=-1,
  FEITO=0,
  CONFIRMADO=1,
  PRONTO=2
};

export class Status implements Pedido  {
    cpf: string; // Suppose that order has being unpacked in cpf, cnpj and id
    cnpj: string;
    id: number;
    state: statusVal;


    constructor(){
      this.cpf = "";
      this.cnpj = "";
      this.id = -1;
      this.state = -1; // validation is implicit
    }

    update(order: Status){
      this.cpf = order.cpf;
      this.cnpj = order.cnpj;
      this.id = order.id;
    }

}
