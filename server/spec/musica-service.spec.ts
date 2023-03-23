import 'jasmine';
import { Musica } from '../src/musica';
import { MusicaService } from '../src/musicas-service';

describe("O servico de musicas", () => {
  var musicaService: MusicaService;

  beforeEach(() => musicaService = new MusicaService())

  it("é inicialmente vazio", () => {
    expect(musicaService.musicas.length).toBe(0);
  })

  it("cadastra musicas corretamente", () => {
    const sample = <Musica> {
      nome: "only girl",
      artista_banda: "rihanna",
      ano_lancamento: 2023,
    }
    musicaService.add(sample);

    expect(musicaService.musicas.length).toBe(1);
    const result = musicaService.musicas[0];
    expect(result.id).toBe(0);
    expect(result.nome).toBe(sample.nome);
    expect(result.artista_banda).toBe(sample.artista_banda);
    expect(result.ano_lancamento).toBe(sample.ano_lancamento);
  })
})