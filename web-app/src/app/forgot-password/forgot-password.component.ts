import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import {
   FormBuilder,
   FormControl,
   FormGroup,
   Validators,
 } from "@angular/forms";

import { Client } from '../client/client';
import { ClientService } from '../client/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
   
   email: string = '';
   errouEmail: boolean = false;
   form: FormGroup;
   enviouEmail: boolean = false;
   
   constructor(
      private clientService: ClientService,
      private router: Router
   ) {
      this.form = new FormGroup({
         email: new FormControl()
       });
   }

   sendEmail(): void {
      this.clientService.forgot_password(this.form.value.email)
      .then(result => {
         if (result) {
            this.errouEmail = false;
            this.enviouEmail = true;
         }
         else this.errouEmail = true;
      })
      .catch(erro => alert(erro));
   }

   goBackToLogin() {
      this.router.navigateByUrl('../login');
   };

   ngOnInit(): void {
      
   }

}