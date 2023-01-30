Feature: Cadastro de um usuário do tipo admnistrador
  In order to cadastrar um novo usuário do tipo admnistrador ao sistema
  As a usuário administrador principal
  I want to cadastrar novos usuários do tipo administrador
  
  Background:
    Given eu estou logado como "Administrador Principal"

  Scenario: cadastro de um usuário administrador sem fornecer todas as informações obrigatórias
    Given eu estou na página "Cadastrar novo administrador"
    When eu tento cadastrar um usuário administrador
    And ao menos um dos campos marcados como obrigatórios não esta(ão) preenchido(s)
    Then eu recebo uma mensagem de erro
    And eu vejo na mensagem quais campos não foram preenchidos
    And eu continuo na pagina "Cadastrar novo administrador"

  Scenario: cadastro de um usuário administrador fornecento todas as informações obrigatórias
    Given eu estou na página "Cadastrar novo administrador"
    When eu tento cadastrar um usuário administrador
    And todos os campos obrigatórios estão preenchidos
    Then eu recebo uma mensagem de sucesso
    And eu vejo que o usuário foi adicionado ao sistema
    And eu continuo na pagina "Cadastrar novo administrador"