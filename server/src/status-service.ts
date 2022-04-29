import {Status} from "./status"

export class Status_service {
    statusList: Status[] = [];
    isUniqueID(targetID: number): boolean {
        return this.statusList.some(testID => testID.id == targetID);
    }
    addStatus(order: Status): Status {
    let status_state = new Status();
     if(this.isUniqueID){
        let status_state = order;
         this.statusList.push(status_state);
     }
    return status_state;
    }
    removeStatus(order: Status): Status {
        let status_state = new Status();
        if(this.isUniqueID){
            let status_state = order;
            this.statusList.filter(testID => testID.id != order.id);
        }
        return status_state;
    }
    updateStatus(order: Status): Status {
        let status_state = new Status();
        if(this.isUniqueID){ // statusVal == MADE, ACCEPT and READY
            let index = this.statusList.findIndex(testID => (testID.id == order.id));
            this.statusList[index].statusVal++;
            status_state = this.statusList[index];
        }
        return status_state;
    }
}
