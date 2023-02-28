Feature: Avaliar reviews (rate reviews)
	Sendo um usuário comum,
	Eu quero poder avaliar reviews,
	Para que eu possa dar minha opinião sobre elas.

	Cenário: avaliar review (cenário bem-sucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E eu ainda não avaliei essa review,
		And E o número de likes da review é 25,
		When Quando eu clico para avaliar a review,
		Then A review é avaliada positivamente,
		And E o número de likes da review passa a ser 26.

	Cenário: desfazer avaliação de review
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E eu já avaliei essa review,
		And E o número de likes da review é 25,
		When Quando eu clico para desfazer a avaliação da review,
		Then A minha avaliação é retirada,
		And E o número de likes da review passa a ser 24.

	Cenário: avaliar review sem estar logado (cenário malsucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu não estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E o número de likes da review é 25,
		When Quando eu clico para avaliar a review,
		Then Eu consigo ver uma mensagem de erro,
		And E Eu sou redirecionado para a página de “Login”,
		And E o número de likes da review continua sendo 25.

	Cenário: comentar review (cenário bem-sucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E o número de comentários da review é 2,
		When Quando eu clico para fazer comentário,
		And E eu preencho o campo de comentário com “Muito bom!”,
		And E eu confirmo,
		Then O comentário é adicionado à review,
		And E o número de comentários passa a ser 3.

	Cenário: excluir comentário da review
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E o número de comentários da review é 2,
		And E eu vejo um comentário com o texto “Muito bom!”,
		And E esse comentário foi feito por mim,
		When Quando eu clico para excluir comentário,
		Then O comentário é removido da review,
		And E o número de comentários passa a ser 1.

	Cenário: comentar review sem estar logado (cenário malsucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu não estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E o número de comentários da review é 2,
		When Quando eu clico para fazer comentário,
		Then Eu consigo ver uma mensagem de erro,
		And E Eu sou redirecionado para a página de “Login”,
		And E o número de comentários da review continua sendo 2.

	Cenário: comentar review com comentário vazio (cenário malsucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E o número de comentários da review é 2,
		When Quando eu clico para fazer comentário,
		And E eu preencho o campo de comentário com “”,
		And E eu confirmo,
		Then Eu consigo ver uma mensagem de erro,
		And E o comentário não é adicionado à review.