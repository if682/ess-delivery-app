Feature: visualizar histórico de pedidos
	As a "usuário" cadastrado no app de delivery
	I want filtrar por determinados atributos de meus pedidos, ver seus detalhes e pedir ajuda para possíveis problemas com o pedido
	So that to poder visualizar o histórico de pedidos
	
	Scenario: Ver histórico de pedidos sem nenhum filtro
		Given que estou na página de "meus-pedidos" 
		And não aplico nenhum filtro de pesquisa
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:34", "estabelecimento" = "Raul Burguer", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "1234", "detalhes do pedido" = "hamburguer sem salada", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		When visualizo o histórico  
		Then consigo visualizar apenas o item com o "id" = "1234" 
		And sem o campo "endereço de entrega" na visualização 
		
		
	Scenario: Ver histórico de pedidos feitos em um restaurante específico
		Given que estou na página de "histórico de pedidos"
		And a visualização do histórico não é filtrada
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:34", "estabelecimento" = "Raul Burguer", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "1234", "detalhes do pedido" = "hamburguer sem salada", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:35", "estabelecimento" = "Mc Donalds", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "2345", "detalhes do pedido" = "x burguer", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		When filtro minha busca pelo nome do "estabelecimento" = "Mc Donalds"
		Then a página vai ser recarregada 
		And consigo visualizar apenas o item com o "id" = "2345"
		And sem o campo "endereço de entrega" na visualização
		
	Scenario: Ver histórico de pedidos feitos em um local específico
		Given que estou na página de "histórico de pedidos"
		And a visualização do histórico não é filtrada
		And existe um pedido com "data" = "29/12/2022", "hora" = "12:34", "estabelecimento" = "Raul Burguer", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "1234", "detalhes do pedido" = "hamburguer sem salada", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:35", "estabelecimento" = "Mc Donalds", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1235", "id do pedido" = "2345", "detalhes do pedido" = "x burguer", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		When filtro minha busca pelo endereço de entrega "endereço de entrega" = "Rua 1235"
		Then a página vai ser recarregada 
		And consigo visualizar apenas o item com o "id" = "2345"	
		
	Scenario: Pedir ajuda dizendo que teve problema no pedido
		Given que estou na página de "histórico de pedidos"
		And a visualização do histórico não é filtrada
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:34", "estabelecimento" = "Raul Burguer", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "1234", "detalhes do pedido" = "hamburguer sem salada", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		When apertar o botâo "ajuda" no item de "id" = "1234"
		And apertar o botâo de "tenho problema com pedido"
		Then poderei ver uma tela com os campos "assunto da mensagem" e "mensagem"  para descrever o meu problema que tive com pedido de "id" = "1234"
	
	Scenario: Pedir ajuda dizendo que teve problema com entrega
		Given que estou na página de "histórico de pedidos"
		And a visualização do histórico não é filtrada
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:34", "estabelecimento" = "Raul Burguer", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "1234", "detalhes do pedido" = "hamburguer sem salada", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		When apertar o botâo "ajuda" no item de "id" = "1234"
		And apertar o botâo de "tenho problema com pagamento"
		Then poderei ver uma tela com os campos "assunto da mensagem" e "mensagem" para descrever o meu problema que tive com o pagamento do pedido de "id" = "1234"
	
	Scenario: Mostrar detalhes do pedido
		Given que estou na página de "histórico de pedidos"
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:34", "estabelecimento" = "Raul Burguer", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "1234", "detalhes do pedido" = "hamburguer sem salada", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		When uso a interface fornecida no aplicativo para me direcionar aos detalhes específicos do pedido de "id" = "1234"
		Then a página vai ser recarregada
		And consigo visualizar apenas o item com o "id" = "1234"
		And vai ser mostrado de forma completa os detalhes do pedido
