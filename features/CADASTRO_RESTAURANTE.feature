As a represetante de um restaurante
I want to cadastrar meu restaurante em um site de pedidos para restaurantes
So that eu possa ter maior alcance de clientes
And ter maior lucro

	Scenario: Cadastro de restaurante bem-sucedido
		Given estou na tela de cadastro de restaurantes
		And o CNPJ “12.345.678/0001-99” não é o CNPJ de nenhum restaurante cadastrado
		When eu preencho o campo de “CNPJ” com “12.345.678/0001-99”
		And eu preencho o campo de “Nome do Restaurante” com “Recanto da Jô”
		And eu preencho o campo de “Rua” com “Rubinho Barriccello”
		And eu preencho o campo de “Número” com “11”
		And eu preencho o campo de “Cidade” com “Recife’
		And eu preencho o campo de “CEP” com “99.123.323”
		And eu preencho o campo de “Complemento” com “Restaurante de esquina”
		And eu preencho o campo de “Horário de Início” com “08:00”
		And eu preencho o campo de “Horário de Fim” com “20:00”
		And eu preencho o campo de “Responsável” com “Josineide Figueiredo da Silva”
		And eu preencho o campo de “Telefone do Responsável” com “81 1234-5678”
		And eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o cadastro foi feito com sucesso
