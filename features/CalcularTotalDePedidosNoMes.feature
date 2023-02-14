Feature: Calcular o valor total de pedidos no mês por restaurante
    As a usuário "cliente"
    I want to ver e limpar o valor total de pedidos no mês atual
    So that eu possa cuidar das minhas finanças

	# Cenários de sucesso
	Scenario: Visualizar o valor total de compras desse mês para cada restaurante
		Given estou logado como usuário "cliente"
		And minha conta fez pediu no restaurante "Tonho" neste mês os itens "3 pastel, 2 guaraná"
		And "pastel" custa "R$4,00"
		And "guaraná" custa "R$3,00"
		And minha conta fez pediu no restaurante "Almir" neste mês os itens "4 parmegiana, 1 feijoada"
		And "parmegiana" custa "R$11,00"
		And "feijoada" custa "R$11,00"
		When eu abro a página "total de pedidos do mês"
		Then eu devo ver o valor total de pedidos nos restaurantes neste mês
		And "Tonho" tem o valor total "R$18,00"
		And "Almir" tem o valor total "R$55,00"
		
	Scenario: Visualizar o item mais pedido no mês de um restaurante
		Given estou logado como usuário "cliente"
		And minha conta pediu no restaurante "Tonho" neste mês os itens "5 pastel, 2 guaraná, 1 X-burger"
		And "pastel" custa "R$4,00"
		And "guaraná" custa "R$3,00"
		And "X-burger" custa "R$8,00"
		When eu abro a página "total de pedidos do mês"
		And clico no restaurante "Tonho"
		Then eu devo ver o valor total do restaurante "Tonho" com o valor "R$34,00"
		And eu devo ver como item mais pedido "pastel"
		
	Scenario: Visualizar o item mais pedido no mês de um restaurante quando há dois com mesma quantia
		Given estou logado como usuário "cliente"
		And minha conta pediu no restaurante "Almir" durante esse mês os itens "4 parmegiana, 4 cajuína, 1 feijoada"
		And "parmegiana" custa "R$11,00"
		And "cajuína" custa "R$3,50"
		And "feijoada" custa "R$11,00"
		When eu abro a página "total de pedidos do mês"
		And clico no restaurante "Almir"
		Then eu devo ver o valor total do restaurante "Tonho" com o valor "R$69,00"
		And eu devo ver como itens mais pedidos "parmegiana" e "cajuína"

	Scenario: Usuário quer ver o valor total de pedidos do mês mas não fez nenhuma compra neste mês
		Given estou logado como usuário "cliente"
		And minha conta não fez nenhum pedido nesse mês
		When eu abro a página "total de pedidos do mês"
		Then eu devo ver uma mensagem indicando "nada foi comprado nesse mês"
		
	# Cénarios de falha
	Scenario: Usuário quer ver o valor total de pedidos do mês mas não foi possível carregar histórico de pedidos
		Given estou logado como usuário "cliente"
		When eu abro a página "total de pedidos do mês"
		And não foi possível carregar o histórico de compras
		Then eu devo ver uma mensagem indicando erro ao carregar histórico