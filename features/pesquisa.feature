Feature: Pesquisa de Restaurantes
As a visitante
I want to pesquisar um restaurante existente

Scenario: Pesquisa rápida de nome bem sucedida de apenas um restaurante
    Given que o visitante esteja na página home do sistema
    When o visitante preencha o campo de pesquisar com o nome "Comida da"
    And exista um restaurante cadastrado com o nome "Comida da tia"
    Then aparece campos de Listas de Restaurantes filtrados
    And apenas restaurante de nome "Comida da tia" aparece 

Scenario: Pesquisa rápida de nome bem sucedida de vários restaurantes
    Given que o visitante esteja na página home do sistema
    When o visitante preencha o campo de pesquisar com o nome "Comida"
    And exista dois ou mais restaurantes cadastrados com "Comida" em seu nome
    Then campos de Listas de Restaurantes são filtrados
    And restaurantes com nome "Comida" em nomes aparecem

Scenario: Pesquisa rápida de nome mal sucedida de restaurante
    Given que o visitante esteja na página home do sistema
    When o visitante preencha o campo de pesquisar com o nome "Cinfood"
    And não exista um restaurante cadastrado com "Cinfood" em seu nome
    Then aparece campos filtrados de Listas de Restaurantes com nenhum restaurante

Scenario: Pesquisa rápida de todos os restaurantes
    Given que o visitante esteja na página home do sistema
    And o campo pesquisar está vazio
    Then aparece todos os restaurantes em Listas de Restaurantes


Scenario: Pesquisa rápida de todos os restaurantes após pesquisa
    Given que o visitante esteja na página home do sistema
    And o visitante apaga nome pesquisado no campo de pesquisar
    Then aparece todos os restaurantes em Listas de Restaurantes
