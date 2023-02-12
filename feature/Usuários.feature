Feature: Registration and maintenance of Users (insert, remove, update)
	AS A "Dizer" employee
	I WANT TO insert new users
    AND remove existing users
    AND update existing users information
	SO THAT users could login at the "Dizer"
    AND users could update theirs information at the "Dizer"

Funcionalidades Normais:

Scenario: Registering new users
    Given I am on the "New User Registration" page
    When I write "Pedro Basilio" in "Name"
    And I write "pcsb@cin.ufpe.br" in "e-mail"
    And I write "000000" in "Password"
    And I click on "Register"
    Then I see a registration completed message

Scenario: Usuário logado quer mudar sua senha.

Scenario: Usuario logado quer deletar a sua conta.

Scenario: Administrador deseja remover um Usuário do sistema

Erros: 

Scenario: Cadastrar novo Usuário com e-mail já cadastrado.

Scenario: Cadastrar novo Usuário com senha menor que 6 dígitos.