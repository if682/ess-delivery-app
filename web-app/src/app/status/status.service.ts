import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Status } from './status'

@Injectable()
export class StatusService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseURL = 'http://localhost:3000';

  constructor(private htttp: Http) { }

  updateStatusList(order: Status): Promise<Status> {
    return this.htttp.put(this.baseURL + "/status", JSON.stringify(order), {headers: this.headers})
      .toPromise()
      .then(res => {
        if (res.status == 201) {return res.json() as Status;} else {return null;}
      })
      .catch(this.catch);
  }

    getStatusList(): Promise<Status[]> {
      return this.htttp.get(this.baseURL + "/status")
        .toPromise()
        .then(res => res.json() as Status[])
        .catch(this.catch);
    }

    addStatus(order: Status): Promise<Status> {
      return this.htttp.post(this.baseURL + "/status/add", JSON.stringify(order), {headers: this.headers})
        .toPromise()
        .then(res => {
          if (res.status == 200) {return res.json() as Status;} else {return null;}
        })
        .catch(this.catch);
    }

    removeStatus(order: Status): Promise<Status> {
      return this.htttp.post(this.baseURL + "/status/remove", JSON.stringify(order), {headers: this.headers})
        .toPromise()
        .then(res => {
          if (res.status == 200) {return res.json() as Status} else {return null;}
        })
        .catch(this.catch);
    }


    private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}
