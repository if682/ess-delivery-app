Feature: Adicionar uma nova música na plataforma
	Como um funcionário da plataforma
	Eu quero adicionar novas músicas de determinados artistas
	Para que a plataforma se mantenha atualizada e o catálogo dos artistas 
	completos


Cenário 1: Adicionando uma nova música
		Given: Estou logado como “admin” com email "admin@dizer.com" e 
		senha "admin"
		And: Estou na página do single “Cenário Louco”
		 do artista “Bruno Miranda” 
		And: Eu quero adicionar a música “Cenário Louco”
		When: Eu clico em “Adicionar uma Nova Música”
		And: O sistema solicita as informações da música 
		And: Eu preencho os campos de “Nome da Música” com "Cenário Louco",  “Artista/Banda” com "Bruno Miranda" e 
		“Ano de Lançamento” com "2022"
		And: Eu clico em “salvar”
		And: A música “Cenário Louco” deve estar disponível na página do single 
		"Cenário Louco” do artista “Bruno Miranda” após a adição com sucesso




	Cenário 2: Adicionando um novo single
		Given: Estou logado como “admin” com email "admin@dizer.com" e 
		senha "admin"
		And: Estou na página de singles do artista “Bruno Miranda” 
		And: Eu quero adicionar a música “Cenário Louco”
		When: Eu clico para adicionar um novo single
		Then: O sistema solicita as informações do single 
		And: Eu preencho os campos de “Nome do Single”,  “Artista/Banda”, 
		“Ano de Lançamento”
		And: Eu clico em “salvar”
		And: O single “Cenário Louco” aparece disponível na página de singles 
		do artista “Bruno Miranda”

	Cenário 3: Erro ao adicionar um novo single
		Given: Estou logado como “admin” com email "admin@dizer.com" e 
		senha "admin"
		And: Estou na página de singles do artista “Local Natives” 
		And: Eu quero adicionar a música “I Saw You Close Your Eyes” 
		When: Eu clico para adicionar um novo single
		And: O sistema solicita  o “Nome do Single”, “Artista/Banda”, 
		“Ano de Lançamento”
		And: Eu preencho o campo “Nome do Single” com 
		“I Saw You Close Your Eyes”
		When: Eu clico em “Salvar” 
		Then: Uma mensagem de “Informações Incompletas” é exibida na tela, 
		e eu volto para a página para adicionar as informações

	Cenário 4: Removendo uma música de um single
		Given: Estou logado como “admin” com email "admin@dizer.com" e 
		senha "admin"
		And: Estou na página do single ‘Only Girl” da artista “Rihanna” 
		And: Eu clico na opção ao lado da música “Only Girl”
		And: O sistema me exibe as opções “Tocar A Seguir”, “Adicionar à fila”, 
		“Adicionar a Uma Playlist”, “Remover Musica da Plataforma”, “Ir Para 
		Página do Artista”, “Editar Informações” e “Compartilhar”
		And: Eu clico na opção de “Remover Musica da Plataforma”
		And: A mensagem “Deseja remover a músicas?” é exibida
		When: Eu clico na opção “Sim”
		Then: Uma mensagem de êxito é exibida
		And: A página do single é exibida novamente sem a música

	
Cenário 5: Atualizando um single
		Given: Estou logado como “admin” com email "admin@dizer.com" e 
		senha "admin"
		And: Estou na página do single “When Am I Gonna Lose You” do artista  
		“Local Natives” 
		And: Eu clico na opção de “Editar” na página do single
		And: O sistema me exibe uma página com as informações “Nome do 
		Single”, “Nome do Artista/Banda” e “Ano de Lançamento” de forma 
		editável
		When: Eu mudo o “Ano de Lançamento” de “2017” para “2019’
		And: Eu clico em “Salvar Informações”
		Then: Uma mensagem de “Atualização Realizada” é exibida na tela
		And: Eu volto para página do single “When Am I Gonna Lose You” com 
		o ano de lançamento “2019
		And: Uma mensagem de êxito é exibida
