Feature: Criar álbum
As um artista
I want to preencher as informações sobre um novo álbum
So that possa ser lançado meu novo álbum no sistema

Scenario: Inserção bem sucedida de um álbum:
  Given: Estou logado como artista "Dua Lipa"
  And: Estou na página de "inserir álbum"
  When: Eu preencho o campo de nome do álbum com "There and back again"
  And: Eu preencho o campo de foto do álbum com "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GmfAo-rMgmOiWHYNvzn43COvwfg-RAd5LQ&usqp=CAU"
  And: Eu preencho a caixa de seleção escrito "single"
  Then: Eu sou redirecionado para a página de "inserir de musicas" com sucesso

Scenario: Falha na inserção de um álbum:
  Given: Estou logado como artista "Dua Lipa"
  When: Eu preencho o campo de nome do álbum com "Future Nostalgia"
  And: Eu preencho o campo de foto do álbum com "https://i.scdn.co/image/ab67616d00001e02ef12a4e8cdb297684e197cc4"
  Then: Eu continuo na página de "inserção de álbum"
  And: Vejo uma mensagem de erro contendo "álbum já está cadastrado"

Scenario: Inserção bem sucedida de uma música
  Given: Estou na página de "inserir músicas"
  And: O álbum pai da música possuia a tag "single"
  When: Eu preencho o campo de título da música 1 com "Monkey Rap"
  And: Eu preencho o campo de arquivo "https://youtu.be/hKqaxl2nqGI"
  And: Eu preencho o campo de artistas participantes com "Wesley Safadão"
  And: Eu preencho a caixa de seleção escrito "explícito"
  Then: Eu vejo uma mensagem de sucesso
  And: Eu sou redirecionado para a página de "álbuns do artista"

Scenario: Falha na inserção de música
  Given: Estou na página de "inserir músicas"
  And: O álbum pai da música possuia a tag "single"
  When: Eu preencho o campo de título da música 1 com "Bring Donkey Kong To Life"
  And: Eu preencho o campo de artistas participantes com "Evanescence"
  Then: Eu continuo na página de "inserir músicas"
  And: Eu vejo uma mensagem de erro contendo "arquivo de música vazio"
  And: Eu vejo uma mensagem "Then adicionado, como o stakeholder pediu" 

Scenario: Inserção de músicas
  Given: Estou na página de "inserir músicas"
  When: Eu preencho o campo de título da música 1 com "Amor Finito"
  And: Eu preencho o campo de arquivo "https://www.youtube.com/watch?v=6POZlJAZsok"
  And: Eu preencho o campo de artistas participantes com "Bill Withers"
  Then: Eu continuo na página de "inserir músicas" 
  And: Eu vejo uma mensagem "música adicionada ao álbum"
  And: Sou direcionado para adicionar mais uma música

Scenario: Falha na inserção de música
  Given: Estou na página de "inserir músicas"
  When: Eu preencho o campo de título da música 1 com "Banjo Boy"
  And: Eu preencho o campo de arquivo "https://youtu.be/2C3m5Lno_20"
  And: Eu preencho o campo de artistas participantes com "Aduleibe"
  Then: Eu continuo na página de "inserir músicas"
  And: Eu vejo uma mensagem de erro contendo "Artista participante não está cadastrado" 
