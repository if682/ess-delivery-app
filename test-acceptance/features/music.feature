Feature: Adicionar uma nova música na plataforma
	As a usuário administrador
	I want to adicionar novas músicas de determinados artistas
	So that a plataforma se mantenha atualizada e o catálogo dos artistas 
	completos


Scenario: Adicionando uma nova música 
    Given Estou logado como Administrador 
    And Estou na página do artista “Bruno Miranda” 
    And Eu quero adicionar a música “Cenário Louco”
    When Eu clico para adicionar uma nova música 
    And O sistema solicita as informações da música 
    And Eu preencho Nome, Data de Publicação e Gênero 
    And Eu clico em “Salvar”
    Then A música é registrada no sistema
    And A música aparece disponível na página do artista

Scenario: Erro ao adicionar uma nova música
    Given Estou logado como Administrador
    And Estou na página do artista “Local Natives”
    And Eu quero adicionar a música “I Saw You Close Your Eyes”
    When Eu clico para adicionar uma nova música
    And O sistema solicita as informações da música
    And Eu preencho Data de Publicação e Gênero 
    And Eu clico em “Salvar”
    Then A música não é adicionada ao sistema

Scenario: Removendo uma música
    Given Estou logado como Administrador
    And Estou na página da artista “Rihanna”
    And Eu clico na opção de edição da música “Only Girl”
    And O sistema me exibe os campos Nome, Data de Publicação e Gênero, além das opções para Salvar Alterações e Deletar Música
    When Eu clico na opção de “Remover Música”
    Then A música é removida
    And Uma mensagem de êxito é exibida
    And A página do artista é exibida novamente sem a música
	
Scenario: Atualizando uma música
    Given Estou logado como Administrador
    And Estou na página das músicas do artista  “Local Natives” 
    And Eu clico na opção ao lado da música “When Am I Gonna”
    And O sistema me exibe os campos Nome, Data de Publicação e Gênero, além das opções para Salvar Alterações e Deletar Música
    When Eu atualizo o nome da música para “When Am I Gonna Lose You”
    And Eu clico em “salvar”
    Then A informação é atualizada no sistema
    And Uma mensagem de êxito é exibida
    And A página do artista é exibida novamente com o nome da música atualizado para “When Am I Gonna Lose You”