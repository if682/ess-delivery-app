Feature: Uma página com todas as avaliações sobre uma determinada atração
        As um cliente
        I quero abrir a página de avaliações 
        So that eu posso ver avaliações de antigos cliente sobre atrações e fazer avaliações sobre atrações que fui cliente

    Scenario: abrir a página "Avaliações"
        Given eu estou logado como um "customer" com nome "José"
        And estou na página "Atrações"
        And eu vejo a atração "Passeio de 1 dia com almoço em angra dos reis"
        And eu vejo a informação que 90% dos clientes gostaram da atração
        When eu clico o botão "Ver todas as avaliações"
        Then eu posso ver uma nova página "Avaliações"
        And posso ver todas as avaliações criadas anteriormente por outros clientes

    Scenario: Ordenar avaliações pelas mais recentes
        Given eu estou logado como um "cliente" com nome "José"
        And estou na página "Avaliações"
        And eu vejo que as avaliações estão ordenadas como "Mais relevante"
        When eu clico o botão "Ordenar por"
        And eu seleciono a opção "mais recente"
        Then eu posso ver todas as avaliações ordenadas pelas mais recentes

    Scenario: Ordenar avaliações pelas mais recentes
        Given eu estou logado como um "cliente" com nome "José"
        And estou na página "Avaliações"
        And eu vejo que as avaliações estão ordenadas como "Mais relevante"
        When eu clico o botão "Ordenar por"
        And eu seleciono a opção "mais antigas"
        Then eu posso ver todas as avaliações ordenadas pelas mais antigas

    Scenario: Marcar uma avaliação como "Útil"
        Given estou logado como "cliente" com nome "José"
        And estou na página "Avaliações"
        And eu vejo uma avaliação criada por outro cliente chamado "Fulano Sicrano da Silva"
        When eu clico botão "Útil"
        Then eu posso ver a mensagem "Você achou essa avaliação útil"

    Scenario: Fazendo uma avaliação sobre a atração - Sucesso
        Given Estou logado como um "cliente" com nome "José"
        And Estou na página "Avaliações"
        When Eu tento criar uma avaliação clicando o botão "fazer avaliação"
        And Eu preencho a avaliação "Limpeza" com 5 estrelas
        And Eu preencho a avaliação "Conforto" com 4 estrelas
        And Eu preencho a avaliação "Segurança" com 5 estrelas
        And Eu preencho a avaliação "Localização" com 5 estrelas
        And Eu preencho a avaliação "WIFI" com 3 estrelas
        And Eu escrevo um comentário "Gostei do hotel..." na caixa de comentário
        And Eu termino a avaliação clicando no botão "Enviar"
        Then Eu vejo uma mensagem "Avaliação feita com sucesso"
        And Eu volto para a página "Avaliações"
        And Eu posso ver minha avaliação publicada

    Scenario: Fazendo uma avaliação sobre a atração - Erro
        Given Estou logado como um "cliente" com nome "José"
        And Estou na página "Avaliações"
        When Eu tento criar uma avaliação clicando o botão "fazer avaliação"
        And Eu preencho a avaliação "Limpeza" com 5 estrelas
        And Eu preencho a avaliação "Conforto" com 4 estrelas
        And Eu preencho a avaliação "Localização" com 5 estrelas
        And Eu preencho a avaliação "WIFI" com 3 estrelas
        And Eu escrevo um comentário "Gostei do hotel..." na caixa de comentário
        And Eu termino a avaliação clicando no botão "Enviar"
        Then Vejo uma mensagem de erro "Preencha todos os campos"
        And Continuo na página de preenchimento de avaliação
