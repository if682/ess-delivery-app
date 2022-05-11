import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../cadastro/restaurante';
import { CadastroService } from '../cadastro/cadastro.service';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private cadastrosService: CadastroService, private actRoute: ActivatedRoute, private router: Router) {
  }
  restaurantes: Restaurante[] = [];
  restaurante: Restaurante = new Restaurante();
  resultadoFilter: Restaurante[] = [];

  ngOnInit(): void {

    this.restaurante = this.authenticationService.restaurante;
    this.getRestaurantes()
  }

  getRestaurantes(): void {
    this.cadastrosService.getRestaurantes().then(response => {
      this.restaurantes = response;
      this.resultadoFilter = response;
    })
      .catch(erro => alert(erro))
  }


  getRestaurantsByName(nome: string): void {
    this.resultadoFilter = []

    if (nome === '') {
      this.resultadoFilter = this.restaurantes;
    } else {
      this.restaurantes.forEach(element => {
        if (nome != '' && element.nome_restaurante.toLowerCase().includes(nome.toLowerCase())) {
          this.resultadoFilter.push(element)
        }
      });
    }

  }
}
