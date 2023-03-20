import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Musica } from './musica';
import { MusicaService } from './musicas.service';

@Component({
  selector: 'app-root',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent implements OnInit {
   constructor(private musicaService: MusicaService) {}

   musica: Musica = new Musica();
   musicas: Musica[] = [];

   createMusica(c: Musica): void {
      this.musicaService.create(c)
      .then(result => {
            if (result) {
               this.musicas.push(<Musica> result);
               this.musica = new Musica();
            }
         })
         .catch(erro => alert(erro));
   }

   ngOnInit(): void {}

}