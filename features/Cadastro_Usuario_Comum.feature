Feature: Cadastro de usuários do tipo comum (inserir, remover, atualizar)
    In order to cadastrar usuários do tipo comum
    As usuários comuns
    I want to cadastrar um novo usuário comum

Background: 
    Given sou um novo usuario e desejo me cadastrar

Scenario: Tentar cadastrar um usuário sem fornacer todos os dados obrigatorios
    Given eu estou na página "Cadastrar Usuário" para usuarios comuns
    When eu tento cadastrar um usuário com pelo menos um campo obrigatório em branco
    Then eu vejo uma mensagem de erro
    And eu ainda estou na pagina "Cadastrar usuário" para usuarios comuns

Scenario: Cadastrar um usuario com sucesso
    Given eu estou na pagina "Cadastrar Usuário" para usuarios comuns
    When eu preencho todos os dados obrigatorios corretamente
    Then eu vejo uma mensagem de sucesso
    And eu vou para a pagina de "Login"

Scenario: Tentar cadastrar um usuario que ja esta cadastrado
    Given eu estou na pagina "Cadastrar Usuário" para usuarios comuns
    When eu preencho todos os dados obrigatorios corretamente
    And o nome de usuario digitado ja esta cadastrado
    Then eu vejo uma mensagem de erro
    And eu ainda estou na pagina "Cadastrar usuário" para usuarios comuns