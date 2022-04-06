import { EventEmitter, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Client } from './client';

@Injectable()
export class ClientService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private taURL = 'http://localhost:3000';

  private id: number = JSON.parse(localStorage.getItem('id') || '-1');
  private client: Client = new Client();

  private isLoggedIn = new BehaviorSubject(
    JSON.parse(localStorage.getItem('loggedIn') || 'false')
  );
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private http: Http, private router: Router) {}

  getClient() {
    return this.getById(this.getId());
  }

  getId() {
    return JSON.parse(localStorage.getItem('id') || '-1');
  }

  getIsLoggedIn() {
    return JSON.parse(
      localStorage.getItem('loggedIn') || this.isLoggedIn.getValue()
    );
  }

  setIsLoggedIn(value: boolean) {
    this.isLoggedIn.next(value);
    localStorage.setItem('loggedIn', value.toString());
  }

  setId(id: string) {
    localStorage.setItem('id', id);
  }

  getById(id: number): Promise<Client> {
    return this.http
      .get(this.taURL + `/client/${id}`, { headers: this.headers })
      .toPromise()
      .then((res) => {
        if (res?.status === 201) {
          this.client = res.json().client;
          return res.json();
        } else {
          return null;
        }
      })
      .catch(this.catch);
  }

  create(client): Promise<Client> {
    
    return this.http
      .post(this.taURL + '/client', JSON.stringify(client),{
        headers: this.headers,
      })
      .toPromise()
      .then((res) => {
        if (res.status === 201) {
          var registeredClient =<Client> res.json();
          this.router.navigate(['/confirm-number']);
          return registeredClient
        }else {
          return null
        };
      })
      .catch(this.catch);
  }

  update(client: Client): Promise<Client> {
    return this.http
      .put(this.taURL + '/client', JSON.stringify(client), {
        headers: this.headers,
      })
      .toPromise()
      .then((res) => {
        if (res?.status === 201) return client;
        else return null;
      })
      .catch(this.catch);
  }

  delete(client: Client): Promise<Client> {
    return this.http
      .delete(this.taURL + `/client/${client.id}`, { headers: this.headers })
      .toPromise()
      .then((res) => {
        if (res?.status === 201) return client;
        else return null;
      })
      .catch(this.catch);
  }

  login(email: string, password: string): Promise<Client> {
    var body = { email: email, password: password };
    return this.http
      .post(this.taURL + '/client/login', JSON.stringify(body), {
        headers: this.headers,
      })
      .toPromise()
      .then((res) => {
        if (res?.status === 201) {
          this.setIsLoggedIn(true);
          this.router.navigate(['']);
          this.setId(res.json().token);
          return true;
        } else return false;
      })
      .catch(this.catch);
  }

  logOut() {
    this.setId('-1');
    this.setIsLoggedIn(false);
    this.client = new Client();
    this.router.navigate(['/login']);
  }

  forgot_password(email: string): Promise<Client> {
    return this.http
      .post(this.taURL + `/client/forgot_password/${email}`, {
        headers: this.headers,
      })
      .toPromise()
      .then((res) => {
        if (res?.status === 201) return true;
        else return null;
      })
      .catch(this.catch);
  }

  private catch(erro: any): Promise<any> {
    console.error('Oops, something went wrong', erro);
    return Promise.reject(erro.message || erro);
  }
}
