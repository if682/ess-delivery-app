Feature: "Esqueci a senha"
    As a cliente que possui uma conta no aplicativo de delivery
    I want to poder modificar minha senha caso a tenha esquecido
    So that eu possa continuar utilizando o aplicativo com a mesma conta

Scenario: envio de e-mail para modificação de senha
    Given eu possuo uma conta vinculada ao email "alas3@cin.ufpe.br"
        And estou na página de "Esqueci minha senha"
    When eu insiro o email "alas3@cin.ufpe.br" no campo de e-mail
        And confirmo
    Then aparece uma mensagem de e-mail enviado com sucesso
        And eu recebo um e-mail com um link para redefinir minha senha no e-mail "alas3@cin.ufpe.br"

Scenario: falha no envio de e-mail para modificação de senha
    Given eu estou na página de "Esqueci minha senha"
        And não existe uma conta vinculada ao email "alas3@cin.ufpe.br"
    When eu insiro o email "alas3@cin.ufpe.br" no campo de e-mail
        And confirmo
    Then aparece uma mensagem de e-mail não cadastrado
        And continua na página de "Esqueci minha senha"

Scenario: modificação de senha
    Given eu estou na página de "Redefinir senha"
    When eu insiro a senha "Alas3" no campo de "nova senha"
        And eu insiro a senha "Alas3" no campo de "repetir nova senha"
        And confirmo
    Then aparece uma mensagem de senha modificada com sucesso

Scenario: falha na modificação de senha
    Given eu estou na página de "Redefinir senha"
    When eu insiro a senha "Alas3" no campo de "nova senha"
        And eu insiro a senha "Alas4" no campo de "repetir nova senha"
        And confirmo
    Then aparece uma mensagem de senhas não coincidem
        And continua na página de “Redefinir senha”

Scenario: falha na modificação de senha
    Given eu estou na página de "Redefinir senha"
        And a minha conta tem senha "Alas3"
    When eu insiro a senha "Alas3" no campo de "nova senha"
        And eu insiro a senha "Alas3" no campo de "repetir nova senha"
        And confirmo
    Then aparece uma mensagem de nova senha não pode ser igual à senha anterior
        And continua na página de "Redefinir senha"
        And "passo adicional"

Scenario: cenário
    Given condição
    When ação
    Then resultado
        And outro resultado
