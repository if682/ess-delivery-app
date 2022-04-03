import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Client } from '../client/client';
import { ClientService } from '../client/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
   constructor(private clientService: ClientService) {}

   email: string = '';
   wrong_email: boolean = false;

   sendEmail(email: string): void {
      alert('mandando email para ' + email);
      this.clientService.forgot_password(email)
      .then(result => {
         if (result) this.wrong_email = false;
         else this.wrong_email = true;
      })
      .catch(erro => alert(erro));
   }

   ngOnInit(): void {
      
   }

}