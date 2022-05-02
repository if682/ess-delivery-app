import { Pedido } from './pedido';

export class Status implements Pedido  {
    cpf: string; // Suppose that order has being unpacked in cpf, cnpj and id
    cnpj: string;
    id: number;
    statusVal: number = 0;
    constructor(){
      this.cpf = "";
      this.cnpj = "";
      this.id = -1;
      this.statusVal = -1; // validation is implicit
    }
}
