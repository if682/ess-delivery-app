import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

import { Client } from '../client/client';
import { ClientService } from '../client/client.service';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      password1: new FormControl(),
      password2: new FormControl()
    });
  }

  form: FormGroup;
  id: number = 0;
  client: Client = new Client();
  mudouSenha:boolean = false;
  errouSenha = {
    equals: false,
    format: false
  };
  

  update() {
    if (this.form.value.password1 === this.form.value.password2) {
      var psw = this.form.value.password1;
      if (psw.length >= 8 && this.hasNumber(psw) && this.hasUppercaseLetter(psw)) {
        this.client.password = psw;
        this.clientService.update(this.client)
        .then(result => {
          if (result) {
            this.mudouSenha = true;
          } else {
            this.mudouSenha = false;
          }
        })
        .catch(erro => alert(erro));
      } else {
        this.wrong_passwords(false, true);
      }

    } else {
      this.wrong_passwords(true, false);
    }
  }

  hasNumber(psw: string) {
    return /\d/.test(psw);
  }

  hasUppercaseLetter(psw: string) {
    return /[A-Z]/.test(psw);
  }

  wrong_passwords(equals: boolean, format: boolean) {
    this.errouSenha.equals = equals;
    this.errouSenha.format = format;
    setTimeout(() => {
      this.errouSenha.equals = false;
      this.errouSenha.format = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { id: 0 }

        this.id = params['id'];
        console.log(this.id); // 0
      }
    );

    this.clientService.getById(this.id)
    .then(result => {
      if (result) {
        this.client.id = result.id;
        this.client.name = result.name;
        this.client.cpf = result.cpf;
        this.client.email = result.email;
        this.client.phone = result.phone;
        this.client.pay_method = result.pay_method;
        this.client.addresses = result.addresses;
        this.client.password = result.password;
      }
    });
  }

}