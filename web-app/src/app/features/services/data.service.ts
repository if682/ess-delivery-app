import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private dataSubject = new BehaviorSubject<any>(undefined);

  get data$() {
    return this.dataSubject.asObservable();
  }

  updateList(data: any) {
    this.dataSubject.next(data);
  }

  // set data(value: any) {
  //   this.dataSubject.next(value);
  // }
}
