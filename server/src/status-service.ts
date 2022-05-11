import {Status} from "./status"

export class Status_service {
    tempStatus: Status = new Status();


    addStatus(order: Status): Status {
    let status_state = new Status();
        this.tempStatus.clone(order);
        if(this.tempStatus.isUniqueID()){
        status_state = this.tempStatus;
         this.tempStatus.pushStatus();
     }
    return status_state;
    }

    removeStatus(order: Status): Status {
        let status_state = new Status();
        this.tempStatus.clone(order);
        if(!this.tempStatus.isUniqueID()){
            status_state = this.tempStatus;
            this.tempStatus.removeStatus();
        }
        return status_state;
    }

    updateStatus(order: Status): Status {
        let status_state = new Status();
        this.tempStatus.clone(order);
        if(!this.tempStatus.isUniqueID()){ // statusVal == MADE, ACCEPT and READY
            status_state = this.tempStatus.modStatus(this.tempStatus);
        }

        return status_state;
    }

    sendSignal(code: string) {
        let success_status;
        switch(code){
                case "NOTIFY":
                // call notifyByEmail()
                break;

                case "TRYAGAIN":
                // TODO call something here
                break;

        }
    }

    returnStatusList(): Status[] {
        return Status.statusList;
    }
}
