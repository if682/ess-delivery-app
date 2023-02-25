Feature: Calcular o valor total de pedidos no mês por restaurante
    As a usuário "cliente"
    I want to ver e limpar o valor total de pedidos no mês atual
    So that eu possa cuidar das minhas finanças

	# Cenários de sucesso
	Scenario: Visualizar o valor total de compras desse mês para cada restaurante
		Given estou logado como usuário "comPedidos"
		When eu abro a página "total de pedidos do mês"
		Then eu devo ver o valor total de pedidos nos restaurantes neste mês
		And "Tonho" tem o valor total "R$18,00"
		And "Almir" tem o valor total "R$55,00"
		
	Scenario: Visualizar o item mais pedido no mês de um restaurante
		Given estou logado como usuário "umRestauranteMaisPedido"
		When eu abro a página "total de pedidos do mês"
		And clico no restaurante "Tonho"
		Then eu devo ver o valor total do restaurante "Tonho" com o valor "R$34,00"
		And eu devo ver como item mais pedido "pastel"
		
	Scenario: Visualizar o item mais pedido no mês de um restaurante quando há dois com mesma quantia
		Given estou logado como usuário "empateItem"
		When eu abro a página "total de pedidos do mês"
		And clico no restaurante "Almir"
		Then eu devo ver o valor total do restaurante "Almir" com o valor "R$69,00"
		And eu devo ver como itens mais pedidos "parmegiana" e "cajuína"

	Scenario: Usuário quer ver o valor total de pedidos do mês mas não fez nenhuma compra neste mês
		Given estou logado como usuário "zeroPedidos"
		And minha conta não fez nenhum pedido nesse mês
		When eu abro a página "total de pedidos do mês"
		Then eu devo ver uma mensagem indicando "nada foi comprado nesse mês"
		
	Scenario: Visualizar valor total de pedidos de um mês anterior
		Given estou logado como usuário "pedidosEmVariosMeses"
		When eu abro a página "total de pedidos do mês"
		And eu seleciono o mês "Janeiro"
		Then eu devo ver o valor total de pedidos nos restaurantes neste mês
		And "Tonho" tem o valor total "R$42,00"
		And "Almir" tem o valor total "R$73,00"
		
	# Cénarios de falha
	Scenario: Usuário quer ver o valor total de pedidos do mês mas não foi possível carregar histórico de pedidos
		Given estou logado como usuário "cliente"
		When eu abro a página "total de pedidos do mês"
		And não foi possível carregar o histórico de compras
		Then eu devo ver uma mensagem indicando erro ao carregar histórico