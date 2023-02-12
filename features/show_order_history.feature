Feature: Exibir histórico de pedidos do usuário

  Os usuários poderão visualizar todo o histórico de pedidos ativos, concluídos e cancelados. Além da possibilidade de filtrá-los por nome, status, código do pedido e  data.

Scenario: Visualizar histórico de pedidos
Given que o usuário “31” esteja logado no sistema na página home
When o usuário acessa a página de histórico de pedidos
Then a lista de todos os pedidos ativos, concluídos e cancelados deve ser exibida para o usuário
And o usuário deve ter a opção de filtrar a lista por nome, status, código do pedido, data.

Scenario: Visualizar histórico de pedidos - Lista vazia
Given que o usuário “31” está logado no sistema na página home
When o usuário acessa a página de histórico de pedidos
And não há pedidos no histórico do usuário
Then o sistema deve exibir a mensagem "Nenhum pedido encontrado"
And a lista de histórico de pedidos deve estar vazia

Scenario: Filtrar histórico de pedidos por número do pedido
Given que o usuário “31” está logado no sistema na página de histórico de pedido
And o pedido “201” pertence ao usuário
And o usuário seleciona a opção de filtrar por número do pedido
And informar o número do pedido “201” 
Then o sistema deve retornar apenas o pedido correspondente informado
And o usuário consegue visualizar o pedido desejado

Scenario: Filtrar histórico de pedidos por data
Given que o usuário “31” está logado no sistema na página de histórico de pedido
And escolhe a opção de filtrar por data
And escolhe o intervalo de "12/01/2022" a "16/01/2022"
Then o sistema deve retornar somente aos pedidos do usuário dentro desse intervalo de datas
And o usuário consegue visualizar os pedidos nesse intervalo de datas

Scenario: Filtrar histórico de pedidos por múltiplos status
Given que o usuário “31” está logado no sistema na página de histórico de pedido
And escolhe a opção de filtrar por status
And seleciona os status “ativo” e "concluído”
Then o sistema deve retornar somente aos pedidos do usuário com os status selecionados
And o usuário consegue visualizar os pedidos com esses status

Scenario: Buscar histórico de pedidos por nome do produto
Given que o usuário “31” está logado no sistema na página de histórico de pedido
And o usuário seleciona a opção de filtrar por nome do produto
And informar o nome do produto “Camisa” 
Then o sistema deve retornar somente os pedidos do usuário que tenha produtos com o nome passado
And o usuário consegue visualizar os pedidos que contenham produtos com esse nome

Scenario: Limpar filtros
Given que o usuário “31” está logado no sistema na página de histórico de pedido
And que ele já aplicou o filtro de datas no intervalo de "12/01/2022" a "16/01/2022"
When ele clica no botão "Limpar filtros"
Then o intervalo de datas é removido 
And o usuário consegue visualizar todos os pedidos.

Scenario: Clicar em item de pedido
Given que o usuário “31” está logado no sistema na página de histórico de pedido
And o pedido “201” pertence ao usuário
When o usuário tenta acessar o pedido “201” na lista de histórico de pedidos
Then o sistema deve redirecionar o usuário para os detalhes do pedido
And o usuário consegue visualizar detalhes do pedido


