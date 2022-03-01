Feature: Login
    As a usuário do sistema
    I want to entrar no sistema com meu e-mail e senha
    So that eu tenha acesso às funcionalidades internas do sistema, que são acessíveis somente após o login

Scenario: Login realizado com sucesso
    Given que não estou logado com nenhum usuário
        And existe um usuário cadastrado com e-mail  "aoqb@cin.ufpe.br" e senha "A1234567"
        And estou na página de "Login"
    When eu preencho os campos com e-mail "aoqb@cin.ufpe.br" e senha "A1234567"
    Then eu vou para a página de "Início" do sistema

Scenario: Falha no login com e-mail não cadastrado
    Given que não estou logado com nenhum usuário
        And não existe nenhum usuário cadastrado
        And estou na página de "Login"
    When eu preencho os campos com e-mail "aoqb@cin.ufpe.br" e senha "A1234567"
    Then aparece uma mensagem de falha no login

Scenario: Falha no login com senha incorreta
    Given que não estou logado com nenhum usuário
        And existe um usuário cadastrado com e-mail  "aoqb@cin.ufpe.br" e senha "A1234567"
        And estou na página de "Login"
    When eu preencho os campos com e-mail "aoqb@cin.ufpe.br" e senha "B7654321"
    Then aparece uma mensagem de falha no login

Scenario: Falha no login com senha em branco
    Given que não estou logado com nenhum usuário
        And existe um usuário cadastrado com e-mail  "aoqb@cin.ufpe.br" e senha "A1234567"
        And estou na página de "Login"
    When eu preencho o campo de e-mail com "aoqb@cin.ufpe.br"
    Then não consigo pressionar o botão de entrar
        And permaneço na página de login 

Scenario: Falha no login com e-mail inválido
    Given que não estou logado com nenhum usuário
        And existe um usuário cadastrado com e-mail  "aoqb@cin.ufpe.br" e senha "A1234567"
        And estou na página de "Login"
    When eu preencho os campos com e-mail "aoqb" e senha "A7654321"
    Then aparece uma mensagem de falha no login

Scenario: Falha no login com e-mail em branco
    Given que não estou logado com nenhum usuário
        And existe um usuário cadastrado com e-mail "aoqb@cin.ufpe.br" e senha "A1234567"
        And estou na página de "Login"
    When eu preencho o campo de senha com "A1234567"
    Then não consigo pressionar o botão de entrar
        And permaneço na página de login 
