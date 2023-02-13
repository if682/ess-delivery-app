Feature: Gerenciando itens de uma playlist
	As a usuário da plataforma
	I want to poder adicionar ou remover músicas de uma playlist
	So that a playlist esteja de meu agrado
	
Scenario: Adicionando uma nova música na minha playlist
	Given Eu estou logado como o usuário “aliceSaless”
	And Eu estou na página da minha playlist “Relax”
	When Eu clico em “Adicionar Música”
	Then Uma lista de músicas é exibida
	And Eu clico em “Pesquisar Música”
	And Eu pesquiso a música “Knew No Better”
	When Eu clico no botão de adicionar ao lado da música
	And Eu clico em “Conluído”
	Then A página da minha playlist é exibida novamente com a música 
	“Knew No Better”
Scenario: Adicionando uma música já existente em uma playlist
	Given Eu estou logado como o usuário “romulo_daniell”
	And Eu estou na página da playlist do sistema “Músicas Pop”
	When Eu clico em opções da música “Anti-Hero”
	And Eu clico em “Adicionar Música a Uma Playlist”
	And Eu clico para adicionar a música “Anti-Hero” na minha playlist 
	“Músicas Para Viagem”
	Then A mensagem “Essa música já se encontra na playlist” é exibida
	And A página com as minhas playlists é exibida novamente 

Scenario: Removendo uma música de uma playlist
	Given Eu estou logado como o usuário “romulo_daniell”
	And Eu estou na página da minha playlist “Músicas Para Viagem”
	When Eu clico em “opções” na música “Anti-Hero”
	Then Uma lista de opções é exibida
	When Eu clico em “Remover Música”
	Then A mensagem “Deseja Remover a Música?” é exibida
	And Eu clico em “Sim”
	And A página da playlist é exibida novamente sem a música 
	“Anti-Hero”