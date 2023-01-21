Feature: Procurar por filme (search by movie)
Sendo um usuário comum,
Eu quero poder pesquisar pelo nome do filme,
Para assim poder encontrar um filme específico mais rapidamente em uma lista.

	Cenário: pesquisar filme existente (cenário bem-sucedido)
	(Given) Dado que estou na página “Lista de Filmes”,
	(And) E somente os filmes “A Órfã”, “Clube da Luta” e “Clube dos Cinco” estão na lista de filmes,
	(When) Quando eu pesquiso por “Clube da Luta”,
	(Then) Eu continuo na página “Lista de Filmes”,
	(And) E apenas o filme “Clube da Luta” é exibido.

	Cenário: pesquisar filme por título parcial (cenário bem-sucedido)
	(Given) Dado que estou na página “Lista de Filmes”,
	(And) E somente os filmes “A Órfã”, “Clube da Luta” e “Clube dos Cinco” estão na lista de filmes,
	(When) Quando eu pesquiso por “Clube”,
	(Then) Eu continuo na página “Lista de Filmes”,
	(And) E apenas os filmes “Clube da Luta” e “Clube dos Cinco” são exibidos.

	Cenário: pesquisar filme inexistente (cenário malsucedido)
	(Given) Dado que estou na página “Lista de Filmes”,
	(And) E somente os filmes “A Órfã”, “Clube da Luta” e “Clube dos Cinco” estão na lista de filmes,
	(When) Quando eu pesquiso por “O Iluminado”,
	(Then) Eu continuo na página “Lista de Filmes”,
	(And) E nenhum filme é exibido.

	Cenário: pesquisar filme com campo de pesquisa vazio (cenário malsucedido)
	(Given) Dado que estou na página “Lista de Filmes”,
	(And) E somente os filmes “A Órfã”, “Clube da Luta” e “Clube dos Cinco” estão na lista de filmes,
	(When) Quando eu pesquiso sem preencher o campo de pesquisa,
	(Then) Eu consigo ver uma mensagem de erro,
	(And) E Eu continuo na página “Lista de Filmes”,
	(And) E todos os filmes da lista são exibidos.
	(Then) Algo acontece.
