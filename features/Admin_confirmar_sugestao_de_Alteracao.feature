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
    Then os dados do filme não são alterados