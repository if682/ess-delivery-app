Feature: As a represetante de um restaurante
		I want to cadastrar meu restaurante em um site de pedidos para restaurantes
		So that eu possa ter maior alcance de clientes
		And ter maior lucro

	Scenario: Inserção de restaurante bem-sucedido
		Given estou na tela de cadastro de restaurantes
		Given o CNPJ "12.345.678/0001-99" não é o CNPJ de nenhum restaurante cadastrado
		When eu preencho o campo de "CNPJ" com "12.345.678/0001-99"
		When eu preencho o campo de "Nome do Restaurante" com "Recanto da Jô"
		When eu preencho o campo de "Rua" com "Rubinho Barriccello"
		When eu preencho o campo de "Número" com "11"
		When eu preencho o campo de "Cidade" com "Recife"
		When eu preencho o campo de "CEP" com "99123-323"
		When eu preencho o campo de "Complemento" com "Restaurante de esquina"
		When eu preencho o campo de "Hora de Abrir" com "08:00"
		When eu preencho o campo de "Hora de Fechar" com "20:00"
		When eu preencho o campo de "Nome do Responsável" com "Josineide Figueiredo da Silva"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 1234-5678"
		When eu preencho o campo de "E-mail para Contato" com "jfs@mail.com"
		When eu preencho o campo de "Senha" com "1Senha1"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o cadastro foi feito com sucesso
		
	Scenario: Inserção de restaurante com CNPJ já cadastrado
		Given estou na tela de cadastro de restaurantes
		Given o CNPJ "12.345.678/0001-99" já é utilizado por algum restaurante no sistema
		When eu preencho o campo de "CNPJ" com "12.345.678/0001-99"
		When eu preencho o campo de "Nome do Restaurante" com "Pescados do Zé"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "77"
		When eu preencho o campo de "Cidade" com "Paulista"
		When eu preencho o campo de "CEP" com "12345-678"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de carambola"
		When eu preencho o campo de "Hora de Abrir" com "10:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Fidalgo dos Santos"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 3876-5432"
		When eu preencho o campo de "E-mail para Contato" com "ze@mail.com"
		When eu preencho o campo de "Senha" com "1senha1"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o CNPJ já foi cadastrado e o cadastro não foi realizado, me perguntando se quero fazer login no sistema com esse CNPJ

	Scenario: Inserção de restaurante com campo de "Nome de Restaurante" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Nome do Restaurante" não foi preenchido, logo o cadastro não foi realizado

	Scenario: Inserção de restaurante com campo de "CNPJ" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "CNPJ" não foi preenchido, logo o cadastro não foi realizado
		
	Scenario: Inserção de restaurante com campo de "Rua" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Rua" não foi preenchido, logo o cadastro não foi realizado
		
	Scenario: Inserção de restaurante com campo de "Número" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Número" não foi preenchido, logo o cadastro não foi realizado
		
	Scenario: Inserção de restaurante com campo de "Cidade" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Cidade" não foi preenchido, logo o cadastro não foi realizado
		
	Scenario: Inserção de restaurante com campo de "CEP" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "CEP" não foi preenchido, logo o cadastro não foi realizado
		
	Scenario: Inserção de restaurante com campo de "Complemento" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Complemento" não foi preenchido, logo o cadastro não foi realizado
		
	Scenario: Inserção de restaurante com campo de "Hora de Abrir" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Hora de Abrir" não foi preenchido, logo o cadastro não foi realizado
		
	Scenario: Inserção de restaurante com campo de "Hora de Fechar" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Hora de Fechar" não foi preenchido, logo o cadastro não foi realizado
		
	Scenario: Inserção de restaurante com campo de "Nome do Responsável" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Nome do Responsável" não foi preenchido, logo o cadastro não foi realizado
		
	Scenario: Inserção de restaurante com campo de "Telefone do Responsável" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Telefone do Responsável" não foi preenchido, logo o cadastro não foi realizado
		
	Scenario: Inserção de restaurante com campo de "E-mail para Contato" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "E-mail para Contato" não foi preenchido, logo o cadastro não foi realizado
		
	Scenario: Inserção de restaurante com campo de "Senha" não preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Governador Schumacher"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Senha" não foi preenchido, logo o cadastro não foi realizado
		

	Scenario: Inserção de restaurante com campo de "CNPJ" mal-preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0007"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Capitão Senna"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "CNPJ" não foi preenchido corretamente, logo o cadastro não foi realizado

	Scenario: Inserção de restaurante com campo de "CEP" mal-preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Capitão Senna"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "CEP" não foi preenchido corretamente, logo o cadastro não foi realizado

	Scenario: Inserção de restaurante com campo de "Hora de Abrir" mal-preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Capitão Senna"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "900"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Hora de Abrir" não foi preenchido corretamente, logo o cadastro não foi realizado

	Scenario: Inserção de restaurante com campo de "Hora de Fechar" mal-preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Capitão Senna"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Hora de Fechar" não foi preenchido corretamente, logo o cadastro não foi realizado

	Scenario: Inserção de restaurante com campo de "Telefone do Responsável" mal-preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Capitão Senna"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "989890011"
		When eu preencho o campo de "E-mail para Contato" com "jpc@mail.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "Telefone do Responsável" não foi preenchido corretamente, logo o cadastro não foi realizado

	Scenario: Inserção de restaurante com campo de "E-mail para Contato" mal-preenchido
		Given estou na tela de cadastro de restaurantes
		When eu preencho o campo de "CNPJ" com "98.765.432/0001-10"
		When eu preencho o campo de "Nome do Restaurante" com "Bar da Caldeirada"
		When eu preencho o campo de "Rua" com "Capitão Senna"
		When eu preencho o campo de "Número" com "1"
		When eu preencho o campo de "Cidade" com "Aldeia"
		When eu preencho o campo de "CEP" com "23332-233"
		When eu preencho o campo de "Complemento" com "Em frente ao pé de jambo"
		When eu preencho o campo de "Hora de Abrir" com "09:00"
		When eu preencho o campo de "Hora de Fechar" com "18:00"
		When eu preencho o campo de "Nome do Responsável" com "José Paulo da Costa"
		When eu preencho o campo de "Telefone do Responsável" com "(81) 98989-0011"
		When eu preencho o campo de "E-mail para Contato" com "jpc.com"
		When eu preencho o campo de "Senha" com "potato"
		When eu seleciono a opção cadastrar
		Then eu vejo uma mensagem de que o campo "E-mail para Contato" não foi preenchido corretamente, logo o cadastro não foi realizado