import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SingInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new SingInData("leilany@gmail.com", "123");
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(singInData: SingInData): boolean{
    if(this.checkCredentials(singInData)){
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
      return false;
   }

  private checkCredentials(singInData: SingInData): boolean{
    return this.checkEmail(singInData.getEmail()) && this.checkPassword(singInData.getPassword());
  }

  private checkEmail(email: string): boolean{
    return email === this.mockedUser.getEmail();
  }

  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();

  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
