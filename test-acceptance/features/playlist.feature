Feature: Criação de uma playlist
	As a usuário da plataforma
	I want to poder criar várias playlists
	So that eu possa utilizá-las

Scenario: Criando nova playlist
	Given Eu estou logado como “icaroGeovany”
	And Eu estou na página “Minhas Playlists”
	When Eu clico na opção “Criar uma nova playlist”
	And O sistema exibe uma tela para adicionar o nome, descrição e privacidade
	And Preencho todos os campos corretamente
	And Eu clico em “Criar Playlist”
	Then O sistema me direciona para a página da nova playlist


Scenario: Erro na criação de uma nova playlist
	Given Eu estou logado como o usuário “jv_soares”
	And Eu estou na página “Minhas Playlists”
	When Eu clico na opção “Criar uma nova playlist”
	And O sistema exibe uma tela para adicionar o nome, descrição e privacidade
	And Preencho todos os campos, menos o de privacidade
	And Eu clico em “Criar Playlist”
	Then O sistema retorna a página de criação me alertando que há um campo em branco