Feature: "Histórico de pedidos"
  As a cliente que possui uma conta no aplicativo de delivery
  I want to visualizar meu histórico de pedidos
  So that conferir todos os pedidos que fiz no último mês 

Scenario: Visualizando histórico de pedidos sem filtro
	Given estou logada com o usuário “user” com senha “user123”
	When clico em “Acessar histórico de pedidos”
	And já fiz pedidos esse mês
  Then é exibido na tela todos os pedidos que fiz no mês recorrente de forma paginada

Scenario: Visualizando histórico de pedidos com filtro
  Given estou logada com o usuário “Arthur” com senha “Henrique”
  When clico em “Acessar histórico de pedidos”
  And já fiz pedidos esse mês
  And clico no filtro de data “15 dias”
  Then é exibido na tela todos os pedidos que fiz nos últimos 15 dias de forma paginada

Scenario: Visualizando histórico de pedidos com filtro
  Given estou logada com o usuário “Arthur” com senha “Henrique”
  When clico em “Acessar histórico de pedidos”
  And já fiz pedidos esse mês
  And clico no filtro de data “7 dias”
  Then é exibido na tela todos os pedidos que fiz nos últimos 7 dias de forma paginada


Scenario: Visualizando informações específicas no histórico de  pedidos 
	Given estou logada com o usuário “Kinho” com senha “sz123”
	When clico em “Acessar histórico de pedidos”
	And já fiz pedidos esse mês
  Then é exibido na tela dos os pedidos que fiz no mês recorrente de forma paginada
  When clico no pedido de id = ‘2391’
  Then são exibidas informações detalhadas sobre o pedido, tais como: restaurante, valor e método de pagamento

Scenario: Não existe histórico de pedidos
	Given estou logada com o usuário “Wash” com senha “wash123”
	When clico em “Acessar histórico de pedidos”
	And não fiz nenhum pedido esse mês
  Then é exibido na tela o histórico vazio

Scenario: Não existe histórico de pedidos com filtro
	Given estou logada com o usuário "Jade" com senha "Picon"
	When clico em “Acessar histórico de pedidos”
  And clico no filtro de data "15 dias"
	And não fiz nenhum pedido nos últimos 15 dias
  Then é exibido na tela o histórico vazio
  And passo adicional

Scenario: Novo cenário
  Given um novo cenário 
  When eu crio um novo cenário 
  Then um novo cenário é criado