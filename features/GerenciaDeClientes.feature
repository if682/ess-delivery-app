Feature: Gerência de Clientes
    As a usuário do site de delivery
    I want poder criar uma conta no site, alterar as informações fornecidas durante o cadastro e desativar a conta que criei
    So that assim eu possa ter uma identificação única, atualizada e a opção de desativá-la no site de delivery

    Scenario: Cadastrar um cliente que não possui email vinculado
        Given que não possuo conta no site
        And que meu nome e meu email principal são “Random” e “random@hotmail.com”
        And que estou na página "Cadastro do nome"
        And há o campo "Nome" nessa página
        When eu preencho esse campo com "Random"
        And clico em "Continuar"
        Then eu sou direcionado para a página "Cadastro do e-mail"
        When eu preencho o campo "E-mail" com “random@hotmail.com”
        And clico na opção "Continuar"
        Then sou direcionado para a página "Cadastro de senha"
        And nela há os campos "Senha" e "Confirme sua senha"
        And a checkbox "Corcondância com os termos e política de privacidade"
        When eu preencho os campos "Senha" e "Confirme sua senha", respectivamente, com "random1234" e "random1234"
        And marco a checkbox "Corcondância com os termos e política de privacidade"
        And clico em "Continuar"
        Then eu sou direcionado para a página "Boas-vindas" que expõe a mensagem "Conta criada com sucesso"

    Scenario: Cadastrar um cliente que já possui email vinculado
        Given que já possuo conta no site vinculada ao email “random@hotmail.com”
        And que não estou logado nessa conta
        And que meu nome e meu email principal são “Random” e “random@hotmail.com”
        And que estou na página "Cadastro de nome"
        And há o campo "Nome" nessa página
        When eu preencho esse campo com "Random"
        And clico em "Continuar"
        Then eu sou direcionado para a página "Cadastro de e-mail"
        When eu preencho o campo "E-mail" com “random@hotmail.com”
        And clico na opção "Continuar"
        Then eu sou redirecionado para a página "Login"
        And o campo "E-mail" já estará preenchido com "random@hotmail.com"

    Scenario: Desativar a conta de um cliente
        Given que estou logado como "cliente" com nome “Random”, email “random@hotmail.com” e senha "random1234"
        And que estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Meus pedidos" e "Desativar conta"
        When eu clico na opção “Desativar conta”
        Then eu serei direcionado para a página "Desativar conta"
        And nela haverá a pergunta de confirmação “Você deseja seguir com a desativação da sua conta?” e as opções “Sim” e “Não”
        When eu clico na opção “Sim”
        Then surgirá a mensagem "Caso deseje reativá-la basta fazer o login nessa conta" e as opções "Voltar" e "Continuar"
        When eu clico em "Continuar"
        Then eu sou levada para a página "Boas-vindas"
        And eu já não estarei logado na conta vinculada ao email “random@hotmail.com” e a senha "random1234" 

    Scenario: Alterar o nome cadastrado pelo cliente
        Given que estou logado como "cliente" com nome “Random”, email “random@hotmail.com” e senha "random1234"
        And estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Meus pedidos" e "Desativar conta"
        When eu clico na opção "Meus dados"
        Then eu sou direcionada para a página "Meus dados" 
        And nessa página são exibidos os campos "Nome", "E-mail" e "Senha" preenchidos com “Random”, “random@hotmail.com” e “**********”
        When eu clico no campo "Nome"
        Then eu vou para a página "Nome"
        And nela há o campo "Nome" preenchido com "Random" e a opção "Voltar"
        When eu clico nesse campo
        Then eu posso alterar o seu conteúdo
        And a opção "Salvar" irá aparecer ao lado da opção "Voltar"
        When eu insiro "Randinho" no campo "Nome"
        And clico em "Salvar"
        Then a opção "Salvar" irá desaparecer e o valor salvo no campo "Nome" será "Randinho"

    Scenario: Alterar o email cadastrado pelo cliente
        Given que estou logado como "cliente" com nome de usuário “Randinho”, email “random@hotmail.com” e senha "random1234"
        And estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Meus pedidos" e "Desativar conta"
        When eu clico na opção "Meus dados"
        Then eu sou direcionada para a página "Meus dados" 
        And nessa página são exibidos os campos "Nome", "E-mail" e "Senha" preenchidos com “Randinho”, “random@hotmail.com” e “**********”
        When eu clico no campo "E-mail"
        Then eu vou para a página "E-mail"
        And nela há o campo "E-mail" preenchido com "random@hotmail.com" e a opção "Voltar"
        When eu clico no campo "E-mail"
        Then eu posso alterar o seu conteúdo
        And a opção "Salvar" irá aparecer ao lado da opção "Voltar"
        When eu insiro "randinho@hotmail.com" no campo "E-mail"
        And clico na opção "Salvar"
        Then eu sou direcionado para a página "Confirmação de identidade"
        And nessa página é exibida a mensagem "Nós enviamos um código para o seu random@hotmail.com", o campo "Código", a opção "Reenviar" e a opção "Verificar"
        When eu preencho o campo "Código" com o código "9372", que recebi por e-mail
        And clico na opção "Verificar"
        Then eu irei retornar para a página "E-mail"
        And o valor exibido no campo "E-mail" será "randinho@hotmail.com"

    Scenario: Alterar a senha cadastrada pelo cliente
        Given que estou logado como "cliente" com nome “Randinho”, email “randinho@hotmail.com” e senha "random1234"
        And estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Meus pedidos" e "Desativar conta"
        When eu clico na opção "Meus dados"
        Then eu sou direcionada para a página "Meus dados" 
        And nessa página são exibidos os campos de "Nome", "E-mail" e "Senha" preenchidos com “Randinho”, “randinho@hotmail.com” e “**********”
        When eu clico no campo "Senha"
        Then eu vou para a página "Senha"
        And nela há o campo "Senha" preenchido com "**********" e a opção "Voltar"
        When eu clico nesse campo
        Then os campos "Senha" e "Confirme a senha" irão aparecer vazias
        And a opção "Salvar" irá surgir ao lado de "Voltar"
        When eu preencho ambos os campos com "randinho12345678"
        And clico em "Salvar"
        Then a opção "Salvar" irá desaparecer e a o valor exposto no campo "Senha" será "****************"

    Scenario: Alterar a senha cadastrada pelo cliente quando a nova senha não é replicada corretamente
        Given que estou logado como "cliente" com nome “Randinho”, email “randinho@hotmail.com” e senha "random1234"
        And estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Meus pedidos" e "Desativar conta"
        When eu clico na opção "Meus dados"
        Then eu sou direcionada para a página "Meus dados" 
        And nessa página são exibidos os campos "Nome", "E-mail" e "Senha" preenchidos com “Randinho”, “randinho@hotmail.com” e “**********”
        When eu clico no campo "Senha"
        Then eu vou para a página "Senha"
        And nela há o campo "Senha" preenchido com "**********" e a opção "Voltar"
        When eu clico nesse campo
        Then os campos "Senha" e "Confirme a senha" irão aparecer vazias
        And a opção "Salvar" irá surgir ao lado de "Voltar"
        When eu preencho o campo "Senha" com "randinho12345678" e a o campo "Confirme sua senha" com "randinho1234567"
        And clico em "Salvar"
        Then a mensagem "As senhas digitadas não coincidem" irá aparecer em vermelho abaixo do campo "Confirme a senha"





