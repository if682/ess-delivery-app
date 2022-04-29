import {Pedido} from './pedido';

export class Status implements Pedido {
    cpf: string; // Suppose that order has being unpacked in cpf, cnpj and id
    cnpj: string;
    id: number;
    statusVal: number = 0;

    constructor() {
        this.cpf = "";
        this.cnpj ="";
        this.id = -1;
        this.statusVal = 0; //validation is implicit
    }

    update(order: Status){
        this.cpf = order.cpf;
        this.cnpj = order.cnpj;
        this.id = order.id;
        this.statusVal=0;
    }

}
