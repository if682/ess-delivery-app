Feature: Register User
As como um usuário
I want to me cadastrar no sistema, utilizando nome, sobrenome, email e uma senha criada
So that eu possa ter ao sistema usando email/usuario e senha, além de ter minhas informacoes salvas para uso futuro

    Scenario: Registro bem-sucedido
    Given estou na página de "registro" 
    And não tenho uma conta
    And não existe uma conta com o username “fulaninho” ou o email "fulano@email.com"
    When eu preencho os campo de email com "fulano@emal.com" e user com "fulaninho"
    And eu preencho os campos de “Nome” com “Fulaninho” e sobrenome com "de Tal"
    And eu preencho a “password” com “123456”
    Then eu recebo a mensagem "Registro efetuado com sucesso."
    And eu sou redirecionada a página “login”

    Scenario: Registro mal-sucedido: email já cadastrado
    Given estou na página de “registro” 
    And existe uma conta com o email “fulano@email.com”
    When eu preencho o email com "fulano@emal.com"
    Then eu recebo uma mensagem de erro “já existe uma conta com esse email.”
    And eu continuo na página de “registro”

    Scenario: Registro mal-sucedido: username já cadastrado
    Given estou na página de “registro” 
    And existe uma conta com o username “fulano”
    When eu preencho o username com "fulano"
    Then eu recebo uma mensagem de erro “já existe uma conta com esse username”
    And eu continuo na página de “registro”

    Scenario: Registro mal-sucedido: senha tem menos de 6 caracteres
    Given estou na página de “registro” 
    And eu ainda não tenho uma conta
    When eu preencho a senha com "12345"
    Then eu recebo uma mensagem de erro “sua senha deve ter 6 ou mais caracteres”
    And eu continuo na página de “registro”

    Scenario: Registro mal-sucedido: informacao obrigatoria faltando
    Given estou na página de “registro”
    And ainda não tenho uma conta
    When eu não preencho o email ou senha
    Then eu recebo uma mensagem de erro “alguma informacao obrigatoria não foi preenchida”
    And eu continuo na página de “registro”

    Scenario: Registro mal-sucedido: email inválido
    Given estou na página de “registro” 
    And ainda não tenho conta
    When eu preencho o email com "fulano.com"
    Then eu recebo uma mensagem de erro “O email inserido é inválido.”
    And eu continuo na página de “registro”