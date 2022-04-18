import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SingInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm) {
    
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);
  }

  private checkCredentials(signInForm: NgForm) {

    const singInData = new SingInData(signInForm.value.email, signInForm.value.password);
    if (!this.authenticationService.authenticate(singInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
}

