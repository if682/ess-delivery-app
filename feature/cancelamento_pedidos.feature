Cenário de GUI


Feature: Cancelamento de pedidos
In order to Eu possa gerenciar melhor meus pedidos
As an Usuário/Cliente
Eu preciso poder cancelar meus pedidos


Scenario: Cancelar pedido logado porém sem digitar senha de confirmação.
Given Eu estou na página “Meus pedidos” logado como usuário “Kennedy” e visualizando meu “Histórico de pedidos”
And o pedido "143" existe no “Histórico de pedidos”
When Eu tento cancelar o pedido “143”
And eu não preencho o a senha e tento confirmar o cancelamento
Then aparece a mensagem de erro “Você precisa preencher o campo com sua senha. Tente Novamente!”.
And a senha é requisitada


Scenario: Cancelar pedido logado porém digitando senha errada
Given Eu estou na página “Meus pedidos” logado como usuário “Kennedy” e visualizando meu “Histórico de pedidos”
And o pedido "143" existe no “Histórico de pedidos”
When Eu tento cancelar o pedido “143”
And preencho com a senha “Eu odeio ESS” e tento confirmar o cancelamento
Then aparece a mensagem de erro “Senha errada. Tente Novamente!”.
And a senha é requisitada


Scenario: Cancelar pedido logado porém digitando senha certa
Given Eu estou na página “Meus pedidos” logado como usuário “Kennedy” e visualizando meu “Histórico de pedidos”
And o pedido "143" existe no “Histórico de pedidos”
When Eu tento cancelar o pedido “143”
And preencho com a senha “Eu amo ESS” e tento confirmar o cancelamento
Then o pedido “143” foi excluído e não aparece mais no "Histórico de pedidos".
And Aparece a mensagem de confirmação “Pedido "143" foi cancelado com sucesso”
