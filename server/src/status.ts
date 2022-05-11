import {Pedido} from './pedido';

export class Status implements Pedido {
    public static statusList: Status[] = [];
    cpf: string; // Suppose that order has being unpacked in cpf, cnpj and id
    cnpj: string;
    id: number;
    state: number = 0;

    constructor() {
        this.cpf = "";
        this.cnpj ="";
        this.id = -1;
        this.state = 0; //validation is implicit
    }

    clone(order: Status){
        this.cpf = <string> order.cpf;
        this.cnpj = <string> order.cnpj;
        this.id = <number> order.id;
        this.state= <number> order.state;
    }

    pushStatus(): void{
        Status.statusList.push(Object.assign({},this));
    }

    removeStatus(): void{
        Status.statusList = Status.statusList.filter(testStatus => (testStatus.id  != this.id));
    }

    modStatus(status_state: Status): Status{
        let index = Status.statusList.findIndex(testStatus => (testStatus.id  == this.id));
        if(Status.statusList[index].state<2)
            status_state.state = ++Status.statusList[index].state;
        return status_state;
    }

    returnStatus(): Status[]{
        return Status.statusList;
    }

    isUniqueID(): boolean {
        return !Status.statusList.some(testID => (testID.id == this.id));
    }

}
