Feature: Gerenciar itens do cardápio
    As a usuário "Admin" do restaurante
    I want to inserir, remover e editar itens no cardápio
    So that eu possa adicionar novos itens ao meu cardápio

	# Cenários de sucesso
	Scenario: Adicionar um item
	Given estou logado como “Admin” com o login “abdf”
	And estou na página “Cardápio”
	When eu clicar no botão “Adicionar item”
	Then surgirão as caixas de entrada “Nome”, “Preço” e “Descrição”
	When eu preencher as caixas de entrada “Nome” com “Pizza”, “Preço” com “17” e "Descrição" com "Uma pizza bem gostosa"
	And eu apertar o botão “Adicionar”
	Then aparecerá uma mensagem de confirmação dizendo "O novo item foi adicionado."
	And eu poderei ver o item de nome "Pizza" na página "Cardápio"

	Scenario: Remover um item
	Given estou logado como “Admin” com o login “abdf”
	And estou na página “Cardápio”
	And existe um item de nome "Hambúrguer"
	When eu clicar no botão "Remover" do item de nome "Hambúrguer"
	Then surgirá uma página de confirmação de exclusão
	When eu clicar no botão "Excluir" 
	Then o item de nome "Hambúrguer" será excluído
	And aparecerá uma mensagem de confirmação dizendo ""Hambúrguer" foi excluído."
	And o item de nome "Hambúrguer" não aparecerá mais na página "Cardápio"

	Scenario: Editar um item
	Given estou logado como “Admin” com o login “abdf”
	And estou na página “Cardápio”
	And existe um item com “Nome” = “Torta”, “Preço” = “12” e “Descrição” = “Uma torta gostosa”
	When eu clicar no botão “Editar item” do item com nome “Torta”
	Then surgirão as caixas de entrada “Nome”, “Preço” e “Descrição” auto-preenchidas com “Torta”, “12” e “Uma torta gostosa”
	When eu mudar a caixa de entrada “Nome” para “Pizza” e "Descrição" para "Uma pizza gostosa"
	And eu clicar no botão “Editar”
	Then aparecerá uma mensagem de confirmação dizendo "O item foi editado."
	And eu poderei ver o item com “Nome” = “Pizza”, “Preço” = “12” e “Descrição” = “Uma pizza gostosa”

    # Cenários de falhas
    Scenario: Tentar adicionar um item com alguma informação faltando
	Given estou logado como “Admin” com o login “abdf”
	And estou na página “Cardápio”
	When eu clicar no botão “Adicionar item”
	Then surgirão as caixas de entrada “Nome”, “Preço” e “Descrição”
	When eu preencher as caixas de entrada “Nome” com “Pizza” e “Preço” com “17”
	And eu apertar o botão “Adicionar”
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
	And ainda existirá um item com “Nome” = “Torta”, “Preço” = “12” e “Descrição” = “Uma torta gostosa” na página "Cardápio"