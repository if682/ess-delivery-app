Feature: Alterar dados do usuário
As um usuário
I want to alterar meus dados
So that eu possa corrigir possíveis informações erradas no meu perfil

    Scenario: Alteração bem-sucedida
    Given eu estou na aba de "Meu perfil"
    And eu clico em "Alterar meus dados"
    Then eu sou direcionado para o formulário de alteração dos dados pessoais
    When eu altero o campo de "SOBRENOME" de "fulano" para "NovoFulano"
    And clico enviar 
    Then recebo um aviso de que as alterações foram salvas.
    And retorno para a tela de meu perfil.


    Scenario: Alteração mal-sucedida devido a preenchimento de campo com valor indevido
    Given eu estou na aba de "Meu perfil"
    And eu clico em "Alterar meus dados"
    Then eu sou direcionado para o formulário de alteração dos dados pessoais
    When eu altero o campo de "SOBRENOME" de "fulano" para "8"
    And clico enviar 
    Then recebo um aviso de que as alterações não foram salvas pois o campo "SOBRENOME" foi preenchido de forma incorreta
    And o formulário é recarregado.

    Scenario: Alteração mal-sucedida devido ao envio de campo obrigatório em branco
    Given eu estou na aba de "Meu perfil"
    And eu clico em "Alterar meus dados"
    Then eu sou direcionado para o formulário de alteração dos dados pessoais
    When eu altero o campo de "SOBRENOME" de "fulano" para ""
    And clico enviar 
    Then recebo um aviso de que as alterações não foram salvas pois o campo "SOBRENOME" é um campo obrigatório.
    And o formulário é recarregado.

    Scenario: Alterações não salvas.
    Given eu estou na aba de "Meu perfil"
    And eu clico em "Alterar meus dados"
    Then eu sou direcionado para o formulário de alteração dos dados pessoais
    When eu altero o campo de "SOBRENOME" de "fulano" para "NovoFulano"
    And fecho o formulário de alteração de informações
    Then eu retorno para a aba de "Meu perfil"
    And as alterações não são feitas.