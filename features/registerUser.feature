Feature: Register User
As como um usuário
I want to me cadastrar no sistema, utilizando nome completo, nome de usuario, email, senha criada e data de nascimento, e, opcionalmente, telefone e localizacao
So that eu possa ter acesso ao sistema usando email/usuario e senha, além de ter minhas informacoes salvas para uso futuro

    Scenario: Registro bem-sucedido
    Given estou na página de "registro" 
    And não tenho uma conta
    And não existe uma conta com o nome completo “fulaninho” ou o email "fulano@email.com"
    And na não existe uma conta com a data de nascimento "01/01/2000" e com o nome completo "Fulano da Silva Júnior"
    When eu preencho os campo de email com "fulano@emal.com" e user com "fulaninho"
    And eu preencho os campos de “Nome Completo” com “Fulano da Silva Júnior"
    And eu preencho a “password” com “Aa#45678”
    Then eu recebo a mensagem "Registro efetuado com sucesso."
    And eu sou redirecionada a página “login”

    Scenario: Registro mal-sucedido: email já cadastrado
    Given estou na página de “registro” 
    And existe uma conta com o email “fulano@email.com”
    When eu preencho o email com "fulano@emal.com"
    Then eu recebo uma mensagem de erro “já existe uma conta com esse email.”
    And eu continuo na página de “registro”

    Scenario: Registro mal-sucedido: Nome Completo já cadastrado
    Given estou na página de “registro” 
    And existe uma conta com o nome completo “Fulano da Silva Júnior”
    When eu preencho o nome completo com "Fulano da Silva Júnior"
    Then eu recebo uma mensagem de erro “já existe uma conta com esse nome.”
    And eu continuo na página de “registro”

    Scenario: Registro mal-sucedido: senha tem menos de 8 caracteres
    Given estou na página de “registro” 
    And eu ainda não tenho uma conta
    When eu preencho a senha com "Aa#4567"
    Then eu recebo uma mensagem de erro “sua senha deve ter 6 ou mais caracteres”
    And eu continuo na página de “registro”

    Scenario: Registro mal-sucedido: senha não possui letras
    Given estou na página de “registro” 
    And eu ainda não tenho uma conta
    When eu preencho a senha com "12#45678"
    Then eu recebo uma mensagem de erro “sua senha deve ter no mínimo uma letra maiúscula e uma letra minúscula”
    And eu continuo na página de “registro”

    Scenario: Registro mal-sucedido: senha não possui caracteres especiais
    Given estou na página de “registro” 
    And eu ainda não tenho uma conta
    When eu preencho a senha com "Aa345678"
    Then eu recebo uma mensagem de erro “sua senha deve ter no mínimo um caractere especial”
    And eu continuo na página de “registro”

    Scenario: Registro mal-sucedido: informacao obrigatoria faltando
    Given estou na página de “registro”
    And ainda não tenho uma conta
    When eu não preencho o email, senha, nome, usuario ou data de nascimento
    Then eu recebo uma mensagem de erro “alguma informacao obrigatoria não foi preenchida”
    And eu continuo na página de “registro”

    Scenario: Registro mal-sucedido: email inválido
    Given estou na página de “registro” 
    And ainda não tenho conta
    When eu preencho o email com "fulano.com"
    Then eu recebo uma mensagem de erro “O email inserido é inválido.”
    And eu continuo na página de “registro”