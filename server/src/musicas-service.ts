import { Musica } from "./musica";

export class MusicaService {
  musicas: Musica[] = [];
  idCount: number = 0;
  
  add(musica: Musica): Musica {
    if (this.musicas.length >= 10) return null;
    const newMusica = new Musica(<Musica> { id: this.idCount, ...musica });
    if (newMusica.nome.length == 0) {
      throw Error("Nome of music can't empty")
    }
    this.musicas.push(newMusica);
    this.idCount++;
    return newMusica;
  }

  update(musica: Musica) : Musica {
    console.log(this.musicas)
    var result : Musica = this.musicas.find(c => c.id == c.id);
    if (result) result.update(musica);
    return result;
  }

  get() : Musica[] {
    return this.musicas;
  }
  
  getById(musicaId: number) : Musica {
    return this.musicas.find(({ id }) => id == musicaId);
  }
}
