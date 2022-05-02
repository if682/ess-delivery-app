import { Pedido } from './pedido';

export class Status implements Pedido  {
    cpf: string; // Suppose that order has being unpacked in cpf, cnpj and id
    cnpj: string;
    id: number;
    statusVal: number = 0;
}
