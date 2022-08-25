Feature: Editar álbum
  As um artista
  I want to editar as informações sobre um álbum existente
  So that atualizar meu álbum no sistema

Scenario: Edição bem sucedida de um álbum
  Given Estou logado como artista "Avril Lavigne"
  And Estou na pagina do album "Let Go"
  And Pressiono o botão de "editar"
  And Sou redirecionado para a pagina "editar album"
  When Eu adiciono a música "Complicated " neste álbum
  And eu preencho o campo de foto do album com "https://media.s-bol.com/R6YkN8mpDNXE/550x479.jpg"
  And Eu pressiono o botão de "salvar"  
  Then Vejo uma mensagem de sucesso
  And Eu sou redirecionado para a página de "álbuns do artista" com sucesso
  And Vejo o álbum que foi atualizado na página de "álbuns do artista"

Scenario: Falha na edição de album por campo obrigatório vazio
  Given Estou logado como artista "Avril Lavigne"
  And Estou na pagina do album "Let Go"
  And Pressiono o botão de "editar"
  And Sou redirecionado para a pagina "editar album"
  When Eu apago o campo "ano" neste álbum
  And Eu pressiono o botão de "salvar"  
  Then Eu continuo na pagina "editar album"
  And Vejo uma mensagem de erro contendo "Indique o ano do seu álbum"

Scenario: Falha na edição de album por salvar album sem musica
  Given Estou logado como artista "Avril Lavigne"
  And Estou na pagina do album "Let Go"
  And Pressiono o botão de "editar"
  And Sou redirecionado para a pagina "editar album"
  When Eu removo a musica "Complicated"
  And Eu removo a musica "I'm With You"
  And Eu pressiono o botão de "salvar"  
  Then Eu continuo na pagina "editar álbum"
  And Vejo uma mensagem de erro contendo "Album vazio. Adicione musicas ao álbum"

Scenario: Falha na edição de album por salvar album sem foto
  Given Estou logado como artista "Juninho da Silva"
  And Estou na pagina do album "Feira da fruta"
  And Pressiono o botão de "editar"
  And Sou redirecionado para a pagina "editar album"
  When Eu removo a foto no campo "foto do album"
  And Eu pressiono o botão de "salvar"  
  Then Eu continuo na pagina "editar álbum"
  And Vejo uma mensagem de erro contendo "Album sem foto. Adicione uma foto ao álbum"