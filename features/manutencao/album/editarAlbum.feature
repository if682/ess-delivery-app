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