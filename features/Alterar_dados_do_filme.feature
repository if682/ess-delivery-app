Feature: Alterar filme do site 
As um usuário 
I want to sugerir a alteração dos dados de um filme na plataforma
So that eu possa manter as informações atualizadas na plataforma.

    Scenario: Sugestão de alteração bem-sucedida da data de lançamento de um filme 
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou na página de informações de um determinado filme
    When eu clico em "Sugerir mudança nas informações"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações"
    And eu preencho os campos de "Nome do Filme" = "Harry Potter" 
    And preencho o campo de sugestão para a nova "data de lançamento" = 1998
    And eu clico em enviar
    Then recebo uma resposta informando que a sugestão foi enviada para o administrador do site.

    Scenario: Sugestão de alteração sem preencher corretamente algum campo obrigatório do formulário
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou na página de informações do filme "Harry Potter"
    When eu clico em "Sugerir mudança nas informações"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações"
    And preencho o campo de sugestão para a nova "data de lançamento" = 1998
    And eu clico em enviar
    Then recebo uma resposta informando que a sugestão não foi enviada para o administrador do site pois está faltando uma informação obrigatória.

    Scenario: O usuário fechou o formulário de sugestão de alteração antes de submeter as informações
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou na página de informações de um determinado filme
    When eu clico em "Sugerir mudança nas informações"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações"
    And eu preencho os campos de "Nome do Filme" = "Harry Potter" 
    And preencho o campo de sugestão para a nova "data de lançamento" = 1998
    And eu fecho o formulário
    Then as informações do formulário de sugestão de alteração são apagadas
    And o administrador não recebe nenhum pedido de alteração de dados.

    Scenario: O usuário inseriu um valor não permitido em um campo do formulário de sugestão de alteração
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou na página de informações de um determinado filme
    When eu clico em "Sugerir mudança nas informações"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações"
    And eu preencho os campos de "Nome do Filme" = "Harry Potter" 
    And preencho o campo de sugestão para a nova "data de lançamento" = "fulaninh1231232111"
    And eu clico em enviar
    Then recebo uma resposta informando que o campo "data de lançamento" está preenchido de forma inválida
    And o administrador não recebe nenhum pedido de alteração de dados

    Scenario: O usuário tenta enviar o formulário de sugestão de alteração estar logado.
    Given eu estou logado com o usuário "fulano123" no formato "usuario-comum"
    And eu estou na página de informações de um determinado filme
    When eu clico em "Sugerir mudança nas informações"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações"
    And eu preencho os campos de "Nome do Filme" = "Harry Potter" 
    And preencho o campo de sugestão para a nova "data de lançamento" = 1998
    And eu clico em enviar
    Then recebo uma resposta informando que a sugestão não foi enviada pois não estou logado
    And o administrador nãor recebe nenhum pedido de alteração de dados.

Feature: Admin analisar o pedido de alteração de dados
As um administrador
I want tu analisar os pedidos de alteração de dados de filmes
So that eu possa garantir a qualidade das informações presentes na plataforma.

    Scenario: Sugestão de alteração aceita
    Given eu estou logado com o usuário "admin123123" no formato "usuario-administrador"
    And eu estou na página de "Solicitações de alteração de dados"
    When eu clico em "analisar pedido"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações" enviado
    And eu seleciono "Aprovar mudança"
    And eu clico em enviar
    Then recebo uma resposta informando que a alteração foi confirmada.
    And os dados da plataforma são atualizados.

    Scenario: Sugestão de alteração negada
    Given eu estou logado com o usuário "admin123123" no formato "usuario-administrador"
    And eu estou na página de "Solicitações de alteração de dados"
    When eu clico em "analisar pedido"
    Then eu sou direcionado para o "formulário de sugestão de mudança de informações" enviado
    And eu seleciono "Não aprovar mudança"
    And eu clico em enviar
    Then recebo uma resposta informando que a alteração foi confirmada.
    And os dados da plataforma são atualizados.