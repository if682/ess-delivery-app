import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Restaurante } from './restaurante';

@Injectable()
export class CadastroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  create(restaurante: Restaurante): Promise<Restaurante> {
    return this.http.post(this.taURL + "/restaurant",JSON.stringify(restaurante), {headers: this.headers})
      .toPromise()
      .then(res => {
        if (res.status === 201) {return restaurante;} else {return null;}
      })
      .catch(this.catch);
  }

  getRestaurantes(): Promise<Restaurante[]> {
    return this.http.get(this.taURL + "/restaurant")
             .toPromise()
             .then(res => res.json() as Restaurante[])
             .catch(this.catch);
  }

  delete(cnpj: String): Promise<Restaurante> {
    console.log(cnpj);
    return this.http.delete(this.taURL + `/restaurant/${cnpj}`)
      .toPromise()
      .catch(this.catch);
  }

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}