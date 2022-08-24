Feature: Reproduzir e baixar músicas
  As um usuário do sistema
  I want to reproduzir e baixar músicas
  So that eu possa ouvir
  And baixar músicas

  Scenario: Usuário consegue reproduzir música
    Given estou na tela de "músicas"
    And existe uma música com o nome "The End"
    When eu clico no botão "play"
    Then a música é reproduzida
    And aparece seu nome na barra inferior
    
  Scenario: Usuário consegue baixar
    Given estou na tela de "músicas"
    And existe uma música com o nome "The End"
    When eu clico no botão "baixar"
    Then a música é baixada
    And aparece a confirmação na tela

  Scenario: Pular para a próxima música
    Given estou na tela de "músicas"
    And existe uma música com o nome "The End"
    When eu clico no botão "próxima música"
    Then a música é pulada
    And começa a tocar uma nova música

  Scenario: Usuário não consegue reproduzir música
    Given estou na tela de "músicas"
    And existe uma música com o nome "The End"
    When eu clico no botão "play"
    Then a música não é reproduzida
    And aparece a mensagem de erro
    
  Scenario: Usuário não consegue baixar
    Given estou na tela de "músicas"
    And existe uma música com o nome "The End"
    When eu clico no botão "baixar"
    Then a música não é baixada
    And aparece a mensagem de erro
