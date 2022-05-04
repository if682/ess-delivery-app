import { AuthenticationService } from '../service/authentication/authentication.service';
import { Restaurante } from '../cadastro/restaurante';
import { CadastroService } from '../cadastro/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private cadastroService: CadastroService, private router: Router) {}
  
  selectedCnpj = '';

  restaurante: Restaurante = new Restaurante();

  tab: number = 0;
  editMode: boolean = false;

  ngOnInit(): void {
    this.restaurante = this.authenticationService.restaurante;
  }

  switchTab(newTab): void {
    this.tab = newTab;
  }

  setEditMode(newEditMode) {
    this.editMode = newEditMode;
  }

  deleteRestaurant() {
    this.cadastroService.delete(this.restaurante.cnpj, () => this.router.navigateByUrl('/login'))
         .catch(erro => alert(erro));
  }
}

