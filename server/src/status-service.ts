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
}
