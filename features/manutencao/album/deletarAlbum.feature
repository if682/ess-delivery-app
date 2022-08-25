Feature: Deletar álbum
  As um artista
  I want to deletar um álbum existente
  So that remover meu álbum no sistema

Scenario: Album deletado com sucesso
  Given Estou logado como artista "Avril Lavigne"
  And Estou na pagina do album "Let Go"
  And Pressiono o botão de "deletar"
  And Sou redirecionado para a pagina "editar album"
  When Eu pressiono o botão "deletar" neste álbum
  And Eu vejo a tela de "confirmar ação"
  And Eu pressiono o botão de "sim"
  Then Vejo uma mensagem de sucesso
  And Eu sou redirecionado para a página de "álbuns do artista" com sucesso
  And Vejo que o álbum nao existe mais na página de "álbuns do artista"

