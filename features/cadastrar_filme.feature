Feature: Cadastrar filme 
As um usuário 
I want to cadastar um novo filme na plataforma
So that eu possa aumentar o catálogo de filmes do sistema.

    Scenario: Cadastro bem-sucedido
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou no "formulário de cadastro de filmes"
    When eu preencho as informações de nome: "Harry Potter", data de lançamento: "1998", Descrição do filme: "Descrição"
    And não existe nenhum filme já cadastrado no sistema com nome "Harry Potter".
    And eu submeto o formulário 
    Then eu recebo um alerta na tela informando que o cadastro foi bem sucedido
    And sou direcionada para a tela inicial da plataforma.

    Scenario: Cadastro de filme já existente na plataforma
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou no "formulário de cadastro de filmes"
    When eu preencho as informações de nome: "Harry Potter e a pedra filosofal", data de lançamento: "1998", Descrição do filme: "Descrição"
    And já existe um filme cadastrado na plataforma com o nome "Harry Potter e a pedra filosofal"
    And eu submeto o formulário
    Then eu recebo um alerta que o filme "Harry Potter e a pedra filosofal" já foi cadastrado no sistema e não pode ser colocado novamente
    And o formulário é limpo.

