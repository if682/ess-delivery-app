Feature: Adicionar uma nova música na plataforma
	As a funcionário da plataforma
	I want to adicionar novas músicas de determinados artistas
	So that a plataforma se mantenha atualizada e o catálogo dos artistas 
	completos


Scenario: Adicionando uma nova música 
    Given Estou logado como “admin” 
    And Estou na página do artista “Bruno Miranda” 
    And Eu quero adicionar a música “Cenário Louco”
    When Eu clico para adicionar uma nova música 
    Then O sistema solicita as informações da música 
    And Eu preencho todas as informações 
    And Eu clico em “salvar”
    Then A música aparece disponível na página do artista

Scenario: Erro ao adicionar uma nova música
    Given Estou logado como “admin” 
    And Estou na página do artista “Local Natives” 
    And Eu quero adicionar a música “I Saw You Close Your Eyes” 
    When Eu clico para adicionar uma nova música 
    And O sistema solicita as informações da música 
    And Eu preencho o campo com o nome da música 
    When Eu clico em “Salvar” 
    Then Nada acontece

Scenario: Removendo uma música
    Given Estou logado como “admin” 
    And Estou na página da artista “Rihanna” 
    And Eu clico nas músicas da artista
    Then Uma lista com as músicas do artista é exibida
    When Eu clico na opção ao lado da música “Only Girl”
    And O sistema me exibe várias opções 
    And Eu clico na opção de “Remover Música”
    And O sistema me exibe a música e suas informações 
    When Eu clico novamente para remover
    Then Uma mensagem de êxito é exibida
    And A página do artista é exibida novamente sem a música
	
    Scenario: Atualizando uma música
    Given Estou logado como “admin” 
    And Estou na página das músicas do artista  “Local Natives” 
    When Eu clico na opção ao lado da música “When Am I Gonna”
    Then O sistema me exibe várias opções 
    When Eu clico na opção de “Atualizar Informações”
    Then O sistema me exibe a música e suas informações de forma 
    editável 
    And Eu atualizo o nome da música para “When Am I Gonna Lose You”
    And Eu clico em “salvar”
    Then Uma mensagem de êxito é exibida