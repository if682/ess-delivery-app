Feature: "Cadastrar review"

As a usuário
I want to publicar uma review
So that eu possa compartilhar a minha opinião

Scenario: Publicar uma review sem associá-la a uma avaliação

    Given eu estou na página do filme "Madagascar"
      And eu estou logado como o usuário "Pedro" com senha "Agua123!"
      And eu não avaliei o filme "Madagascar"
    When eu escrevo a review "Ótimo filme!"
      And confirmo
    Then o sistema mostra uma mensagem de sucesso
      And eu ainda estou na página do filme "Madagascar"
      And eu consigo ver a review "Ótimo filme!" escrita pelo usuário "Pedro" sem nenhuma nota associada

Scenario: Publicar uma review associando-a a uma avaliação

    Given eu estou na página do filme "Madagascar"
      And eu estou logado como o usuário "Pedro" com senha "Agua123!"
      And eu já avaliei o filme madagascar com nota "9"
    When eu escrevo a review "Ótimo filme!" sobre o filme "Madagascar"
      And eu associo ela com a minha avaliação 
      And confirmo
    Then o sistema mostra uma mensagem de sucesso
      And eu ainda estou na página do filme "Madagascar"
      And eu consigo ver a review "Ótimo filme!" escrita pelo usuário "Pedro" associada a uma nota "9"

Scenario: Tentar publicar uma review como visitante

    Given eu estou na página do filme "Madagascar"
      And eu não estou logado
    When eu tento escrever uma review sobre o filme "Madagascar"
    Then eu sou redirecionado para a página "Login"

