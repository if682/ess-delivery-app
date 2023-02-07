Criando uma playlist.
Cenário 1: Criando uma playlist
Neste cenário, estarei na página das minhas playlists, e poderei criar uma nova.
Dado que eu estou logado como "RomuloDaniell"
E eu estou na página "Minhas playlists"
Quando eu tento criar uma nova playlist com o nome "Músicas 2023"
Então eu sou redirecionado para uma página nova da minha minha nova playlist


Cenário 2:
Neste cenário, estarei navegando na minha playlist, e irei pesquisar alguma música na mesma.
Dado que estou logado como "RomuloDaniell"
E eu estou na playlist "Musicas do Ano Novo"
E eu quero escutar a música "Feliz Ano Novo"
Quando eu pesquiso "Feliz.."
Então a música é exibida na tela

Cenário 3:
Neste cenário, estarei ouvindo uma música, e irei adicioná-la a uma das minhas playlists.
Dado que estou logado como "RomuloDaniell"
E eu estou ouvindo uma música
E eu quero adiciona-la em uma das minhas playlists
Quando eu clico para adiociona-la
Então eu recebo uma mensagem de confirmação de que a música foi adicionada a minha playlist

Cenário 4:
Neste cenário, eu irei compartilhar a minha playlist através de um link.
Dado que estou logado como "RomuloDaniell"
E eu estou na página da playlist "Músicas favoritas"
E eu quero compartilhar a playlist
Quando eu clico no botão de compartilhar
Então é mostrada a opção de link para compartilhar a playlist

Cenários de falhas:
Dado que estou logado como "DanielSoares"
E eu quero procurar uma música na minha playlist "Músicas favoritas"
Quando eu clico para buscar a música
Então é exibida uma mensagem de erro pois a música não existe na playlist

Cenário de falha 2;
Dado que estou logado como "PedroFelipe"
E eu desejo adcionar uma música na minha playlist
Quando eu clico em adicionar música
Então é exibida uma mensagem de erro pois a música já se encontra na playlist
