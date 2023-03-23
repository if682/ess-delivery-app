Feature: Atualizando uma playlist
	Como um usuário da plataforma
	Eu desejo poder adicionar ou remover músicas de uma playlist
	Para que elas se mantenham atualizadas
	
Cenário 1: Adicionando uma música já existente em uma playlist
	Given: Eu estou logado como o usuário “romulo_daniell”
	And: Eu estou na página da playlist do sistema “Músicas Pop”
	And: Eu vejo a musica “Anti-Hero”
	When: Eu clico em opções da música “Anti-Hero”
	And: O sistema me exibe as opções “Tocar A Seguir”, “Adicionar à fila”, 
	“Adicionar a Uma Playlist”, “Ir Para  Página do Artista”,  e 
	“Compartilhar”
	And: Eu clico em “Adicionar a Uma Playlist”
	And: Eu clico para adicionar a música “Anti-Hero” na minha playlist 
	“Músicas Para Viagem”
	Then: A mensagem “Essa música já se encontra na playlist” é exibida
	And: Eu estou na página da playlist “Músicas Pop” novamente

Cenário 2: Removendo uma música de uma playlist
	Given: Eu estou logado como o usuário “romulo_daniell”
	And: Eu estou na página da minha playlist “Músicas Para Viagem”
	And: Eu vejo a musica “Anti-Hero”
	When: Eu clico em “opções” na música “Anti-Hero”
	And: Uma lista de opções é exibida
	And: O sistema me exibe as opções “Tocar A Seguir”, “Adicionar à fila”, 
	“Adicionar a Uma Playlist”, “Remover da Playlist”, “Ir Para  Página do 
	Artista”,  e  “Compartilhar”
	And: Eu clico em “Remover da Playlist”
	And: A mensagem “Deseja Remover a Música?” é exibida
	And: Eu clico em “Sim”
	Then: A página da playlist “Músicas Para Viagem” é exibida novamente
	
