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
		And eu preencho o campo de “Cidade” com “Recife"
		And eu preencho o campo de “CEP” com “99.123.323”
		And eu preencho o campo de “Complemento” com “Restaurante de esquina”
		And eu preencho o campo de “Horário de Início” com “08:00”
		And eu preencho o campo de “Horário de Fim” com “20:00”
		And eu preencho o campo de “Responsável” com “Josineide Figueiredo da Silva”
		And eu preencho o campo de “Telefone do Responsável” com “81 1234-5678”
		And eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o cadastro foi feito com sucesso
		
	Scenario: Cadastro de restaurante com CNPJ já cadastrado
		Given estou na tela de cadastro de restaurantes
		And o CNPJ “77.777.777/001-77” já é utilizado por algum restaurante no sistema
		When eu preencho o campo de “CNPJ” com “77.777.777/001-77”
		And eu preencho o campo de “Nome do Restaurante” com “Pescados do Zé”
		And eu preencho o campo de “Rua” com “Governador Schumacher”
		And eu preencho o campo de “Número” com “77”
		And eu preencho o campo de “Cidade” com “Paulista"
		And eu preencho o campo de “CEP” com “12.345.678”
		And eu preencho o campo de “Complemento” com “Em frente ao pé de carambola”
		And eu preencho o campo de “Horário de Início” com “10:00”
		And eu preencho o campo de “Horário de Fim” com “18:00”
		And eu preencho o campo de “Responsável” com “José Fidalgo dos Santos”
		And eu preencho o campo de “Telefone do Responsável” com “81 3876-5432”
		And eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o CNPJ já foi cadastrado e o cadastro não foi realizado, me perguntando se quero fazer login no sistema com esse CNPJ

	Scenario: Cadastro de restaurante com campo não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de “CNPJ” com “98.765.432/001-10!
		And eu preencho o campo de “Rua” com “Capitão Senna"
		And eu preencho o campo de “Número” com “1”
		And eu preencho o campo de “Cidade” com “Aldeia"
		And eu preencho o campo de “CEP” com “23.332.233”
		And eu preencho o campo de “Complemento” com “Em frente ao pé de jambo"
		And eu preencho o campo de “Horário de Início” com “9:00”
		And eu preencho o campo de “Horário de Fim” com “18:00”
		And eu preencho o campo de “Responsável” com “José Paulo da Costa”
		And eu preencho o campo de “Telefone do Responsável” com “81 98989-0011”
		And eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que as informações dadas são insuficientes, logo o cadastro não foi realizado
		And eu continuo na tela de cadastro

	Scenario: Cenário genérico para completar o roteiro
		Given estou em um determinado estado
		When eu faço algo
		Then alguma coisa acontece

	Scenario: Segundo cenário genérico para completar o roteiro
		Given estou em um dado estado
		When eu faço dada ação
        And faço outra ação
		Then eu acabo em um certo estado