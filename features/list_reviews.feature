Feature: List reviews
As an user
I want to list reviews
So that I can see reviews about movies


    Cenário: Listar reviews do usuário (bem-sucedido)
    (Given) Dado que estou na página do usuário,
    (And) E o usuário registrou reviews dos filmes “A Órfã”, “Clube da Luta” e “Clube dos Cinco” 
    (When) Quando eu acesso “Lista de reviews”,
    (Then) São exibidas as reviews dos filmes  “A Órfã”, “Clube da Luta” e “Clube dos Cinco” 

    Cenário: Listar reviews do filme (bem-sucedido)
    (Given) Dado que estou na página do Filme “O Bebê de Rosemary”,
    (And) E o filme tem pelo menos uma review registrada no sistema,
    (When) Quando eu clico em “Listar Reviews”,
    (Then) Eu continuo na página do Filme,
    (And) E uma lista com as reviews registradas por todos os usuários é exibida em ordem cronológica.
