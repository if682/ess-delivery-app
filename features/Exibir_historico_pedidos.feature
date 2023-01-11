Recurso: visualizar histórico de pedidos
	As a "usuário" cadastrado no app de delivery
	I want to poder visualizar o histórico de pedidos, filtrá-los por determinados atributos de meus pedidos, ver seus detalhes e pedir ajuda para possíveis problemas com o pedido
	
	Scenario: Ver histórico de pedidos sem nenhum filtro
		Given que estou na página de "histórico de pedidos"
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
		
	Scenario: Ver histórico de pedidos feitos em um dia específico
		Given que estou na página de "histórico de pedidos"
		And a visualização do histórico não é filtrada
		And existe um pedido com "data" = "29/12/2022", "hora" = "12:34", "estabelecimento" = "Raul Burguer", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "1234", "detalhes do pedido" = "hamburguer sem salada", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:35", "estabelecimento" = "Mc Donalds", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "2345", "detalhes do pedido" = "x burguer", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		When filtro minha busca pela data do pedido "data" = "29/12/2022"
		Then a página vai ser recarregada 
		And consigo visualizar apenas o item com o "id" = "1234"
		And sem o campo "endereço de entrega" na visualização
		
	Scenario: Ver histórico de pedidos feitos em um local específico
		Given que estou na página de "histórico de pedidos"
		And a visualização do histórico não é filtrada
		And existe um pedido com "data" = "29/12/2022", "hora" = "12:34", "estabelecimento" = "Raul Burguer", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "1234", "detalhes do pedido" = "hamburguer sem salada", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:35", "estabelecimento" = "Mc Donalds", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1235", "id do pedido" = "2345", "detalhes do pedido" = "x burguer", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		When filtro minha busca pelo endereço de entrega "endereço de entrega" = "1235"
		Then a página vai ser recarregada 
		And consigo visualizar apenas o item com o "id" = "2345"	
		
	Scenario: Pedir ajuda dizendo que teve problema no pedido
		Given que estou na página de "histórico de pedidos"
		And a visualização do histórico não é filtrada
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:34", "estabelecimento" = "Raul Burguer", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "1234", "detalhes do pedido" = "hamburguer sem salada", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		When apertar o botâo "ajuda" no item de "id" = "1234"
		And apertar o botâo de "tenho problema com pedido"
		Then poderei ver uma tela com campos para descrever o meu problema que tive com pedido
	
	Scenario: Pedir ajuda dizendo que teve problema com pagamento
		Given que estou na página de "histórico de pedidos"
		And a visualização do histórico não é filtrada
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:34", "estabelecimento" = "Raul Burguer", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "1234", "detalhes do pedido" = "hamburguer sem salada", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		When apertar o botâo "ajuda" no item de "id" = "1234"
		And apertar o botâo de "tenho problema com pagamento"
		Then poderei ver uma tela com campos para descrever o meu problema que tive com o pagamento do pedido
		
	Scenario: Tentando enviar descrição do pedido de ajuda com problema no pedido em branco
		Given que estou na página de "descrição de problema de pagamento"
		And o campo "escrita da descrição" está em branco
		When apertar o botâo "enviar descrição do problema no pedido" 
		Then aparecerá uma mensagem de erro dizendo "é preciso escrever no campo escrita da descrição para enviar a solicitação de ajuda" 
	
	Scenario: Tentando enviar descrição do pedido de ajuda com problema no pagamento em branco
		Given que estou na página de "descrição de problema de pagamento"
		And o campo "escrita da descrição" está em branco
		When apertar o botâo "enviar descrição do problema no pagamento" 
		Then aparecerá uma mensagem de erro dizendo "é preciso escrever no campo escrita da descrição para enviar a solicitação de ajuda" 
		
	Scenario: Mostrar detalhes do pedido
		Given que estou na página de "histórico de pedidos"
		And existe um pedido com "data" = "27/12/2022", "hora" = "12:34", "estabelecimento" = "Raul Burguer", "avaliação do pedido" = "5", "status do pedido" = "Entregue", "endereço de entrega" = "Rua 1234", "id do pedido" = "1234", "detalhes do pedido" = "hamburguer sem salada", "valor do pedido" = "R$ 12,34", "entregador" = "João", "método de pagamento" = "Pix", "desconto" = "0%"
		When uso a interface fornecida no aplicativo para me direcionar aos detalhes específicos do pedido de "id" = "1234"
		Then a página vai ser recarregada
		And consigo visualizar apenas o item com o "id" = "1234"
		And vai ser mostrado de forma completa os detalhes do pedido
