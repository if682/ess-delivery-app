Feature: Gerar um link de compartilhamento de página personalizada
		Como um usuário da plataforma
		Eu quero poder gerar links das minhas playlists
		Para que eu possa compartilhar com outros usuários

Cenário 1: Compartilhando um playlist por link
	Given: Eu estou logado como “victorluizz”
	And: Eu estou na página da minha playlist “Favs”
	When: Eu clico na opção “Compartilhar”
	And: Eu clico na opção “Link”
	Then: Um link é exibido para ser copiado
