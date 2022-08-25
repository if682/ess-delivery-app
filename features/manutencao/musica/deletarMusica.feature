Feature: Deletar musica
  As um artista
  I want to deletar uma musica de um album existente
  So that remover meu álbum no sistema

Scenario: Musica deletada do album com sucesso 
  Given Estou logado como artista "Avril Lavigne"
  And Estou na pagina do album "Let Go"
  When Pressiono o botão de deletar musica na musica "Complicated"
  And Eu vejo a tela de "confirmar ação"
  And Eu pressiono o botão de "sim"
  Then Vejo uma mensagem de sucesso
  And Eu sou redirecionado para a página de "editar album" com sucesso
  And Vejo que a musica nao existe mais no album "Let Go"

Scenario: Musica nao deletada do album
  Given Estou logado como artista "Juninho da Silva"
  And Estou na pagina do album "Feira da fruta"
  When Pressiono o botão de deletar musica na musica "Dog Rap"
  And Eu vejo a tela de "confirmar ação"
  And Eu pressiono o botão de "nao"
  Then Eu sou redirecionado para a pagina "editar album"
  And Vejo que a musica ainda existe no algum "Feira da Fruta"