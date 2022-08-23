Feature: Criar álbum
  As um artista
  I want to preencher as informações sobre um novo álbum
  So that possa ser lançado meu novo álbum no sistema

Scenario: Inserção bem sucedida de um álbum
  Given Estou logado como artista "Dua Lipa"
  And Estou na página de "inserir álbum"
  And Eu cadastrei a música "Raining blood" neste álbum
  When Eu preencho o campo de nome do álbum com "There and back again"
  And Eu preencho o campo de ano com "1969"
  Then Vejo uma mensagem de sucesso
  And Eu sou redirecionado para a página de "Álbuns do artista" com sucesso
  And Vejo o álbum que foi criado na página de "álbuns do artista"

Scenario: Inserção bem sucedida de um álbum
  Given Estou logado como artista "Dua Lipa"
  And Estou na página de "inserir álbum"
  And Eu cadastrei a música "Wonderwall" neste álbum
  And Eu cadastrei a música "Master of puppets" neste álbum
  When Eu preencho o campo de nome do álbum com "Ao vivo no Recife"
  And Eu preencho o campo de foto do álbum com "https//encrypted-tbn0.gstatic.com/images?q=tbnANd9GcR_GmfAo-rMgmOiWHYNvzn43COvwfg-RAd5LQ&usqp=CAU"
  And Eu preencho o campo de ano com "2008"
  And Eu pressiono o botão "salvar"
  Then Vejo uma mensagem de sucesso
  And Eu sou redirecionado para a página de "Álbuns do artista" com sucesso
  And Vejo o álbum que foi criado na página de "álbuns do artista"

Scenario: Falha na inserção de um álbum
  Given Estou logado como artista "Dua Lipa"
  And Existe um álbum de nome "Future Nostalgia"
  And Eu cadastrei a música "Despacito" neste álbum.
  When Eu preencho o campo de nome do álbum com "Future Nostalgia"
  And Eu preencho o campo de foto do álbum com "https//i.scdn.co/image/ab67616d00001e02ef12a4e8cdb297684e197cc4"
  And Eu preencho o campo de ano com "1987"
  And Eu pressiono o botão "salvar"
  Then Eu continuo na página de "inserção de álbum"
  And Vejo uma mensagem de erro contendo "nome do álbum já está cadastrado"

Scenario: Falha na inserção de um álbum
  Given Estou logado como artista "Billie Eilish"
  And Eu cadastrei a música "Despacito 2" neste álbum.
  And Eu preencho o campo de foto do álbum com "https://i.redd.it/0ervpr0r2b681.jpg"
  And Eu preencho o campo de ano com "2000"
  And Eu pressiono o botão "salvar"
  Then Eu continuo na página de "inserção de álbum"
  And Vejo uma mensagem de erro contendo "escolha um nome para o seu álbum"

Scenario: Falha na inserção de um álbum
  Given Estou logado como artista "Billie Eilish"
  When Eu preencho o campo de nome do álbum com "Literally me"
  And Eu preencho o campo de ano com "2022"
  And Eu preencho o campo de foto do álbum com "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F472%2F186%2F337.jpg"
  And Eu pressiono o botão "salvar"
  Then Eu continuo na página de "inserção de álbum"
  And Vejo uma mensagem de erro contendo "Insira alguma música ao seu álbum antes de cadastrá-lo"

Scenario: Falha na inserção de um álbum
  Given Estou logado como artista "Olivia Rodrigo"
  And Eu cadastrei a música "I need a hero" neste álbum.
  When Eu preencho o campo de nome do álbum com "Be prepared"
  And Eu preencho o campo de foto do álbum com "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/100/518/products/6509648575-56feb1481ea15as000229-tqet-791fe292b9ed3cc47315815305073929-640-0.jpg"
  And Eu pressiono o botão "salvar"
  Then Eu continuo na página de "inserção de álbum"
  And Vejo uma mensagem de erro contendo "Indique o ano do seu álbum"

Scenario: Adição de músicas
Given Estou logado como artista "Olivia Rodrigo"
When Eu pressiono o botão "Adicionar música"
Then Eu sou redirecionado para a página de "inserir músicas"
