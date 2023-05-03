Feature: Historico de filmes
As como um usu�rio
I want to ver os historicos de filme
So that eu possa saber quais filmes j� foram vistos

    Scenario: Vendo o meu historico
    Given estou logado em minha conta 
    When eu seleciono a aba de �Meu Historico�
    Then eu sou redirecionada a p�gina �Meu Historico�
    And posso ver os filmes assistidos recentemente

    Scenario: Vendo o meu historico "vazio"
    Given estou logado em minha conta 
    And nunca assisti um filme
    When eu seleciono a aba de �Meu Historico�
    Then eu sou redirecionada a p�gina �Meu Historico�
    And recebo a mensagem "Historico vazio"

    Scenario: vendo o historico de outro usuario n�o estando logado
    Given estou no perfil de outro usuario 
    And n�o estou logada em nenhuma conta
    When eu seleciono a aba de �Historico�
    Then eu sou redirecionada a p�gina �Meu Historico� do usuario selecionado
    And vejo os filmes recentemente assistidos pelo usuario

    Scenario: vendo o historico de outro usuario estando logado
    Given estou no perfil de outro usuario 
    And n�o estou logada em minha conta
    When eu seleciono a aba de �Historico�
    Then eu sou redirecionada a p�gina �Meu Historico� do usuario selecionado
    And vejo os filmes recentemente assistidos pelo usuario
    And sou capaz de assistir aos filmes recentemente assistidos pelo usuario