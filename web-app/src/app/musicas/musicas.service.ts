import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Musica } from './musica';

@Injectable()
export class MusicaService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

    create(musica: Musica): Promise<Musica> {
    return this.http.post(this.taURL + "/musicas",JSON.stringify(musica), {headers: this.headers})
      .toPromise()
      .then(res => {
        if (res.status === 201) {return musica;} else {return null;}
      })
      .catch(this.catch);
  }

  getMusicas(): Promise<Musica[]> {
    return this.http.get(this.taURL + "/musicas")
             .toPromise()
             .then(res => res.json() as Musica[])
             .catch(this.catch);
  }

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}