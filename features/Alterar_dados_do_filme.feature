Feature: Alterar filme do site 
As um usuário 
I want to sugerir a alteração dos dados de um filme na plataforma
So that eu possa manter as informações atualizadas na plataforma.

    Scenario: Sugestão de alteração bem-sucedida da data de lançamento de um filme 
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou na página de informações do filme "Harry Potter"
    When eu clico em "Sugerir mudança nas informações"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações"
    And eu preencho os campos de "Nome do Filme" = "Harry Potter" 
    And preencho o campo de sugestão para a nova "data de lançamento" = 1998
    And eu clico em enviar
    Then recebo uma resposta informando que a sugestão foi enviada para o administrador do site.
    And ele retorna para a página do filme "Harry Potter"

    Scenario: Sugestão de alteração sem preencher corretamente algum campo obrigatório do formulário
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou na página de informações do filme "Harry Potter"
    When eu clico em "Sugerir mudança nas informações"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações"
    And preencho o campo de sugestão para a nova "data de lançamento" = 1998
    And eu clico em enviar
    Then recebo uma resposta informando que a sugestão não foi enviada para o administrador do site pois está faltando a informação de "Nome do filme".
    And ele retorna para o formulário totalmente limpo de informações

    Scenario: O usuário fechou o formulário de sugestão de alteração antes de submeter as informações
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou na página de informações do filme "Harry Potter"
    When eu clico em "Sugerir mudança nas informações"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações"
    And eu preencho os campos de "Nome do Filme" = "Harry Potter" 
    And preencho o campo de sugestão para a nova "data de lançamento" = 1998
    And eu fecho o formulário
    Then as informações do formulário de sugestão de alteração são apagadas
    And o administrador não recebe nenhum pedido de alteração de dados.

    Scenario: O usuário inseriu um valor não permitido em um campo do formulário de sugestão de alteração
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou na página de informações do filme "Harry Potter"
    When eu clico em "Sugerir mudança nas informações"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações"
    And eu preencho os campos de "Nome do Filme" = "Harry Potter" 
    And preencho o campo de sugestão para a nova "data de lançamento" = "fulaninh1231232111"
    And eu clico em enviar
    Then recebo uma resposta informando que o campo "data de lançamento" está preenchido de forma inválida
    And o administrador não recebe nenhum pedido de alteração de dados
    And ele retorna para o formulário totalmente limpo de informações


    Scenario: O usuário tenta enviar o formulário de sugestão de alteração estar logado.
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou na página de informações do filme "Harry Potter"
    When eu clico em "Sugerir mudança nas informações"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações"
    And eu preencho os campos de "Nome do Filme" = "Harry Potter" 
    And preencho o campo de sugestão para a nova "data de lançamento" = 1998
    And eu clico em enviar
    Then recebo uma resposta informando que a sugestão não foi enviada pois não estou logado
    And o administrador nãor recebe nenhum pedido de alteração de dados.
    And ele retorna para a página do filme "Harry Potter"