Feature: Calcular o valor total de pedidos no mês por restaurante
    As a usuário "cliente"
    I want to ver e limpar o valor total de pedidos no mês atual
    So that eu possa cuidar melhor das minhas finanças

	# Cenários de sucesso
	Scenario: Visualizar o valor total de compras desse mês para cada restaurante
		Given estou logado como usuário "cliente" com o login "dal"
		And estou na página "Pedidos"
		And minha conta fez os pedidos "1 Pizza e 2 Cocas" e "3 Hambúrguers" nos restaurantes "Tonho" e "Almir" neste mês, respectivamente
		When eu abro a página "total de pedidos do mês"
		Then eu devo ver o valor total do pedido "1 Pizza e 2 Cocas" no restaurantes "Tonho"
		And eu devo ver o valor total do pedido "3 Hambúrguers" no restaurantes "Almir"
		
	Scenario: Visualizar o item mais pedido no mês de um restaurante
		Given estou logado como usuário "cliente" com o login "dal"
		And estou na página "Pedidos"
		And minha conta pediu no restaurante "Tonho" durante esse mês os itens "5 pastel", "2 guaraná" e "1 X-burger"
		When eu abro a página "total de pedidos do mês"
		And clico no restaurante "Tonho"
		Then eu devo ver o valor total dos pedidos "5 pastel", "2 guaraná" e "1 X-burger" no restaurante "Tonho"
		And eu devo ver como item mais pedido "pastel"
		
	Scenario: Visualizar o item mais pedido no mês de um restaurante quando há dois com mesma quantia
		Given estou logado como usuário "cliente" com o login "dal"
		And estou na página "Pedidos"
		And minha conta pediu no restaurante "Almir" durante esse mês os itens "4 parmegiana", "4 cajuína" e "1 feijoada"
		When eu abro a página "total de pedidos do mês"
		And clico no restaurante "Almir"
		Then eu devo ver o valor total dos pedidos "4 parmegiana", "4 cajuína" e "1 feijoada" no restaurante "Almir"
		And eu devo ver como itens mais pedidos "parmegiana" e "cajuína"

	Scenario: Usuário quer ver o valor total de pedidos do mês mas não fez nenhuma compra neste mês
		Given estou logado como usuário "cliente" com o login "dal"
		And estou na página "Pedidos"
		And minha conta fez 0 pedidos nesse mês
		And minha conta fez o pedido "1 palma de banana" em algum mês anterior
		When eu abro a página "total de pedidos do mês"
		Then eu devo ver uma mensagem indicando "Nada foi comprado ainda nesse mês."
		
	# Cénarios de falha
	Scenario: Usuário quer ver o valor total de pedidos do mês mas não foi possível carregar histórico de pedidos
		Given estou logado como usuário "cliente" com o login "dal"
		And estou na página "Pedidos"
		When eu abro a página "total de pedidos do mês"
		And o sistema não conseguiu carregar o histórico de compras
		Then eu devo ver uma mensagem indicando "Erro ao carregar histórico!"