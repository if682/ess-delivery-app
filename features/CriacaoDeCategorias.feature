Feature: Criação de categorias de itens
    As a usuaria do sistema
    I want to acessar a tela de categorias de itens
    So that eu posso facilitar a busca de itens por categorias

    Scenario: Acessar a tela de categorias de itens
        Given que eu sou um usuário do sistema
        And que eu estou na página inicial
        When eu clico no botão "Categorias de itens"
        Then eu devo ser redirecionada para a página "Categorias de itens"
        And eu vejo a lista com todas as categorias de itens cadastradas no sistema
    
    Scenario: Acessar uma categoria de itens
        Given que eu sou um usuário do sistema
        And que eu estou na página "Categorias de itens"
        And que eu vejo a lista com todas as categorias de itens cadastradas no sistema
        When eu clico na categoria "Pratos"
        Then eu devo ser redirecionado para a página "Pratos"
        And eu vejo a lista com todos os itens da categoria "Pratos"
    
    Scenario: Acessar a página de itens de uma categoria
        Given que eu sou um usuário do sistema
        And que eu estou na página "Pratos"
        And que eu vejo a lista com todos os itens da categoria "Pratos"
        When eu clico no item "Macarrão"
        Then eu devo ser redirecionado para a página "Macarrão"
        And eu vejo uma lista com todos os itens "Macarrão" cadastrados no sistema
        And eu vejo o restaurante que oferece cada item "Macarrão"

    Scenario: Acessar a página de um restaurante pela página de um item
        Given que eu sou um usuário do sistema
        And que eu estou na página "Macarrão"
        And que eu vejo a lista com todos os itens "Macarrão" cadastrados no sistema
        And eu vejo o item "Macarrão com molho de tomate" do restaurante "Massas e Cia"
        When eu clico no item "Macarrão com molho de tomate"
        Then eu devo ser redirecionado para a página do restaurante "Massas e Cia"
        And eu vejo o item "Macarrão com molho de tomate" em evidencia na página do restaurante
        And eu vejo o preço do item
        And eu vejo a descrição do item
    
    Scenario: Acessar uma categoria de itens sem item
        Given que eu sou um usuário do sistema
        And que eu estou na página "Categorias de itens"
        And que eu vejo a lista com todas as categorias de itens cadastradas no sistema
        When eu clico na categoria "Bebidas"
        Then eu devo ser redirecionado para a página "Bebidas"
        And eu vejo a mensagem "Não há itens cadastrados nessa categoria"
        And eu vejo o botão "Voltar"
        When eu clico no botão "Voltar"
        Then eu devo ser redirecionado para a página "Categorias de itens"