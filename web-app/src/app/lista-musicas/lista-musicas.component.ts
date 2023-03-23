import { Component, OnInit } from '@angular/core';
import { Musica } from '../musicas/musica';
import { MusicaService } from '../musicas/musicas.service';

@Component({
  selector: 'app-lista-musicas',
  templateUrl: './lista-musicas.component.html',
  styleUrls: ['./lista-musicas.component.css']
})

export class ListaMusicasComponent implements OnInit {

  musicas: Musica[];

  constructor(private musicaService: MusicaService) {}

  ngOnInit() {
    this.musicaService.getMusicas()
      .then((musicas) => {
        this.musicas = musicas;
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

}
