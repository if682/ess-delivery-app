Feature: Gerência de Clientes
    As a um usuário do app de delivery
    I want poder criar uma conta no app, alterar informações fornecidas durante o cadastro e excluir a conta que criei
    So that assim eu possa ter uma identificação única, atualizada e a opção de desativá-la no site de delivery

    Scenario: Cadastrar um cliente que não possui email vinculado
        Given que não possuo conta no aplicativo
        And que meu nome e meu email principal são “Random” e “random@hotmail.com”
        And que estou na página inicial de cadastro do site
        And há uma caixa de texto para receber o meu nome nessa página
        When eu preencho essa caixa com "Random"
        And clico em continuar
        Then eu sou direcionado para uma página onde meu melhor e-mail é requisitado
        When eu preencho o campo de e-mail com “random@hotmail.com”
        And clico na opção continuar
        Then sou direcionado para outra página em que uma senha para conta é recebida e confirmada em duas caixas de texto, "senha" e "confirme sua senha"
        And a marcação de uma checkbox de corcondância com os termos e política de privacidade é requisitada
        When eu preencho os campos de texto, respectivamente, com "random1234" e "random1234"
        And marco a checkbox
        And clico em continuar
        Then eu sou direcionado para uma página de boas vindas que expõe a mensagem "Conta criada com sucesso"

    Scenario: Cadastrar um cliente que já possui email vinculado
        Given que já possuo conta no site vinculada ao email “random@hotmail.com”
        And que não estou logado nessa conta
        And que meu nome e meu email principal são “Random” e “random@hotmail.com”
        And que estou na página inicial de cadastro do site
        And há uma caixa de texto para receber o meu nome nessa página
        When eu preencho essa caixa com "Random"
        And clico em continuar
        Then eu sou direcionado para uma página onde meu melhor e-mail é requisitado
        When eu preencho o campo de e-mail com “random@hotmail.com”
        And clico na opção continuar
        Then eu sou redirecionado para a página de Login
        And a caixa de texto que recebe o e-mail já estará preenchido com "random@hotmail.com"

    Scenario: Desativar a conta de um cliente
        Given que estou logado com nome “Random”, email “random@hotmail.com” e senha "random1234"
        And que estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Pagamentos", "Endereços" e "Desativar conta"
        When eu clico na opção “Desativar conta”
        Then eu serei direcionado para a página "Desativar conta"
        And nela haverá a pergunta de confirmação “Você deseja seguir com a desativação da sua conta?” e as opções “Sim” e “Não”
        When eu clico na opção “Sim”
        Then surgirá a mensagem "Caso deseje reativá-la basta fazer o login nessa conta" e as opções "voltar" e "continuar"
        When eu clico em continuar
        Then eu sou levada para a página de boas vindas do site
        And eu já não estarei logado nessa minha conta

    Scenario: Alterar o nome cadastrado pelo cliente
        Given que estou logado com nome “Random”, email “random@hotmail.com” e senha "random1234"
        And estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Pagamentos", "Endereços" e "Desativar conta"
        When eu clico na opção "Meus dados"
        Then eu sou direcionada para a página "Meus dados" 
        And nessa página são exibidos os campos de nome, email e senha preenchidos com “Random” e “random@hotmail.com” e o campo de senha com “**********”
        When eu clico no campo de nome
        Then eu vou para a página "Nome"
        And nela há uma caixa de texto preenchida com "Random" e a opção "Voltar"
        When eu clico na caixa de texto
        Then eu posso alterar o conteúdo do campo "Nome"
        And a opção "Salvar" irá aparecer ao lado de voltar
        When eu insiro "Randinho" na caixa de texto
        And clico em salvar
        Then a opção de salvar irá desaparecer e a o valor salvo no campo nome será "Randinho"

    Scenario: Alterar o email cadastrado pelo cliente
        Given que estou logado com nome de usuário “Randinho”, email “random@hotmail.com” e senha "random1234"
        And estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Pagamentos", "Endereços" e "Desativar conta"
        When eu clico na opção "Meus dados"
        Then eu sou direcionada para a página "Meus dados" 
        And nessa página são exibidos os campos de nome, email e senha preenchidos com “Randinho” e “random@hotmail.com” e o campo de senha com “**********”
        When eu clico no campo de e-mail
        Then eu vou para a página "E-mail"
        And nela há uma caixa de texto preenchida com "random@hotmail.com" e a opção "Voltar"
        When eu clico na caixa de texto
        Then eu posso alterar o conteúdo do campo "e-mail"
        And a opção "Salvar" irá aparecer ao lado de voltar
        When eu insiro "randinho@hotmail.com" na caixa de texto
        And clico na opção salvar
        Then eu sou direcionado para a página de confirmação de identidade
        And nessa página é exibida a mensagem "Nós enviamos um código para o seu random@hotmail.com", um campo que recebe esse código, a opção de reenvio do código e a opção "Verificar"
        When eu preencho o campo com o código "9372", que recebi por e-mail
        And clico na opção Verificar
        Then eu irei retornar para a página "E-mail"
        And o valor exibido no campo e-mail será "randinho@hotmail.com"

    Scenario: Alterar a senha cadastrada pelo cliente
        Given que estou logado com nome “Randinho”, email “randinho@hotmail.com” e senha "random1234"
        And estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Pagamentos", "Endereços" e "Desativar conta"
        When eu clico na opção "Meus dados"
        Then eu sou direcionada para a página "Meus dados" 
        And nessa página são exibidos os campos de nome, email e senha preenchidos com “Randinho” e “randinho@hotmail.com” e o campo de senha com “**********”
        When eu clico no campo de senha
        Then eu vou para a página "Senha"
        And nela há uma caixa de texto preenchida com "**********" e a opção "Voltar"
        When eu clico na caixa de texto
        Then as caixas de texto "senha" e "confirme a senha" irão aparecer vazias
        And a opção "Salvar" irá surgir ao lado de "Voltar"
        When eu preencho ambas as caixas com "randinho12345678"
        And clico em salvar
        Then a opção de salvar irá desaparecer e a o valor salvo no campo senha será "****************"

    Scenario: Alterar a senha cadastrada pelo cliente quando a nova senha não é replicada corretamente
        Given que estou logado com nome “Randinho”, email “randinho@hotmail.com” e senha "random1234"
        And estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Pagamentos", "Endereços" e "Desativar conta"
        When eu clico na opção "Meus dados"
        Then eu sou direcionada para a página "Meus dados" 
        And nessa página são exibidos os campos de nome, email e senha preenchidos com “Randinho” e “randinho@hotmail.com” e o campo de senha com “**********”
        When eu clico no campo de senha
        Then eu vou para a página "Senha"
        And nela há uma caixa de texto preenchida com "**********" e a opção "Voltar"
        When eu clico na caixa de texto
        Then as caixas de texto "senha" e "confirme a senha" irão aparecer vazias
        And a opção "Salvar" irá surgir ao lado de "Voltar"
        When eu preencho a primeira caixa com "randinho12345678" e a segunda com "randinho1234567"
        And clico em salvar
        Then a mensagem "As senhas digitadas não coincidem" irá aparecer em vermelho abaixo do campo "Confirme a senha"





