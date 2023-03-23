Feature: Criar categorias
	Como um administrador da plataforma
	Eu quero poder criar uma categoria
	Para que eu possa atribuir a uma playlist


Cenário 1: Criando uma nova categoria
	Given: Eu estou logado como “admin” com email "admin@dizer.com" e
	senha "admin"
	And: Estou na página de “Playlists”
	When: Eu clico no botão de “criar uma nova categoria”
	And: Eu vejo “Inserir nova categoria”
	And: Eu escrevo “categoria y” em “inserir nova categoria”
	And: Clico em salvar
	Then: Eu vejo uma mensagem de confirmação “Nova categoria
	adicionada com sucesso”
	And: Estou na página de “Playlists”

Cenário 2: Excluindo uma categoria
	Given: Eu estou logado como “admin” com email "admin@dizer.com" e senha "admin"
	And:  estou na página de “Minhas Playlists”
	When: Eu Clicar 2 vezes numa categoria o sistema abrirá 
	um modal com uma mensagem de alerta da ação
	And: Clicar em confirmar eu vejo um novo modal com uma
	mensagem de confirmação
	Then: Estou na página de “Playlists”

Cenário 3: Atribuindo uma categoria para uma playlist
	Given: Eu estou logado como “admin”
	And: Estou na página de “Playlists”
	And: Eu vejo a playlist “riri rainha”
	When: Eu clico no botão “Associar a uma categoria”
	And: Eu seleciono a categoria “divas pop”
	Then: Estou na página de “Playlist”
	And: Eu vejo a playlist “riri rainha” na categoria “divas pop”
