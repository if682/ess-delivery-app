Feature: Notificação

   Os usuários receberam notificação de confirmação do seu pedido via e-mail. Além da possibilidade de visualizar o históricos de notificações.

Scenario: Enviar notificação de confirmação de pedido para e-mail - Sucesso
Given que o usuário "31" está logado no sistema e realizou um pedido com sucesso
And o endereço de e-mail “31@gmail.com” fornecido por ele é válido
Then uma notificação de confirmação de pedido deve ser enviada para o endereço de e-mail fornecido pelo usuário
And o usuário deve ser capaz de visualizar a notificação na caixa de entrada de seu e-mail

Scenario: Enviar notificação de confirmação de pedido para e-mail inválido - Falha
Given que o usuário "31" está logado no sistema e realizou um pedido com sucesso
And o endereço de e-mail “i@i.z” fornecido pelo usuário é inválido
Then não deve ser enviada nenhuma notificação de confirmação de pedido para o endereço de e-mail fornecido pelo usuário 
And o sistema deve oferecer a opção para o usuário escolher um novo endereço de e-mail ou baixar o comprovante do pedido.

Scenario: Redirecionar o usuário para o histórico de pedidos, a partir do link de notificação de confirmação do pedido no e-mail - Usuário logado
Given que o usuário "31" recebeu uma notificação de confirmação do pedido “201” no e-mail
And o usuário está logado no sistema
When o usuário tentar acessar o link de confirmação de pedido no e-mail
Then o usuário é redirecionado para a página de histórico de pedidos
And é exibida a lista de seus pedidos

Scenario: Redirecionar o usuário para o histórico de pedidos, a partir do link de notificação de confirmação do pedido no e-mail - Usuário deslogado
Given que o usuário "31" recebeu uma notificação de confirmação do pedido “201” 
And o usuário não está logado no sistema
When o usuário tentar acessar o link de confirmação de pedido no e-mail
Then o usuário é redirecionado para a página de login
And é solicitado que o usuário faça o login antes de exibir o histórico de pedidos
Then após o login, o usuário é redirecionado para a página de histórico de pedidos
And é exibida a lista de seus pedidos

Scenario: Visualizar a lista de notificações de confirmação de pedido
Given que o usuário "31" está logado no sistema na página home
When ele tentar acessar a página de notificações
Then o usuário está na página de notificações
And o sistema deve exibir uma lista de todas as notificações de confirmação de pedido

Scenario: Visualizar a lista de notificações de confirmação de pedido - Vazia
Given que o usuário "31" está logado no sistema na página home
And não há notificações de confirmação de pedido disponíveis
When ele acessa a página de notificações
Then o usuário está na página de notificações
And o sistema deve exibir uma mensagem informando que não há notificações disponíveis

Scenario: Visualizar a lista de notificações de confirmação de pedido filtrando por data - Sucesso
Given que o usuário "31" está logado no sistema na página de notificações e há notificações de confirmação de pedido disponíveis
When ele seleciona a data "12/12/2023" no filtro de data
Then o sistema deve exibir uma lista apenas das notificações de confirmação de pedido correspondentes à data selecionada

Scenario: Clicar em item de notificação leva ao pedido
Given que o usuário "31" está logado no sistema na página de notificações e há notificações de confirmação de pedido disponíveis
When ele clica na notificação do pedido “201”
Then o usuário é redirecionado para a página de detalhes do pedido correspondente
