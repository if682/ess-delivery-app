Feature: Criar álbum
  As um artista
  I want to preencher as informações sobre um novo álbum
  So that possa ser lançado meu novo álbum no sistema

Scenario: Inserção bem sucedida de um álbum
  Given Estou logado como artista "Dua Lipa"
  And Estou na página de "inserir álbum"
  When Eu preencho o campo de nome do álbum com "There and back again"
  And Eu preencho o campo de ano com "1969"
  And Eu pressiono o botão "inserir músicas"
  Then Eu sou redirecionado para a página de "inserir de musicas" com sucesso

Scenario: Inserção bem sucedida de um álbum
  Given Estou logado como artista "Dua Lipa"
  And Estou na página de "inserir álbum"
  When Eu preencho o campo de nome do álbum com "Ao vivo no Recife"
  And Eu preencho o campo de foto do álbum com "https//encrypted-tbn0.gstatic.com/images?q=tbnANd9GcR_GmfAo-rMgmOiWHYNvzn43COvwfg-RAd5LQ&usqp=CAU"
  And Eu preencho o campo de ano com "2008"
  And Eu pressiono o botão "inserir músicas"
  Then Eu sou redirecionado para a página de "inserir de musicas" com sucesso

Scenario: Falha na inserção de um álbum
  Given Estou logado como artista "Dua Lipa"
  And Existe um álbum de nome "Future Nostalgia"
  When Eu preencho o campo de nome do álbum com "Future Nostalgia"
  And Eu preencho o campo de foto do álbum com "https//i.scdn.co/image/ab67616d00001e02ef12a4e8cdb297684e197cc4"
  And Eu pressiono o botão "inserir músicas"
  Then Eu continuo na página de "inserção de álbum"
  And Vejo uma mensagem de erro contendo "nome do álbum já está cadastrado"

Scenario: Falha na inserção de um álbum
  Given Estou logado como artista "Billie Eilish"
  And Eu preencho o campo de foto do álbum com "https://i.redd.it/0ervpr0r2b681.jpg"
  And Eu pressiono o botão "inserir músicas"
  Then Eu continuo na página de "inserção de álbum"
  And Vejo uma mensagem de erro contendo "escolha um nome para o seu álbum"
