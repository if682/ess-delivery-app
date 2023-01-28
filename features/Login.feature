@i9n
Feature: Login
    Scenario: Login bem sucedido
    Given O usário está na página de "Login", usou o email "emailTeste" e senha "senhaTeste"
    And "emailTeste" e "senhaTeste" foram propriamente armazenados
    When O usuário loga com email "emailTeste" e senha "senhaTeste"
    Then O usuário avança da página de "Login" 
    Scenario: Senha errada
    Given O usário está na página de "Login", usou o email "emailTeste" e senha "senhaTeste"
    And "emailTeste" foi propriamente armazenado
    And "senhaTeste" não foi encontrado no sistema
    When O usuário loga com email "emailTeste" e senha "senhaTeste"
    Then O usuário é alertado que "senhaTeste" está errada 
    Scenario: Email errado
    Given O usário está na página de "Login", usou o email "emailTeste" e senha "senhaTeste"
    And "emailTeste" não foi encontrado no sistema
    And "senhaTeste" foi propriamente armazenado 
    When O usuário loga com email "emailTeste" e senha "senhaTeste"
    Then O usuário é alertado que "emailTeste" não existe no sistema
    Scenario: Senha redefinida
    Given O usário está na página de "Login", usou o email "emailTeste" e senha "senhaTeste"
    And "emailTeste" foi encontrado no sistema
    And "senhaTeste" não foi encontrado no sistema 
    When O usuário clica em "Esqueceu a senha?"
    Then O usuário é alertado que instruções para redifinir a senha foram enviadas para "emailTeste"