Feature: Remoção de Restaurantes
As a responsável
I want to remover um restaurante existente

Scenario: Remoção bem sucedida do restaurante
    Given que o responsável esteja na página de gerenciar restaurantes do sistema
    And exista um restaurante cadastrado com o CNPJ "12.345.678/0001-99"
    And seja selecionada a opção de Remoção de Restaurante
    When o usuário preenche o CNPJ "12.345.678/0001-99", o NOME DO RESPONSÁVEL "Eduardo", o NOME DO RESTAURANTE "Comida da tia" e a SENHA "1234"
    Then aparece uma mensagem de confirmação da remoção na tela

Scenario: Remoção mal sucedida com Senha incorreta
    Given que o responsável esteja na página de gerenciar restaurantes do sistema
    And exista um restaurante cadastrado com o CNPJ "12.345.678/0001-99"
    And seja selecionada a opção de Remoção de Restaurante
    When o usuário preenche o CNPJ "12.345.678/0001-99", o NOME DO RESPONSÁVEL "Eduardo", o NOME DO RESTAURANTE "Comida da tia" e a SENHA "12234"
    Then aparece uma mensagem de erro na tela informando que a remoção não foi efetuada pois a senha está incorreta
    
Scenario: Remoção mal sucedida com CNPJ incorreto
    Given que o responsável esteja na página de gerenciar restaurantes do sistema
    And exista um restaurante cadastrado com o CNPJ "12.345.678/0001-99"
    And seja selecionada a opção de Remoção de Restaurante
    When o usuário preenche o CNPJ "123456780001", o NOME DO RESPONSÁVEL "Eduardo", o NOME DO RESTAURANTE "Comida da tia" e a SENHA "1234"
    Then aparece uma mensagem de erro na tela informando que a remoção não foi efetuada pois o CNPJ está incorreto

Scenario: Remoção mal sucedida com NOME DO RESPONSÁVEL e/ou NOME DO RESTAURANTE incorreto
    Given que o responsável esteja na página de gerenciar restaurantes do sistema
    And exista um restaurante cadastrado com o CNPJ "12.345.678/0001-99"
    And seja selecionada a opção de Remoção de Restaurante
    When o usuário preenche o CNPJ "12.345.678/0001-99", o NOME DO RESPONSÁVEL "Edouard", o NOME DO RESTAURANTE "Comida da tia" e a SENHA "1234"
    Then aparece uma mensagem de erro na tela informando que a remoção não foi efetuada pois o NOME DO RESPONSÁVEL e/ou NOME DO RESTAURANTE está incorreto