Feature: Criação de categorias de itens
    As a administrador
    I want criar categorias de itens
    So that categorizar os itens do meu restaurante

    Scenario: Acessar página de categorias de itens
        Given eu sou administrador do restaurante "James Pizzas"
        And estou na página do restaurante
        When clico em "Categorias de itens"
        Then vejo a página "Categorias de itens"
        And vejo o botão "Criar categoria"

    Scenario: Criar categoria de itens
        Given eu sou administrador do restaurante "James Pizzas"
        And estou na página "Categorias de itens"
        And não vejo a categoria "Pizzas"
        When clico em "Criar categoria"
        Then vejo a janela "Criar categoria"
        And vejo o campo "Nome" e o botão "Criar"
        When preencho o campo "Nome" com "Pizzas"
        And clico em "Criar"
        Then vejo a página "Categorias de itens"
        And vejo a categoria "Pizzas"
        And vejo os botões "Adicionar itens" e "Remover categoria" 

    Scenario: Criar categoria de itens com nome já existente
        Given eu sou administrador do restaurante "James Pizzas"
        And a categoria "Pizzas" já existe
        And estou na página "Categorias de itens"
        When clico em "Criar categoria"
        Then vejo a janela "Criar categoria"
        And vejo o campo "Nome" e o botão "Criar"
        When preencho o campo "Nome" com "Pizzas"
        And clico em "Criar"
        Then vejo a janela "Criar categoria"
        And vejo a mensagem "Nome já está em uso" ao lado do botão "Criar"

    Scenario: Criar categoria de itens com nome vazio
        Given eu sou administrador do restaurante "James Pizzas"
        And estou na página "Categorias de itens"
        When clico em "Criar categoria"
        Then vejo a janela "Criar categoria"
        And vejo o campo "Nome" e o botão "Criar"
        When clico em "Criar"
        Then vejo a janela "Criar categoria"
        And vejo a mensagem "Nome não pode ficar em branco" ao lado do botão "Criar"
    
    Scenario: Remover categoria de itens
        Given eu sou administrador do restaurante "James Pizzas"
        And estou na página "Categorias de itens"
        And vejo as categorias "Pizzas", "Bebidas" e "Sobremesas"
        When clico em "Remover categoria" da categoria "Pizzas"
        Then vejo a página "Categorias de itens"
        And vejo as categorias "Bebidas" e "Sobremesas"
        And não vejo a categoria "Pizzas"

    Scenario: Adicionar itens a uma categoria
        Given eu sou administrador do restaurante "James Pizzas"
        And estou na página "Categorias de itens"
        When clico em "Adicionar itens" da categoria "Pizzas"
        Then vejo a janela "Adicionar itens"
        And vejo todos os itens do restaurante
        When seleciono o item "Pizza de Calabresa"
        And clico em "Adicionar"
        Then vejo a página "Categorias de itens"
        And vejo a categoria "Pizzas"
        And vejo os itens da categoria "Pizzas"
        And vejo o item "Pizza de Calabresa"
        And vejo o botão "Remover item" ao lado do item "Pizza de Calabresa"
    
    Scenario: Adicionar itens repetidos a uma categoria
        Given eu sou administrador do restaurante "James Pizzas"
        And estou na página "Categorias de itens"
        And vejo a categoria "Pizzas"
        And vejo o item "Pizza de Calabresa"
        When clico em "Adicionar itens" da categoria "Pizzas"
        Then vejo a janela "Adicionar itens"
        And vejo todos os itens do restaurante
        When seleciono o item "Pizza de Calabresa"
        And clico em "Adicionar"
        Then vejo a janela "Adicionar itens"
        And vejo a mensagem "Item já está na categoria" ao lado do botão "Adicionar"
    
    Scenario: Remover itens de uma categoria
        Given eu sou administrador do restaurante "James Pizzas"
        And estou na página "Categorias de itens"
        And vejo a categoria "Pizzas"
        And vejo o item "Pizza de Calabresa", "Pizza de Frango" e "Pizza de Mussarela"
        When clico em "Remover item" ao lado do item "Pizza de Calabresa"
        Then vejo a página "Categorias de itens"
        And vejo a categoria "Pizzas"
        And vejo os itens da categoria "Pizzas"
        And não vejo o item "Pizza de Calabresa"
    