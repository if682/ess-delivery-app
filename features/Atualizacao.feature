Feature: Atualização dos dados
    As a cliente com perfil
    I want to alterar dados que constam no perfil
    So that terei como atualizar dados no perfil

    Scenario:  Atualizando um nome de cliente(1)
        Given : Estou logado como “Bruno” no sistema
        And : estou na página do meu perfil
        When : Eu tento atualizar o campo de nome do meu perfil
        Then : O sistema me pede para uma autenticação por senha
        And : Eu tenho sucesso na autenticação
        And : Eu altero o nome para “Breno”

    Scenario: Atualizando um nome de cliente(2)
        Given : Estou logado como “Bruno” no sistema
        And : estou na página do meu perfil
        When : Eu tento atualizar o campo de nome do meu perfil
        Then : O sistema me pede para uma autenticação por senha
        And : Eu não tenho sucesso na autenticação e aparece uma mensagem de erro
        And : Eu volto para minha página de perfil inalterada

    Scenario: Atualizando um e-mail cliente(3)
        Given : Estou logado como “Breno” no sistema
        And :  Estou na página do meu perfil com o e-mail “bcfc@cin.ufpe.br”
        When : Eu tento atualizar meu e-mail no perfil
        Then : O sistema pede uma confirmação por código enviado via celular
        And : Eu tenho sucesso na autenticação
        And : Volto para minha página de perfil e atualizo o e-mail como “bccf@cin.ufpe.br”

    Scenario: Atualizando um telefone de cliente(4)
        Given : Estou logado como “Breno” no sistema
        And : Estou na minha página de perfil com o telefone “81 984752737”
        When : Eu tento atualizar meu número de celular no perfil
        Then : O sistema me pede uma confirmação via código enviado para o meu e-mail
        And : Eu tenho sucesso na autenticação
        And : Volto para minha página de perfil coloco o novo número “81 984752773”
        And : Ele é alterado com sucesso

    Scenario: Atualizando um telefone de cliente(5)
        Given : Estou logado como “Breno” no sistema
        And : Estou na minha página de perfil com o telefone “81 984752737”
        When : Eu tento atualizar meu número de celular no perfil
        Then : O sistema me pede uma confirmação via código enviado para o meu e-mail
        And : Eu não tenho sucesso na autenticação e aparece uma mensagem de erro
        And : Eu volto para minha página de perfil inalterada

    Scenario: Atualizando um e-mail cliente(6)
        Given : Estou logado como “Breno” no sistema com senha "123456"
        And :  Estou na página do meu perfil com o e-mail “bcfc@cin.ufpe.br”
        When : Eu tento atualizar meu e-mail no perfil
        Then : O sistema pede uma confirmação por código enviado via sms para o celular "81 984752773"
        And : Eu digito o código errado
        And : Eu não tenho sucesso na autenticação e aparece uma mensagem de erro
        And : Eu não consigo alterar o e-mail
        
    Scenario:  Atualizando um nome de cliente(7)
        Given : Estou logado como “Bruno Álvaro” no sistema com senha "12312"
        And : estou na página do meu perfil
        When : Eu tento atualizar o campo de sobrenome do meu perfil
        Then : O sistema me pede para uma autenticação por senha
        And : Eu digito a senha corretamente e tenho sucesso na autenticação
        And : Eu altero o sobrenome para “Andrade”