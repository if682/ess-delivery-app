Feature: Criar música
  As um artista
  I want to preencher as informações sobre uma nova música
  So that possa ser adicionada uma nova música ao álbum

Scenario: Inserção bem sucedida de uma música
  Given Estou na página de "inserir músicas"
  And Existe um artista no sistema com o nome "Wesley Safadão"
  And Eu preencho o campo de artistas participantes com "Wesley Safadão"
  When Eu preencho o campo de título da música com "Monkey Rap"
  And Eu preencho o campo de link "https//youtu.be/hKqaxl2nqGI"
  And Eu preencho a caixa de seleção escrito "explícito"
  And Eu pressiono o botão "salvar"
  Then Eu sou redirecionado de volta para a página de "cadastrar álbum"
  And Eu vejo uma barra com as informações da música que foi cadastrada na página de "cadastrar álbum"

Scenario: Inserção bem sucedida de uma música
  Given Estou na página de "inserir músicas"
  When Eu preencho o campo de título da música com "Amor Finito"
  And Eu preencho o campo de link "https//www.youtube.com/watch?v=6POZlJAZsok"
  And Eu pressiono o botão "salvar"
  Then Eu sou redirecionado de volta para a página de "cadastrar álbum"
  And Eu vejo uma barra com as informações da música que foi cadastrada na página de "cadastrar álbum"

Scenario: Falha na inserção de música
  Given Estou na página de "inserir músicas"
  And Existe um artista no sistema com o nome "Evanescence"
  When Eu preencho o campo de título da música com "Bring Donkey Kong To Life"
  And Eu preencho o campo de artistas participantes com "Evanescence"
  And Eu pressiono o botão "salvar"
  Then Eu continuo na página de "inserir músicas"
  And Eu vejo uma mensagem de erro contendo "link de música vazio"

Scenario: Falha na inserção de música
  Given Estou na página de "inserir músicas"
  When Eu preencho o campo de título da música 1 com "Banjo Boy"
  And Eu preencho o campo de arquivo "https//youtu.be/2C3m5Lno_20"
  And Eu preencho o campo de artistas participantes com "Aduleibe"
  And Eu pressiono o botão "salvar"
  Then Eu continuo na página de "inserir músicas"
  And Eu vejo uma mensagem de erro contendo "Artista participante não está cadastrado"
