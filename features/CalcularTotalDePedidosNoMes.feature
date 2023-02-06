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