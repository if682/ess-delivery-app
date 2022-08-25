Feature: Deletar musica
  As um artista
  I want to deletar uma musica de um album existente
  So that remover meu álbum no sistema

Scenario: Musica deletada com sucesso
  Given Estou logado como artista "Avril Lavigne"
  And Estou na pagina do album "Let Go"
  When Pressiono o botão de deletar musica na musica "Complicated"
  And Eu vejo a tela de "confirmar ação"
  And Eu pressiono o botão de "sim"
  Then Vejo uma mensagem de sucesso
  And Eu sou redirecionado para a página de "editar album" com sucesso
  And Vejo que a musica nao existe mais no album "Let Go"

  