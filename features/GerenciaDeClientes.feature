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
        Then sou direcionado para a página "Confirmação de e-mail"
        And em "Confirmação de e-mail" é exibida a mensagem "Nós enviamos um código para random@hotmail.com"
        And também o campo "Código", a opção "Reenviar" e a opção "Verificar"
        When eu preencho o campo "Código" com o código "1111", que recebi por e-mail
        And clico na opção "Verificar"
        Then sou direcionado para a página "Cadastro de senha"
        And nela há os campos "Senha" e "Confirme sua senha"
        And a checkbox vinculada ao texto "Li e concordo com os termos e políticas de privacidade"
        When eu preencho os campos "Senha" e "Confirme sua senha", respectivamente, com "random1234" e "random1234"
        And marco a checkbox vinculada ao texto "Li e concordo com os termos e políticas de privacidade"
        And clico em "Continuar"
        Then eu sou direcionado para a página "Cadastro finalizado" a qual possui a mensagem "Conta criada com sucesso" e o botão "Peça já"

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
        Then um pop-up irá surgir na tela
        And nele haverá a pergunta de confirmação “Deseja mesmo desativar sua conta ?” e as opções “Confirmar” e “Cancelar”
        When eu clico na opção “Confirmar”
        Then eu sou levada para a página "Login"
        And eu já não estarei logado na conta vinculada ao email “random@hotmail.com” e a senha "random1234" 

    Scenario: Alterar o nome cadastrado pelo cliente
        Given que estou logado como "cliente" com nome “Random”, email “random@hotmail.com” e senha "random1234"
        And estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Meus pedidos" e "Desativar conta"
        When eu clico na opção "Meus dados"
        Then eu serei direcionado para a página "Meus dados"
        And em  "Meus dados" são exibidos os campos "Nome", "E-mail" e "Senha" preenchidos com “Random”, “random@hotmail.com” e “**********”
        And três botões com o título "Atualizar" vinculados a cada campo de texto
        When eu clico no botão "Atualizar" vinculado ao campo "Nome"
        Then o popup com título "Alterar nome" é exposto na tela
        And ele possui uma caixa de texto com placeholder "Novo nome" e os botões "Salvar" e "Cancelar"
        When eu insiro "Randinho" no campo "Novo nome"
        And clico em "Salvar"
        Then o popup "Alterar nome" será fechado e o valor no campo "Nome" será atualizada para "Randinho"

    Scenario: Alterar o email cadastrado pelo cliente
        Given que estou logado como "cliente" com nome de usuário “Randinho”, email “random@hotmail.com” e senha "random1234"
        And estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Meus pedidos" e "Desativar conta"
        When eu clico na opção "Meus dados"
        Then eu serei direcionado para a página "Meus dados"
        And em  "Meus dados"  são exibidos os campos "Nome", "E-mail" e "Senha" preenchidos com “Randinho”, “random@hotmail.com” e “**********”
        And três botões com o título "Atualizar" vinculados a cada campo de texto
        When eu clico no botão "Atualizar" vinculado ao campo "E-mail"
        Then o popup com título "Alterar e-mail" é exposto na tela
        And ele exibe o texto "Para realizar a troca do endereço de e-mail vinculado à conta, você receberá um código no seu e-mail atual."
        And uma caixa de texto com placeholder "Novo e-mail", 4 caixas de texto identificadas pelos id "first_digit", "second_digit", "third_digit" e "fourth_digit"
        And os botões "Salvar" e "Cancelar"
        When eu preencho as 4 caixas de texto identificadas por "first_digit", "second_digit", "third_digit" e "fourth_digit" com os código de verificão "1111", que recebi por e-mail
        And preencho o campo "Novo e-mail" com "randinho@hotmail.com"
        And clico na opção "Salvar"
        Then o popup "Alterar e-mail" será fechado
        And o valor exibido no campo "E-mail" será "randinho@hotmail.com"

    Scenario: Alterar a senha cadastrada pelo cliente
        Given que estou logado como "cliente" com nome “Randinho”, email “randinho@hotmail.com” e senha "random1234"
        And estou na página “Minha conta”
        And que posso acessar as opções "Meus dados", "Meus pedidos" e "Desativar conta"
        When eu clico na opção "Meus dados"
        Then eu serei direcionado para a página "Meus dados"
        And em "Meus dados" são exibidos os campos de "Nome", "E-mail" e "Senha" preenchidos com “Randinho”, “randinho@hotmail.com” e “**********”
        And três botões com o título "Atualizar" vinculados a cada campo de texto
        When eu clico no botão "Atualizar" vinculado ao campo "Senha"
        Then o popup com o título "Alterar senha" é aberto
        And nele há o texto "Digite sua senha atual e logo em seguida a nova senha", duas caixas de texto com placeholders "Senha atual" e "Nova senha"
        And os botões "Salvar" e "Cancelar"
        When eu preencho os campos "Senha atual" com "random1234" e "Senha" com "randinho12345678"
        And clico em "Salvar"
        Then o popupt "Alterar senha" será fechado e o valor exposto no campo "Senha" será "****************"

    





