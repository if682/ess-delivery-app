Feature: Cadastro e manutenção de clientes (inserir, atualizar e remover)
Como um usuário do app de delivery
Eu quero poder criar uma conta no app, alterar informações fornecidas durante o cadastro e excluir a conta que criei
Para que assim eu possa ter uma identificação única, atualizada e a opção de cancelá-la

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

Cenário: Remover a conta de um cliente

Dado que estou logado com nome de usuário “Cliente” e email “cliente@hotmail.com”

E estou na página “Minha conta”

Quando eu clico na opção “desativar conta”

Então surgirá a pergunta de confirmação “Você tem certeza que quer desativar a sua conta ?” e as opções “Sim” e “Não”

Quando eu clico na opção “Sim”

Então minha conta é desativada

E eu sou redirecionada para a página inicial do aplicativo



Cenário: Alterar o nome cadastrado pelo cliente

Dado que estou logado com nome de usuário “Cliente” e email “cliente@hotmail.com”

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

Cenário: Remover a conta de um cliente

Dado que estou logado com nome de usuário “Cliente” e email “cliente@hotmail.com”

E estou na página “Minha conta”

Quando eu clico na opção “desativar conta”

Então surgirá a pergunta de confirmação “Você tem certeza que quer desativar a sua conta ?” e as opções “Sim” e “Não”

Quando eu clico na opção “Sim”

Então minha conta é desativada

E eu sou redirecionada para a página inicial do aplicativo
