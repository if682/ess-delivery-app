Feature: Cadastro e manutenção de clientes (inserir, atualizar e remover)
As a um usuário do app de delivery
I want poder criar uma conta no app, alterar informações fornecidas durante o cadastro e excluir a conta que criei
So that assim eu possa ter uma identificação única, atualizada e a opção de cancelá-la

Scenario: Cadastrar um cliente que não possui email vinculado
Given que não possuo conta no aplicativo
And que meu nome e meu email principal são “Cliente” e “cliente@hotmail.com”
And que estou na página inicial do aplicativo
When eu clico na opção “Cadastre-se”
Then sou direcionado para a página de cadastro
And aparecerão os campos de nome, email e senha para serem preenchidos
When eu preencho os campos, respectivamente, com “Cliente”, “cliente@hotmail.com” e “cliente123”
And clico na opção “Criar conta”
Then irá aparecer a mensagem “Conta criada com sucesso”

Scenario: Remover a conta de um cliente
Given que estou logado com nome de usuário “Cliente”, email “cliente@hotmail.com” e senha "cliente123"
And estou na página “Minha conta”
When eu clico na opção “desativar conta”
Then surgirá a pergunta de confirmação “Você tem certeza que quer desativar a sua conta ?” e as opções “Sim” e “Não”
When eu clico na opção “Sim”
Then minha conta é desativada
And eu sou redirecionada para a página inicial do aplicativo

Scenario: Alterar o nome cadastrado pelo cliente
Given que estou logado com nome de usuário “Cliente”, email “cliente@hotmail.com” e senha "cliente123"
And estou na página “Minha conta”
And nessa página são exibidos os campos de nome e email preenchidos com “Cliente” e “cliente@hotmail.com” e o campo de senha com “**********”
When eu clico na opção “Alterar dados”
Then minha senha é requisitada
And eu preencho a caixa de entrada com “cliente123”
When eu clico na opção “Avançar”
Then os campos dados dos campos nome, senha e email estarão expostos
And poderão ser alterados
Then eu modifico o meu nome de “Cliente” para “Cleyton”
When eu clico na opção “salvar alterações”
Then irá aparecer uma mensagem de confirmação “Nome alterado com sucesso”
And retornarei para a página “Minha conta”
And o nome exibido no campo de nome será “Cleyton”

Scenario: Alterar a senha cadastrada pelo cliente
Given que estou logado com nome de usuário “Cliente”, email “cliente@hotmail.com” e senha "cliente123"
And estou na página “Minha conta”
And nessa página são exibidos os campos de nome e email preenchidos com “Cliente” e “cliente@hotmail.com” e o campo de senha com “**********”
When eu clico na opção “Alterar dados”
Then minha senha é requisitada
And eu preencho a caixa de entrada com “cliente123”
When eu clico na opção “Avançar”
Then os campos dados dos campos nome, senha e email estarão expostos
And poderão ser alterados
Then eu modifico a minha senha de “cliente123” para “cliente7777”
And aparecerá o campo de confirmação para repetir a senha
When eu insiro "cliente777" na caixa de entrada
And clico na opção “salvar alterações”
Then irá aparecer uma mensagem de confirmação “Senha alterada com sucesso”
And retornarei para a página “Minha conta”
And o dado exibido no campo da senha será “***********”

Scenario: Cadastrar um cliente que já possui email vinculado
Given que já possuo conta no aplicativo vinculada ao email “cliente@hotmail.com”
And não estou logado nessa conta
And que meu nome e meu email principal são “Cliente” e “cliente@hotmail.com”
And que estou na página inicial do aplicativo
When eu clico na opção “Cadastre-se”
Then sou direcionado para a página de cadastro
And aparecerão os campos de nome, email e senha para serem preenchidos
When eu preencho os campos, respectivamente, com “Cliente”, “cliente@hotmail.com” e “cliente123”
And clico na opção “Criar conta”
Then irá aparecer a mensagem “Esse email já está sendo utilizado”
And voltarei a página de cadastro com os campos ainda preenchidos e o campo do email em vermelho com um asterisco ao lado

Scenario: Alterar o nome cadastrado pelo cliente que esqueceu a senha
Given que estou logado com nome de usuário “Cliente”, email “cliente@hotmail.com” e senha "cliente123"
And estou na página “Minha conta”
And nessa página são exibidos os campos de nome e email preenchidos com “Cliente” e “cliente@hotmail.com” e o campo de senha com “**********”
When eu clico na opção “Alterar dados”
Then minha senha é requisitada
And eu preencho a caixa de entrada com “123”
When eu clico na opção “Avançar”
Then a mensagem de erro "Senha incorreta" é exposta
And sou redirecionado para a página "Minha conta"
And percebo que o nome "Cliente" permanece inalterado

Scenario: Alterar o email cadastrado pelo cliente
Given que estou logado com nome de usuário “Cliente”, email “cliente@hotmail.com” e senha "cliente123"
And estou na página “Minha conta”
And nessa página são exibidos os campos de nome e email preenchidos com “Cliente” e “cliente@hotmail.com” e o campo de senha com “**********”
When eu clico na opção “Alterar dados”
Then minha senha é requisitada
And eu preencho a caixa de entrada com “cliente123”
When eu clico na opção “Avançar”
Then os campos dados dos campos nome, senha e email estarão expostos
And poderão ser alterados
Then eu modifico o meu email para "cliente@hotmail.com" para "cliente1@hotmail.com"
And clico na opção "Mandar email de confirmação"
When eu recebo o email de confirmação em "cliente1@hotmail.com"
And aperto no botão "confirmar email"
Then a opção "salvar alterações" é liberada
When eu clico na opção "salvar alterações"
Then irá aparecer a mensagem "Email alterado com sucesso"
And serei redirecionado para a página "Minha conta"
And o dado exibido no campo de email, de nome e senha será "cliente1@hotmail.com", "Cliente" e “**********”

Scenario: Alterar a senha cadastrada pelo cliente quando a nova senha não é replicada corretamente
Given que estou logado com nome de usuário “Cliente”, email “cliente@hotmail.com” e senha "cliente123"
And estou na página “Minha conta”
And nessa página são exibidos os campos de nome e email preenchidos com “Cliente” e “cliente@hotmail.com” e o campo de senha com “**********”
When eu clico na opção “Alterar dados”
Then minha senha é requisitada
And eu preencho a caixa de entrada com “cliente123”
When eu clico na opção “Avançar”
Then os campos dados dos campos nome, senha e email estarão expostos
And poderão ser alterados
Then eu modifico a minha senha de “cliente123” para “cliente7777”
And aparecerá o campo de confirmação para repetir a senha
When eu insiro "cliente77" na caixa de entrada
And clico na opção “salvar alterações”
Then irá aparecer uma mensagem de erro “As senhas são diferentes”
And retornarei para a página de alteração de senha





