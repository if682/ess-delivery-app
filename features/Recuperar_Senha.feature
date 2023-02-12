Feature: "Recuperar senha"

As a usuário 
I want to trocar minha senha caso eu a tenha esquecido
So that eu possa continuar usando a minha conta

Scenario: Email não está vinculado a nenhuma conta

    Given eu estou na página "Recuperar senha"
      And não existe uma conta vinculada ao email "pedro@cin.ufpe.br"
    When eu tento recuperar a senha via o email "pedro@cin.ufpe.br"
    Then o sistema mostra um aviso indicando que não existe conta vinculada ao email "pedro@cin.ufpe.br"
      And nenhuma mensagem é enviada ao email "pedro@cin.ufpe.br"
      And eu continuo na página "Recuperar senha"


Scenario: Recuperar senha via email com sucesso

    Given eu estou na página "Recuperar senha"
      And existe uma conta vinculada ao email "pgoq@cin.ufpe.br"
    When eu tento recuperar a senha via o email "pgoq@cin.ufpe.br"
    Then o sistema mostra um aviso indicando que email foi enviado com sucesso
      And eu continuo na página "Recuperar senha"
      And eu recebo uma mensagem com link direcionado à página "Redefinir senha" no email "pgoq@cin.ufpe.br"



Scenario: Trocando senha com sucesso

    Given eu estou na página "Redefinir senha"
      And a senha da minha conta é "Agua123!!"
    When eu insiro senha "Ess123!!!" no campo "Nova senha"
      And eu insiro "Ess123!!!" no campo "Repetir senha"
      And confirmo
    Then o sistema mostra um aviso indicando que a senha foi alterada com sucesso
      And a minha senha agora é "Ess123!!!"
      And eu sou redirecionado para a página "Login"


Scenario: Erro na modificação de senha: colocar a mesma senha atual 

    Given eu estou na página "Redefinir senha"
      And a senha da minha conta é "Agua123!!"
    When eu insiro senha "Agua123!!" no campo "Nova senha"
      And eu insiro "Agua123!!" no campo "Repetir senha"
      And confirmo
    Then o sistema mostra aviso indicando que senha nova deve ser diferente da atual
      And a senha não foi alterada
      And eu continuo na página "Redefinir senha"

Scenario: Erro na modificação de senha: senha diferentes na confirmação

    Given eu estou na página "Redefinir senha"
      And a senha da minha conta é "Agua123!!"
    When eu insiro senha "Ess123!!!" no campo "Nova senha"
      And eu insiro "Ess456!!!" no campo "Repetir senha"
      And confirmo
    Then o sistema mostra uma mensagem de erro indicando que senhas inseridas são distintas
      And a senha não foi alterada
      And eu continuo na página "Redefinir senha"

Scenario: Senha tem menos de 8 caracteres

    Given eu estou na página "Redefinir senha"
      And a senha da minha conta é "Agua123!!"
    When eu insiro senha "Ess123!" no campo "Nova senha"
      And eu insiro "Ess123!" no campo "Repetir senha"
      And confirmo
    Then o sistema mostra uma mensagem de erro indicando que algum dos critérios obrigatórios na senha não foi seguido
      And a senha não foi alterada
      And eu continuo na página "Redefinir senha"

Scenario: Senha não tem letras maiúsculas

    Given eu estou na página "Redefinir senha"
      And a senha da minha conta é "Agua123!!"
    When eu insiro senha "ess123!!!" no campo "Nova senha"
      And eu insiro "ess123!!!" no campo "Repetir senha"
      And confirmo
    Then o sistema mostra uma mensagem de erro indicando que algum dos critérios obrigatórios na senha não foi seguido
      And a senha não foi alterada
      And eu continuo na página "Redefinir senha"

Scenario: Senha não tem letras minúsculas

    Given eu estou na página "Redefinir senha"
      And a senha da minha conta é "Agua123!!"
    When eu insiro senha "ESS123!!!" no campo "Nova senha"
      And eu insiro "ESS123!!!" no campo "Repetir senha"
      And confirmo
    Then o sistema mostra uma mensagem de erro indicando que algum dos critérios obrigatórios na senha não foi seguido
      And a senha não foi alterada
      And eu continuo na página "Redefinir senha"

Scenario: Senha não tem caracteres especiais

    Given eu estou na página "Redefinir senha"
      And a senha da minha conta é "Agua123!!"
    When eu insiro senha "Ess12345" no campo "Nova senha"
      And eu insiro "Ess12345" no campo "Repetir senha"
      And confirmo
    Then o sistema mostra uma mensagem de erro indicando que algum dos critérios obrigatórios na senha não foi seguido
      And a senha não foi alterada
      And eu continuo na página "Redefinir senha"