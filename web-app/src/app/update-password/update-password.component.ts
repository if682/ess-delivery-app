import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/filter';

import { Client } from '../client/client';
import { ClientService } from '../client/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  id: number = 0;
  client: Client = new Client();
  password = {
    um: '',
    dois: ''
  }
  wrong_password: boolean = false;

  update(c: Client) {
    if (this.password.um === this.password.dois) {
      c.password = this.password.um;
      this.clientService.update(c)
      .then(result => {
        if (result) {
          this.wrong_password = false;
        } else this.wrong_password = true;
      })
      .catch(erro => alert(erro));

    } else {
      this.wrong_password = true;
    }
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { id: 0 }

        this.id = params.id;
        console.log(this.id); // 0
      }
    );

    this.clientService.getById(this.id)
    .subscribe(result => {
      if (result) {
        result = JSON.parse(result);
        console.log('\n\n----------------'+JSON.stringify(result.name)+'----------------\n\n');
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