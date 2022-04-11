import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Restaurante } from './restaurante';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-root',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
   constructor(private cadastroService: CadastroService) {}

   restaurante: Restaurante = new Restaurante();
   restaurantes: Restaurante[] = [];

   createRestaurante(r: Restaurante): void {
      this.cadastroService.create(r)
      .then(result => {
            if (result) {
               this.restaurantes.push(<Restaurante> result);
               this.restaurante = new Restaurante();
            }
         })
         .catch(erro => alert(erro));
   }

   ngOnInit(): void {
      this.cadastroService.getRestaurantes()
         .then(restaurantes => this.restaurantes = restaurantes)
         .catch(erro => alert(erro));
   }

}