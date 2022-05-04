import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SingInData } from 'src/app/model/signInData';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';
  isAuthenticated = false;

  constructor(private router: Router, private http: Http) { }

  authenticate(singInData: SingInData): Promise<Boolean>{
    console.log("AAAAAAAA")
    return this.checkCredentials(singInData).then((result)=>{
      if(result){
        console.log("Autentiquei")
        this.isAuthenticated = true;
        this.router.navigate(['home']);
        return true;
      }
      this.isAuthenticated = false;
      return false;
    }).catch(this.catch)
   }

  private checkCredentials(singInData: SingInData): Promise<Boolean>{

    return this.http.post(this.taURL + "/restaurant/login",JSON.stringify(singInData), {headers: this.headers})
      .toPromise()
      .then((ans) => {
        if(ans.status == 201){
          return true;
        }
        else{
          return false;
        }
      })
      .catch(this.catch)

  
  }

  private catch(erro: any): Promise<any>{
    console.error('Erro',erro);
    return Promise.reject(erro.message || erro);
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
