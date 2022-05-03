import { Restaurante } from '../cadastro/restaurante';
import { CadastroService } from '../cadastro/cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private cadastroService: CadastroService) {}

  restaurante: Restaurante = new Restaurante();
  restaurantes: Restaurante[] = [];

  tab: number = 0;

  ngOnInit(): void {
    this.cadastroService.getRestaurantes()
         .then(restaurantes => this.restaurantes = restaurantes)
         .catch(erro => alert(erro));
  }

  switchTab(newTab): void {
    this.tab = newTab;
  }
}

