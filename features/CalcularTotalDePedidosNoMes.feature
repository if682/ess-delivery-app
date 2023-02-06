Feature: Calcular o valor total de pedidos no mês por restaurante
    As a usuário "cliente"
    I want to ver e limpar o valor total de pedidos no mês atual
    So that eu possa cuidar das minhas finanças

	# Cenários de sucesso
	Scenario: Visualizar o valor total de compras desse mês para cada restaurante
		Given estou logado como usuário "cliente"
		And minha conta fez pedidos nos restaurantes "Tonho" e "Almir"
		When eu abro a página "total de pedidos do mês"
		Then eu devo ver o valor total de pedidos nos restaurantes "Tonho" e "Almir" separadamente
		
	Scenario: Visualizar o item mais pedido no mês de um restaurante
		Given estou logado como usuário "cliente"
		And minha conta pediu no restaurante "Tonho" durante esse mês os itens "5 pastel, 2 guaraná, 1 X-burger"
		When eu abro a página "total de pedidos do mês"
		And clico no restaurante "Tonho"
		Then eu devo ver o valor total de pedidos nos restaurantes "Tonho"
		And eu devo ver como item mais pedido "pastel"
		
	Scenario: Visualizar o item mais pedido no mês de um restaurante quando há dois com mesma quantia
		Given estou logado como usuário "cliente"
		And minha conta pediu no restaurante "Almir" durante esse mês os itens "4 parmegiana, 4 cajuína, 1 feijoada"
		When eu abro a página "total de pedidos do mês"
		And clico no restaurante "Almir"
		Then eu devo ver o valor total de pedidos nos restaurantes "Almir"
		And eu devo ver como itens mais pedidos "parmegiana" e "cajuína"

	Scenario: Usuário quer ver o valor total de pedidos do mês mas não fez nenhuma compra
		Given estou logado como usuário "cliente"
		And minha conta não fez nenhum pedido ainda
		When eu abro a página "total de pedidos do mês"
		Then eu devo ver uma mensagem indicando que nada foi comprado ainda

	Scenario: Usuário quer ver o valor total de pedidos do mês mas não fez nenhuma compra neste mês
		Given estou logado como usuário "cliente"
		And minha conta não fez nenhum pedido nesse mês
		And minha conta fez pedidos em meses anteriores
		When eu abro a página "total de pedidos do mês"
		Then eu devo ver uma mensagem indicando que nada foi comprado ainda nesse mês
		
	# Cénarios de falha
	Scenario: Usuário quer ver o valor total de pedidos do mês mas não foi possível carregar histórico de pedidos
		Given estou logado como usuário "cliente"
		When eu abro a página "total de pedidos do mês"
		And não foi possível carregar o histórico de compras
		Then eu devo ver uma mensagem indicando erro ao carregar histórico