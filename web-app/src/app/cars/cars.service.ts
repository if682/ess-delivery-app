import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Car } from './car';

@Injectable()
export class CarService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

    create(car: Car): Promise<Car> {
    return this.http.post(this.taURL + "/cars",JSON.stringify(car), {headers: this.headers})
      .toPromise()
      .then(res => {
        if (res.status === 201) {return car;} else {return null;}
      })
      .catch(this.catch);
  }

  getCars(): Promise<Car[]> {
    return this.http.get(this.taURL + "/cars")
             .toPromise()
             .then(res => res.json() as Car[])
             .catch(this.catch);
  }

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}