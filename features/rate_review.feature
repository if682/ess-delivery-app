Feature: Avaliar reviews (rate reviews)
	Sendo um usuário comum,
	Eu quero poder avaliar reviews,
	Para que eu possa dar minha opinião sobre elas.

	Cenário: avaliar review (cenário bem-sucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E eu ainda não avaliei essa review,
		When Quando eu clico no botão de coração,
		Then A review é avaliada positivamente,
		And E o número de likes é incrementado em 1.

	Cenário: desfazer avaliação de review
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E eu já avaliei essa review,
		When Quando eu clico no botão de coração,
		Then A minha avaliação é retirada,
		And E o número de likes é decrementado em 1.

	Cenário: avaliar review sem estar logado (cenário malsucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu não estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		When Quando eu clico no botão de coração,
		Then Eu consigo ver uma mensagem de erro,
		And E Eu sou redirecionado para a página de “Login”.

	Cenário: avaliar review de filme que não existe (cenário malsucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E eu ainda não avaliei essa review,
		And E o filme “Psicose” foi removido,
		When Quando eu clico no botão de coração,
		Then Eu consigo ver uma mensagem de erro,
		And E Eu sou redirecionado para a página inicial.

	Cenário: comentar review (cenário bem-sucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		When Quando eu clico no botão de comentário,
		And E eu preencho o campo de comentário com “Muito bom!”,
		And E eu clico no botão de enviar,
		Then O comentário é adicionado à review,
		And E o número de comentários é incrementado em 1.

	Cenário: excluir comentário da review
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E eu vejo um comentário com o texto “Muito bom!”,
		And E esse comentário foi feito por mim,
		When Quando eu clico no botão de excluir comentário,
		Then O comentário é removido da review,
		And E o número de comentários é decrementado em 1.

	Cenário: comentar review sem estar logado (cenário malsucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu não estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		When Quando eu clico no botão de comentário,
		Then Eu consigo ver uma mensagem de erro,
		And E Eu sou redirecionado para a página de “Login”.

	Cenário: comentar review de filme que não existe (cenário malsucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		And E o filme “Psicose” foi removido,
		When Quando eu clico no botão de comentário,
		Then Eu consigo ver uma mensagem de erro,
		And E Eu sou redirecionado para a página inicial.

	Cenário: comentar review com comentário vazio (cenário malsucedido)
		Given Dado que estou na página do filme “Psicose”,
		And E eu estou logado em minha conta,
		And E eu vejo uma review com o título “Melhor filme de terror de todos os tempos”,
		When Quando eu clico no botão de comentário,
		And E eu preencho o campo de comentário com “”,
		And E eu clico no botão de enviar,
		Then Eu consigo ver uma mensagem de erro,
		And E o comentário não é adicionado à review.