Feature: Criar uma lista de filmes (create a list)
	Sendo um usuário comum,
	Eu quero poder criar uma lista de filmes,
	Para assim poder agrupar determinados filmes por uma categoria.

	Cenário: criar uma lista (cenário bem-sucedido)
		Given Dado que estou na página do meu perfil,
		And E eu estou logado em minha conta,
		When Quando eu clico na opção “Criar nova lista”,
		Then Uma janela abre para que eu possa inserir o nome da lista,
		And E eu preencho o campo “Nome” com “Filmes de Terror”,
		And E eu clico no botão “Criar Lista”,
		Then Eu sou redirecionado para a página do meu perfil,
		And E eu consigo ver a lista “Filmes de Terror” nas minhas listas.

	Cenário: criar uma lista já existente (cenário malsucedido)
		Given Dado que estou na página do meu perfil,
		And E eu estou logado em minha conta,
		And E eu consigo ver a lista “Filmes de Terror” nas minhas listas,
		When Quando eu clico na opção “Criar nova lista”,
		Then Uma janela abre para que eu possa inserir o nome da lista,
		And E eu preencho o campo “Nome” com “Filmes de Terror”,
		And E eu clico no botão “Criar Lista”,
		Then Eu consigo ver uma mensagem de erro informando que a lista já existe,
		And E a lista não é criada,
		And E eu sou redirecionado para a página do meu perfil.

	Cenário: criar uma lista com nome inválido (cenário malsucedido)
		Given Dado que estou na página do meu perfil,
		And E eu estou logado em minha conta,
		When Quando eu clico na opção “Criar nova lista”,
		Then Uma janela abre para que eu possa inserir o nome da lista,
		And E eu preencho o campo “Nome” com “%&@”,
		And E eu clico no botão “Criar Lista”,
		Then Eu consigo ver uma mensagem de erro informando que o nome da lista é inválido,
		And E a lista não é criada,
		And E eu sou redirecionado para a página do meu perfil.

	Cenário: criar uma lista com nome muito longo (cenário malsucedido)
		Given Dado que estou na página do meu perfil,
		And E eu estou logado em minha conta,
		When Quando eu clico na opção “Criar nova lista”,
		Then Uma janela abre para que eu possa inserir o nome da lista,
		And E eu preencho o campo “Nome” com “Filmes de Terror que eu quero assistir antes de morrer”,
		And E eu clico no botão “Criar Lista”,
		Then Eu consigo ver uma mensagem de erro informando que o nome da lista é inválido,
		And E a lista não é criada,
		And E eu sou redirecionado para a página do meu perfil.