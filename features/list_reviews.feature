Feature: List reviews
As an user
I want to list reviews
So that I can see reviews about movies


    Cenário: Listar reviews do usuário (bem-sucedido)
        Given estou na página do usuário,
        And o usuário registrou reviews dos filmes “Fallen Angels” e “Perfect Blue” 
        When eu acesso “Reviews”,
        Then são exibidas as reviews dos filmes  “Fallen Angels" e "Perfect Blue” 

    Cenário: Listar reviews do filme (bem-sucedido)
        Given estou na página do Filme “O Bebê de Rosemary”,
        And o filme tem pelo menos uma review registrada no sistema,
        When eu clico em “Reviews”,
        Then eu continuo na página do Filme,
        And E uma lista com as reviews registradas por todos os usuários é exibida em ordem cronológica.

    Cenário: Listar review de filme ainda não possui reviews de usuários (malsucedido)
        Given que estou na página do filme “Scream”,
        And e não há nenhuma review registrada por nenhum usuário no sistema,
        When eu clico em "Reviews”,
        Then eu continuo na página “Detalhes do Filme”,
        And nenhuma review é exibida
        And é exibida uma mensagem que o filme ainda não possui reviews
        
    Cenário: Listar reviews de usuário sem reviews (mal-sucedido)
        Given que estou na página do usuário,
        And o usuário “Mia Goth” não possui nenhuma review registrada em sua conta,
        When eu clico em “Reviews”,
        Then eu continuo na página “Perfil do Usuário”,
        And Nenhuma review é exibida.
        And Alguma coisa é exibida
        Then Alguma outra coisa acontece
    
    Cenário: Listar reviews de filme não cadastrado (malsucedido)
        Given o filme “O Bebê de Rosemary” não está registrado no sistema
        When o usuário solicitar a lista de reviews do filme 
        Then o sistema deve mostrar uma mensagem de erro
        And não exibir nenhuma review

    Cenário: Listar reviews de um usuário banido (malsucedido)
        Given que estou na página "Perfil do Usuário",
        And o usuário "Joaozinho" teve sua conta banida,
        When eu clico em "Reviews",
        Then Eu continuo na página "Perfil do Usuário",
        And Não é possível acessar ou listar as revisões deste usuário.

