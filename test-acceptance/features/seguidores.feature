Feature: Mostrar seguidores e donos da playlist
		Como um usuário que criou uma playlist
		Eu quero visualizar os seguidores da minha playlist
		Para que todos os usuários possam me visualizar como dona da 
		playlist


Cenário 1: Usuário visualiza perfil do dono da playlist
	Given: Eu estou logado como “aliceSales”
	And: Dado que eu recebi o link de compartilhamento 
	“dizer.com/playlists/romulo_daniell/musicas_para_viagem” da playlist 
	“Músicas Para Viagem”
	When: Eu clicar 
	“dizer.com/playlists/romulo_daniell/musicas_para_viagem” 
	Then: serei redirecionado para a página da playlist “Músicas Para 
	Viagem”
	And: Verei as informações da playlist, como a foto do usuário 
	“romulo_daniell”

Cenário 2:  Usuário segue uma playlist
	Given: Eu estou logado como “aliceSales”
	And: Recebi o  link de compartilhamento 
	“dizer.com/playlists/romulo_daniell/musicas_para_viagem” da playlist 
	“Músicas Para Viagem”
	When: Eu clicar no link 
	“dizer.com/playlists/romulo_daniell/musicas_para_viagem” 
	Then: Serei redirecionado para a página da playlist “Músicas Para 
	Viagem”	
	And: Eu clico no botão de “Seguir playlist”
	And: Eu serei um seguidor da playlist
	And: Permaneço na página da playlist

Cenário 3:  Usuário deixa de seguir uma playlist
	Given: Eu estou logado como “aliceSales”
	And: Sou seguidora da playlist “Músicas Para Viagem”
	When: O usuário clicar no link 
	“dizer.com/playlists/romulo_daniell/musicas_para_viagem”  será 
	redirecionado para a página da playlist
	Then: Quando eu clicar no botão de deixar de seguir playlist “Músicas 
	Para Viagem” não serei mais seguidor da playlist
	And: permaneço na página da playlist
