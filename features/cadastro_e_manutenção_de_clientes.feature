Feature: Cadastro e manutenção de clientes (inserir, atualizar e remover)
Como um usuário do app de delivery
Eu quero poder criar uma conta no app, alterar informações fornecidas durante o cadastro e excluir a conta que criei
Para que assim eu possa ter uma identificação única, atualizada e a opção de cancelá-la

-----
Cenário: Cadastrar um cliente que não possui email vinculado

Dado que não possuo conta no aplicativo

E que meu nome e meu email principal são “Cliente” e “cliente@hotmail.com”

E que estou na página inicial do aplicativo

Quando eu clico na opção “Cadastre-se”

Então sou direcionado para a página de cadastro

E aparecerão os campos de nome, email e senha para serem preenchidos

Quando eu preencho os campos, respectivamente, com “Cliente”, “cliente@hotmail.com” e “cliente123”

E clico na opção “Criar conta”

Então irá aparecer a mensagem “Conta criada com sucesso”


------
Cenário: Remover a conta de um cliente

Dado que estou logado com nome de usuário “Cliente”, email “cliente@hotmail.com” e senha "cliente123"

E estou na página “Minha conta”

Quando eu clico na opção “desativar conta”

Então surgirá a pergunta de confirmação “Você tem certeza que quer desativar a sua conta ?” e as opções “Sim” e “Não”

Quando eu clico na opção “Sim”

Então minha conta é desativada

E eu sou redirecionada para a página inicial do aplicativo

--------
Cenário: Alterar o nome cadastrado pelo cliente

Dado que estou logado com nome de usuário “Cliente”, email “cliente@hotmail.com” e senha "cliente123"

E estou na página “Minha conta”

E nessa página são exibidos os campos de nome e email preenchidos com “Cliente” e “cliente@hotmail.com” e o campo de senha com “**********”

Quando eu clico na opção “Alterar dados”

Então minha senha é requisitada

E eu preencho a caixa de entrada com “cliente123”

Quando eu clico na opção “Avançar”

Então os campos dados dos campos nome, senha e email estarão expostos

E poderão ser alterados

Então eu modifico o meu nome de “Cliente” para “Cleyton”

Quando eu clico na opção “salvar alterações”

Então irá aparecer uma mensagem de confirmação “Nome alterado com sucesso”

E retornarei para a página “Minha conta”

E o nome exibido no campo de nome será “Cleyton”

-------
Cenário: Alterar a senha cadastrada pelo cliente

Dado que estou logado com nome de usuário “Cliente”, email “cliente@hotmail.com” e senha "cliente123"

E estou na página “Minha conta”

E nessa página são exibidos os campos de nome e email preenchidos com “Cliente” e “cliente@hotmail.com” e o campo de senha com “**********”

Quando eu clico na opção “Alterar dados”

Então minha senha é requisitada

E eu preencho a caixa de entrada com “cliente123”

Quando eu clico na opção “Avançar”

Então os campos dados dos campos nome, senha e email estarão expostos

E poderão ser alterados

Então eu modifico a minha senha de “cliente123” para “cliente7777”

E aparecerá o campo de confirmação para repetir a senha

Quando eu insiro "cliente777" na caixa de entrada

E clico na opção “salvar alterações”

Então irá aparecer uma mensagem de confirmação “Senha alterada com sucesso”

E retornarei para a página “Minha conta”

E o dado exibido no campo da senha será “***********”

-------
Cenário: Remover a conta de um cliente

Dado que estou logado com nome de usuário “Cliente” e email “cliente@hotmail.com”

E estou na página “Minha conta”

Quando eu clico na opção “desativar conta”

Então surgirá a pergunta de confirmação “Você tem certeza que quer desativar a sua conta ?” e as opções “Sim” e “Não”

Quando eu clico na opção “Sim”

Então minha conta é desativada

E eu sou redirecionada para a página inicial do aplicativo

--------
Cenário: Cadastrar um cliente que já possui email vinculado

Dado que já possuo conta no aplicativo vinculada ao email “cliente@hotmail.com”

E não estou logado nessa conta

E que meu nome e meu email principal são “Cliente” e “cliente@hotmail.com”

E que estou na página inicial do aplicativo

Quando eu clico na opção “Cadastre-se”

Então sou direcionado para a página de cadastro

E aparecerão os campos de nome, email e senha para serem preenchidos

Quando eu preencho os campos, respectivamente, com “Cliente”, “cliente@hotmail.com” e “cliente123”

E clico na opção “Criar conta”

Então irá aparecer a mensagem “Esse email já está sendo utilizado”

E voltarei a página de cadastro com os campos ainda preenchidos e o campo do email em vermelho com um asterisco ao lado

-------
Cenário: Alterar o nome cadastrado pelo cliente que esqueceu a senha

Dado que estou logado com nome de usuário “Cliente”, email “cliente@hotmail.com” e senha "cliente123"

E estou na página “Minha conta”

E nessa página são exibidos os campos de nome e email preenchidos com “Cliente” e “cliente@hotmail.com” e o campo de senha com “**********”

Quando eu clico na opção “Alterar dados”

Então minha senha é requisitada

E eu preencho a caixa de entrada com “123”

Quando eu clico na opção “Avançar”

Então a mensagem de erro "Senha incorreta" é exposta

E sou redirecionado para a página "Minha conta"

--------

Cenário: Alterar o email cadastrado pelo cliente

Dado que estou logado com nome de usuário “Cliente”, email “cliente@hotmail.com” e senha "cliente123"

E estou na página “Minha conta”

E nessa página são exibidos os campos de nome e email preenchidos com “Cliente” e “cliente@hotmail.com” e o campo de senha com “**********”

Quando eu clico na opção “Alterar dados”

Então minha senha é requisitada

E eu preencho a caixa de entrada com “cliente123”

Quando eu clico na opção “Avançar”

Então os campos dados dos campos nome, senha e email estarão expostos

E poderão ser alterados

Então eu modifico o meu email para "cliente@hotmail.com" para "cliente1@hotmail.com"

E clico na opção "Mandar email de confirmação"

Quando eu recebo o email de confirmação em "cliente1@hotmail.com"

E aperto no botão "confirmar email"

Então a opção "salvar alterações" é liberada

Quando eu clico na opção "salvar alterações"

Então irá aparecer a mensagem "Email alterado com sucesso"

E serei redirecionado para a página "Minha conta"

E o dado exibido no campo de email será "cliente1@hotmail.com"



