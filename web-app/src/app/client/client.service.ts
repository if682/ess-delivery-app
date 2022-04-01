import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Client } from './client';

@Injectable()
export class ClientService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  create(client: Client): Promise<Client> {
    return this.http.post(this.taURL + "/client", JSON.stringify(client), {headers: this.headers})
      .toPromise()
      .then(res => {
        if (res.status === 201) return client;
        else return null;
      })
      .catch(this.catch);
  }

  update(client: Client): Promise<Client> {
    return this.http.put(this.taURL + "/client", JSON.stringify(client), {headers: this.headers})
      .toPromise()
      .then(res => {
        if (res.status === 201) return client;
        else return null;
      })
      .catch(this.catch);
  }

  delete(client: Client) : Promise<Client> {
    return this.http.delete(this.taURL + `/client/${client.id}`, {headers: this.headers})
      .toPromise()
      .then(res => {
        if (res.status === 201) return client;
        else return null;
      })
      .catch(this.catch);
  }

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}