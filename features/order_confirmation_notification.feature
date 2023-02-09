Feature: Notificação confirmação de pedido

   Os usuários receberam notificação de confirmação do seu pedido via e-mail. Além da possibilidade de visualizar o históricos de notificações.

Scenario: Enviar notificação de confirmação de pedido para e-mail - Sucesso
Given que o usuário está logado no sistema e realizou um pedido
And o endereço de e-mail fornecido pelo usuário é válido
When o sistema processa o pedido com sucesso
Then uma notificação de confirmação de pedido deve ser enviada para o endereço de e-mail fornecido pelo usuário
And o usuário deve ser capaz de visualizar a notificação na caixa de entrada de seu e-mail

Scenario: Enviar notificação de confirmação de pedido para e-mail inválido - Falha
Given que o usuário está logado no sistema e realizou um pedido
And o endereço de e-mail fornecido pelo usuário é inválido
When o sistema processa o pedido com sucesso
Then não deve ser enviada nenhuma notificação de confirmação de pedido para o endereço de e-mail fornecido pelo usuário
And o usuário não deve ser capaz de visualizar a notificação na caixa de entrada de seu e-mail


Scenario: Redirecionar o usuário para o histórico de pedidos, a partir do link de notificação de confirmação do pedido no e-mail - Usuário logado
Given que o usuário está logado no sistema
When ele recebe um e-mail de confirmação de seu pedido
And ele clica no link de confirmação de pedido no e-mail
Then o sistema deve direcioná-lo para a página de histórico de pedidos
And exibe uma lista de seus pedidos anteriores

Scenario: Redirecionar o usuário para o histórico de pedidos, a partir do link de notificação de confirmação do pedido no e-mail - Usuário deslogado
Given que o usuário não está logado no sistema
When ele recebe uma notificação de confirmação de pedido por e-mail
And clica no link de confirmação de pedido no e-mail
Then o sistema deve direcioná-lo para a página de login
And solicitar que o usuário faça o login antes de exibir o histórico de pedidos
Then o sistema deve direcioná-lo para a página de histórico de pedidos
And exibi uma lista de seus pedidos anteriores


Scenario: Redirecionar o usuário para o histórico de pedidos, a partir do link de notificação de confirmação do pedido no e-mail - Link expirado
Given que o usuário recebeu uma notificação de confirmação de pedido por e-mail
And o tempo de validade do link expirou
When o usuário clica no link de confirmação de pedido no e-mail
Then o sistema deve exibir uma mensagem de erro
And informar ao usuário que o link já não é mais válido

Scenario: Visualizar a lista de notificações de confirmação de pedido
Given que o usuário está logado no sistema
When ele acessa a página de notificações
Then o sistema deve exibir uma lista de todas as notificações de confirmação de pedido

Scenario: Visualizar a lista de notificações de confirmação de pedido - Vazia
Given que o usuário está logado no sistema
And não há notificações de confirmação de pedido disponíveis
When ele acessa a página de notificações
Then o sistema deve exibir uma mensagem informando que não há notificações disponíveis

Scenario: Visualizar a lista de notificações de confirmação de pedido filtrando por data - Sucesso
Given que o usuário está logado no sistema
And há notificações de confirmação de pedido disponíveis
When ele acessa a página de notificações e seleciona a data "12/12/2023" no filtro de data
Then o sistema deve exibir uma lista apenas das notificações de confirmação de pedido correspondentes à data selecionada

Scenario: Visualizar a lista de notificações de confirmação de pedido filtrando por data - Falha
Given que o usuário está logado no sistema
And há notificações de confirmação de pedido disponíveis
When ele acessa a página de notificações e seleciona a data "20/23/2023" no filtro de data
Then o sistema deve exibir uma mensagem de erro indicando que a data selecionada é inválida

Scenario: Clicar em item de notificação leva ao pedido
Given que o usuário está logado no sistema
And há notificações de confirmação de pedido disponíveis
When ele clica em um item da lista de notificações
Then o sistema deve direcioná-lo para a página de detalhes do pedido correspondente
