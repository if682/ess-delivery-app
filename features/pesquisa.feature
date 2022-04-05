Feature: Pesquisa de Restaurantes
As a visitante
I want to pesquisar um restaurante existente

Scenario: Pesquisa bem sucedida de apenas um restaurante
    Given que o visitante esteja na página home do sistema
    When o visitante preencha o campo de pesquisa o nome "Comida da"
    And exista um restaurante cadastrado com o nome "Comida da tia"
    And seja selecionada a opção Pesquisar
    Then aparece campo com resultado da pesquisa
    And informando que foi encontrado um restaurante

Scenario: Pesquisa bem sucedida de vários restaurantes
    Given que o visitante esteja na página home do sistema
    When o visitante preencha o campo de pesquisa o nome "Comida"
    And exista dois ou mais restaurantes cadastrados com "Comida" em seu nome
    And seja selecionada a opção Pesquisar
    Then aparece campo com resultado da pesquisa
    And informando que foram encontrados dois ou mais restaurantes

Scenario: Pesquisa mal sucedida de restaurante
    Given que o visitante esteja na página home do sistema
    When o visitante preencha o campo de pesquisa o nome "Cinfood"
    And não exista um restaurante cadastrado com "Cinfood" em seu nome
    And seja selecionada a opção Pesquisar
    Then aparece campo informando que não foi encontrado restaurante com esse nome
