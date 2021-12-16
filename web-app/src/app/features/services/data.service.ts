import { Product } from './../shared/interfaces/product.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private _productList: Product[] = [
    {
      id: 1,
      product: 'Hydrogen',
      status: 'Active',
      start_date: '2021-12-15T23:15:32.878Z',
      end_date: '2021-12-15T23:15:32.878Z',
    },
    {
      id: 2,
      product: 'Helium',
      status: 'Active',
      start_date: '2021-12-15T23:15:32.878Z',
      end_date: '2021-12-15T23:15:32.878Z',
    },
    {
      id: 3,
      product: 'Lithium',
      status: 'Active',
      start_date: '2021-12-15T23:15:32.878Z',
      end_date: '2021-12-15T23:15:32.878Z',
    },
    {
      id: 4,
      product: 'Beryllium',
      status: 'Active',
      start_date: '2021-12-15T23:15:32.878Z',
      end_date: '2021-12-15T23:15:32.878Z',
    },
    {
      id: 5,
      product: 'Boron',
      status: 'Active',
      start_date: '2021-12-15T23:15:32.878Z',
      end_date: '2021-12-15T23:15:32.878Z',
    },
    {
      id: 6,
      product: 'Carbon',
      status: 'Active',
      start_date: '2021-12-15T23:15:32.878Z',
      end_date: '2021-12-15T23:15:32.878Z',
    },
    {
      id: 7,
      product: 'Nitrogen',
      status: 'Active',
      start_date: '2021-12-15T23:15:32.878Z',
      end_date: '2021-12-15T23:15:32.878Z',
    },
    {
      id: 8,
      product: 'Oxygen',
      status: 'Active',
      start_date: '2021-12-15T23:15:32.878Z',
      end_date: '2021-12-15T23:15:32.878Z',
    },
    {
      id: 9,
      product: 'Fluorine',
      status: 'Active',
      start_date: '2021-12-15T23:15:32.878Z',
      end_date: '2021-12-15T23:15:32.878Z',
    },
    {
      id: 10,
      product: 'Neon',
      status: 'Active',
      start_date: '2021-12-15T23:15:32.878Z',
      end_date: '2021-12-15T23:15:32.878Z',
    },
  ];

  private dataSubject = new BehaviorSubject<any>(this._productList);

  get data$() {
    return this.dataSubject.asObservable();
  }

  updateList(data: Product) {
    this.dataSubject.value.push(data);
    this.dataSubject.next(this.dataSubject.value);
  }
}
