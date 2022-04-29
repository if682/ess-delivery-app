import {Status} from "./status"

export class Status_service {
    statusList: Status[] = [];
    isUniqueID(targetID: number): boolean {
        return this.statusList.some(testID => testID.id == targetID);
    }
}
