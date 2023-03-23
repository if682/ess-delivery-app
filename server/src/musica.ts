export class Musica {
  id: number;
  nome: string;
  artista_banda: string;
  ano_lancamento: number;

  constructor(musica: Musica) {
    this.id = musica.id;
    this.nome = musica.nome;
    this.artista_banda = musica.artista_banda;
    this.ano_lancamento = musica.ano_lancamento;
  }

  update(musica: Musica): void {
    this.nome = musica.nome;
    this.artista_banda = musica.artista_banda;
    this.ano_lancamento = musica.ano_lancamento;
  }
}