Cenário de GUI


Feature: Cancelamento de pedidos
In order to Eu possa gerenciar melhor meus pedidos
As an Usuário/Cliente
Eu preciso poder cancelar meus pedidos


Scenario: Cancelar pedido logado porém sem digitar senha de confirmação.
Given Eu estou na página “Meus pedidos” logado como usuário “Kennedy” e visualizando meu “Histórico de pedidos”
And o pedido "camisa polo" existe no “Histórico de pedidos”
When Eu tento cancelar o pedido “camisa polo”
And eu não preencho o a senha e tento confirmar o cancelamento
Then aparece a mensagem de erro “Você precisa preencher o campo com sua senha”.
And a senha é requisitada


Scenario: Cancelar pedido logado porém digitando senha errada
Given Eu estou na página “Meus pedidos” logado como usuário “Kennedy” e visualizando meu “Histórico de pedidos”
And o pedido "camisa polo" existe no “Histórico de pedidos”
When Eu tento cancelar o pedido “camisa polo”
And preencho com a senha “Eu odeio ESS” e tento confirmar o cancelamento
Then aparece a mensagem de erro “Senha errada”.
And a senha é requisitada


Scenario: Cancelar pedido logado porém digitando senha certa
Given Eu estou na página “Meus pedidos” logado como usuário “Kennedy” e visualizando meu “Histórico de pedidos”
And o pedido "camisa polo" existe no “Histórico de pedidos”
When Eu tento cancelar o pedido “camisa polo”
And preencho com a senha “Eu amo ESS” e tento confirmar o cancelamento
Then o pedido “camisa polo” foi excluído e não aparece mais no "Histórico de pedidos".
And Aparece a mensagem de confirmação “Pedido "camisa polo" foi cancelado com sucesso”
