import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Client } from '../client/client';
import { ClientService } from '../client/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   constructor(private clientService: ClientService) {}

   client: Client = new Client();
   clients: Client[] = [];

   createClient(c: Client): void {
      this.clientService.create(c)
      .then(result => {
            if (result) {
               this.clients.push(<Client> result);
               this.client = new Client();
            }
         })
         .catch(erro => alert(erro));
   }

   ngOnInit(): void {
      
   }

}