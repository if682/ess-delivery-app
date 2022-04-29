import { Component, Injectable, Inject }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Admin } from '../admin/admin';
import { Restaurant } from '../admin/restaurant';
import { User } from '../admin/user';
@Injectable()
export class LoginService {
  constructor(private http:Http){}
  private taURL = 'http://localhost:3000/';
  
  getAdmin(url:string): Promise<Admin[]> {
    return this.http.get(this.taURL + url)
             .toPromise()
             .then(res => res.json() as Admin[])
             .catch(this.catch);
  }
  getUser(url:string): Promise<User[]> {
    return this.http.get(this.taURL + url)
             .toPromise()
             .then(res => res.json() as User[])
             .catch(this.catch);
  }
  getRestaurant(url:string): Promise<Restaurant[]> {
    return this.http.get(this.taURL + url)
             .toPromise()
             .then(res => res.json() as Restaurant[])
             .catch(this.catch);
  }

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}