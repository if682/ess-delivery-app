import { Component, Injectable, Inject }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Coupon } from './coupon';

@Injectable()
export class AdminService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  public dialog: MatDialog;

  coupon: Coupon = new Coupon();

  constructor(private http: Http) { }

    create(coupon: Coupon): Promise<Coupon> {
    return this.http.post(this.taURL + "/promotion/admin",JSON.stringify(coupon), {headers: this.headers})
      .toPromise()
      .then(res => {
        if (res.status === 201) {
          return coupon;
        }else{
          return null;
        }
      })
      .catch(this.catch);
  }
  // ! o erro do JSON não formatado corretamente é aqui !!!!!!!!
  getCoupons(): Promise<Coupon[]> {
    return this.http.get(this.taURL + "/promotion/admin")
             .toPromise()
             .then(res => res.json() as Coupon[])
             .catch(this.catch);
  }

  remove(coupon: Coupon): Promise<Coupon[]> {
    return this.http.delete(this.taURL + "/promotion/admin/" + coupon.name)
             .toPromise()
             .then(res => res.json() as Coupon[])
             .catch(this.catch);
  }
  
  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}