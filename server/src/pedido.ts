class Pedido {
    cpf: string;
    cnpj: string;
    id: number;
    status: number;
    //TODO add pedidos

    constructor(pedidoDummy: Pedido) {
        this.cpf = pedidoDummy.cpf;
        this.cnpj = pedidoDummy.cnpj;
        this.id = pedidoDummy.id;
        this.status = pedidoDummy.status;
    }

}
