Feature: Gerenciar itens do cardápio
    As a usuário "Admin" do restaurante
    I want to inserir, remover e editar itens no cardápio
    So that eu possa adicionar novos itens ao meu cardápio

    Scenario: Tentar adicionar um item com alguma informação faltando
	Given estou logado como “Admin” com o login “abdf”
	And estou na página “Cardápio”
	When eu clicar no botão “Adicionar item”
	Then surgirão as caixas de entrada “Nome”, “Preço” e “Descrição”
	When eu preencher as caixas de entrada “Nome” com “Pizza” e “Preço” com “17”
	And eu clicar no botão “Adicionar”
	Then aparecerá uma mensagem de erro dizendo “Todos os campos devem ser preenchidos.”
	And surgirão as caixas de entrada “Nome”, “Preço” e “Descrição”

    Scenario: Tentar adicionar um item com nome duplicado
	Given estou logado como “Admin” com o login “abdf”
	And estou na página “Cardápio”
	And existe um item com “Nome” = “Pizza”
	When eu clicar no botão “Adicionar item”
	Then surgirão as caixas de entrada “Nome”, “Preço” e “Descrição”
	When eu preencher as caixas de entrada “Nome” com “Pizza”, “Preço” com “17” e “Descrição” com “Uma pizza realmente deliciosa”
	And eu clicar no botão “Adicionar”
	Then aparecerá uma mensagem de erro dizendo “Já existe um item com esse nome.”
	And surgirão as caixas de entrada “Nome”, “Preço” e “Descrição”

    Scenario: Tentar editar o nome de um item para outro que já existe
	Given estou logado como “Admin” com o login “abdf”
	And estou na página “Cardápio”
	And existe um item com “Nome” = “Pizza”, “Preço” = “13” e “Descrição” = “Uma pizza gostosa”
	And existe um item com “Nome” = “Torta”, “Preço” = “12” e “Descrição” = “Uma torta gostosa”
	When eu clicar no botão “Editar item” do item com nome “Torta”
	Then surgirão as caixas de entrada “Nome”, “Preço” e “Descrição” auto-preenchidas com “Torta”, “12” e “Uma torta gostosa”
	When eu mudar a caixa de entrada “Nome” para “Pizza”
	And eu clicar no botão “Editar”
	Then aparecerá uma mensagem de erro dizendo “Já existe um item com esse nome.”
	And surgirão as caixas de entrada “Nome”, “Preço” e “Descrição” auto-preenchidas com “Torta”, “12” e “Uma torta gostosa”

    Scenario: Tentar editar um item deixando informações em branco
	Given estou logado como “Admin” com o login “abdf”
	And estou na página “Cardápio”
	And existe um item com “Nome” = “Torta”, “Preço” = “12” e “Descrição” = “Uma torta gostosa”
	When eu clicar no botão “Editar item” do item com nome “Torta”
	Then surgirão as caixas de entrada “Nome”, “Preço” e “Descrição” auto-preenchidas com “Torta”, “12” e “Uma torta gostosa”
	When eu mudar a caixa de entrada “Nome” para “”
	And eu clicar no botão “Editar”
	Then aparecerá uma mensagem de erro dizendo “Todos os campos devem ser preenchidos.”
	And surgirão as caixas de entrada “Nome”, “Preço” e “Descrição” auto-preenchidas com “Torta”, “12” e “Uma torta gostosa”