Feature: Exibir histórico de pedidos do usuário

   Os usuários poderão visualizar todo o histórico de pedidos ativos/concluídos e cancelados. Além da possibilidade de filtrá-los por nome, status, código do pedido, etc.

Scenario: Visualizar histórico de pedidos
Given que o usuário esteja logado na aplicação
When o usuário acessa a página de "Histórico de Pedidos"
Then a lista de todos os pedidos ativos, concluídos e cancelados deve ser exibida para o usuário
And o usuário deve ter a opção de filtrar a lista por nome, status, código do pedido, data, etc.

Scenario: Visualizar histórico de pedidos - Lista vazia
Given que o usuário está logado no sistema
When o usuário acessa a página de "Histórico de Pedidos"
And não há pedidos no histórico do usuário
Then o sistema deve exibir a mensagem "Nenhum pedido encontrado"
And a lista de histórico de pedidos deve estar vazia.

Scenario: Falha ao carregar histórico de pedidos
Given que o usuário está logado
When o usuário acessa a página de "Histórico de Pedidos"
Then o sistema apresenta uma mensagem de erro indicando que não foi possível carregar o histórico de pedidos devido a um problema de conexão

Scenario: Usuário deslogado tenta acessar histórico de pedidos
Given que o usuário não está logado
When o usuário acessa a página de "Histórico de Pedidos"
Then o sistema redireciona o usuário para a página de login, exibindo uma mensagem informando que é necessário efetuar o login para visualizar o histórico de pedidos.

Scenario: Filtrar histórico de pedidos por número do pedido
Given que o usuário está logado no sistema
And tem pelo menos um pedido registrado
When o usuário acessa a página de "Histórico de Pedidos"
And seleciona a opção de filtrar por número do pedido
And informar o número do pedido desejado
Then o sistema deve mostrar apenas o histórico de pedido correspondente ao número informado

Scenario: Filtrar histórico de pedidos por data
Given que um usuário está logado na plataforma
When o usuário acessa a página de "Histórico de Pedidos"
And escolhe a opção de filtrar por data
And insere o intervalo de datas desejado
Then o sistema deve exibir somente os pedidos realizados dentro desse intervalo de datas


Scenario: Filtrar histórico de pedidos por múltiplos status
Given que um usuário está logado na plataforma
When o usuário acessa a página de "Histórico de Pedidos"
And escolhe a opção de filtrar por status
And seleciona vários status (ativos, concluídos e cancelados) na opção de filtragem
Then a lista de pedidos exibida deve corresponder somente aos pedidos com os status selecionados.

Scenario: Buscar histórico de pedidos por nome do produto
Given que o usuário está logado
When ele acessa a página de "Histórico de Pedidos"
And digita o nome do produto na opção de filtragem por nome
Then a lista de pedidos exibida deve corresponder somente aos pedidos que contém o produto com o nome pesquisado.

Scenario: Limpar filtros
Given que o usuário está logado
And que ele já aplicou algum filtro na página de "Histórico de Pedidos"
When ele clica no botão "Limpar filtros"
Then todos os filtros aplicados anteriormente devem ser removidos e a lista de pedidos deve voltar a exibir todos os pedidos, sem nenhum tipo de filtro.

Scenario: Clicar em item de pedido
Given que o usuário esteja logado
When o usuário acessa a página de "Histórico de Pedidos"
And o usuário clica em um item de pedido na lista de histórico de pedidos
Then o sistema deve abrir a página de detalhes do pedido selecionado.


