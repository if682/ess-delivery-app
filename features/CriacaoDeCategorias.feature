Feature: Criação de categorias de itens
    As a usuário do sistema dono de um restaurante
    I want to gerenciar categorias de itens
    So that eu possa categorizar os itens do meu restaurante

    Scenario: Acessar a tela de categorias de itens
        Given que eu estou logado como "Admin" com o login "pepe"
        And meu restaurante se chama "LaFamme"
        And que eu estou na página "Início"
        When eu clico na aba de navegação "Categorias"
        Then eu devo ser redirecionado para a página "Categorias" do restaurante "LaFamme"
        And eu vejo a lista com todas as categorias de itens cadastradas no sistema para o restaurante "LaFamme"
    
    Scenario: Criar uma categoria com sucesso
        Given que eu estou logado como "Admin" com o login "pepe"
        And meu restaurante se chama "LaFamme"
        And que eu estou na página "Início"
        When eu clico na aba de navegação "Categorias"
        Then eu devo ser redirecionado para a página "Categorias" do restaurante "LaFamme"
        When eu clico no botão "Nova categoria"
        Then surgirá um campo de texto "Nome da categoria"
        When eu preencho o campo "Nome da categoria" com "Bolos"
        And clico no botão "Adicionar"
        Then o sistema armazenará a categoria "Bolos" para o restaurante "LaFamme"
    
    Scenario: Tentar criar uma categoria com um nome já existente
        Given que eu estou logado como "Admin" com o login "pepe"
        And meu restaurante se chama "LaFamme"
        And o restaurante "LaFamme" possui a categoria "Pratão"
        And que eu estou na página "Início"
        When eu clico na aba de navegação "Categorias"
        Then eu devo ser redirecionado para a página "Categorias" do restaurante "LaFamme"
        When eu clico no botão "Nova categoria"
        Then surgirá um campo de texto "Nome da categoria"
        When eu preencho o campo "Nome da categoria" com "Pratão"
        And clico no botão "Adicionar"
        Then eu vejo uma mensagem dizendo "Essa categoria já existe!"
            
    Scenario: Tentar criar uma categoria com um nome vazio
        Given que eu estou logado como "Admin" com o login "pepe"
        And meu restaurante se chama "LaFamme"
        And que eu estou na página "Início"
        When eu clico na aba de navegação "Categorias"
        Then eu devo ser redirecionado para a página "Categorias" do restaurante "LaFamme"
        When eu clico no botão "Nova categoria"
        Then surgirá um campo de texto "Nome da categoria"
        When eu preencho o campo "Nome da categoria" com ""
        And clico no botão "Adicionar"
        Then eu vejo uma mensagem dizendo "O nome da categoria não pode ser vazio!"

    Scenario: Excluir uma categoria com sucesso
        Given que eu estou logado como "Admin" com o login "pepe"
        And meu restaurante se chama "LaFamme"
        And o restaurante "LaFamme" possui a categoria "Pratão"
        And que eu estou na página "Início"
        When eu clico na aba de navegação "Categorias"
        Then eu devo ser redirecionado para a página "Categorias" do restaurante "LaFamme"
        When eu clico no botão "Remover" da categoria "Pratão"
        Then surgirá um pop-up de confirmação perguntando "Você realmente deseja excluir a categoria? Todos os itens que pertencem a ela também serão excluídos!"
        When eu clico no botão "Confirmar"
        And o sistema excluirá a categoria "Pratão" do restaurante "LaFamme"

    Scenario: Cancelar a Criação de uma categoria
        Given que eu estou logado como "Admin" com o login "pepe"
        And meu restaurante se chama "LaFamme"
        And que eu estou na página "Início"
        When eu clico na aba de navegação "Categorias"
        Then eu devo ser redirecionado para a página "Categorias" do restaurante "LaFamme"
        When eu clico no botão "Nova categoria"
        Then surgirá um campo de texto "Nome da categoria"
        When eu preencho o campo "Nome da categoria" com "Pratão"
        And clico no botão "Cancelar"
        Then o sistema não armazenará a categoria "Pratão" para o restaurante "LaFamme"
    
    Scenario: Cancelar a Exclusão de uma categoria
        Given que eu estou logado como "Admin" com o login "pepe"
        And meu restaurante se chama "LaFamme"
        And o restaurante "LaFamme" possui a categoria "Pratão"
        And que eu estou na página "Início"
        When eu clico na aba de navegação "Categorias"
        Then eu devo ser redirecionado para a página "Categorias" do restaurante "LaFamme"
        When eu clico no botão "Remover" da categoria "Pratão"
        Then surgirá um pop-up de confirmação perguntando "Você realmente deseja excluir a categoria? Todos os itens que pertencem a ela também serão excluídos!"
        When eu clico no botão "Cancelar"
        And o sistema não excluirá a categoria "Pratão" do restaurante "LaFamme"