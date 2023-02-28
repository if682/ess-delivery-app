Feature: "Avaliar filme"

As a usuário
I want to avaliar os filmes
So that eu possa compartilhar a minha opinião

Scenario: Avaliação de um filme bem sucedida

    Given eu estou na página do filme "Madagascar"
      And eu estou logado como o usuário "Pedro" com senha "Agua123!"
      And eu ainda não tenho uma nota pessoal do filme "Madagascar"
    When eu tento avaliar o filme "Madagascar" com nota "10"
      And confirmo
    Then o sistema mostra uma mensagem de sucesso
      And eu ainda estou na página do filme "Madagascar
      And eu consigo ver que minha nota pessoal do filme "Madagascar" agora é "10"

Scenario: Falha no registro da avaliação de um filme 

    Given eu estou na página do filme "Carros 2"
      And eu estou logado como o usuário "Pedro" com senha "Agua123!"
      And eu ainda não tenho uma nota pessoal para o filme "Carros 2"
    When eu tento avaliar o filme "Carros 2" sem colocar nenhuma nota
      And confirmo
    Then o sistema mostra uma mensagem de falha indicando que faltou colocar uma nota
      And eu ainda não tenho uma nota pessoal para o filme "Carros 2"
      And eu ainda estou na página do filme "Carros 2"

Scenario: Re-avaliação de um filme

    Given eu estou na página do filme "Shrek"
      And eu estou logado como o usuário "Pedro" com senha "Agua123!"
      And minha nota pessoal do filme "Shrek" é "9"
    When eu tento avaliar o filme "Shrek" com nota "8"
      And confirmo
    Then o sistema mostra uma mensagem de sucesso
      And eu ainda estou na página do filme "Shrek"
      And eu consigo ver que minha nota pessoal do filme "Shrek" agora é "8"


Scenario: Avaliação de um filme com menos de 4 reviews

    Given eu estou na página do filme "Madagascar"
      And eu estou logado como o usuário "Pedro" com senha "Agua123!"
      And eu ainda não tenho uma nota pessoal para o filme "Madagascar"
      And o filme "Madagascar" ainda não tem uma nota geral
      And o filme "Madagascar" tem 3 avaliações com notas "9", "9" e "9" 
    When eu tento avaliar o filme madagascar com nota "10"
      And confirmo
    Then o sistema mostra uma mensagem de sucesso
      And eu ainda estou na página do filme "Madagascar"
      And eu consigo ver que minha nota pessoal para o filme "Madagascar" agora é "10"
      And eu consigo ver que o filme "Madagascar" ainda não tem uma nota geral


Scenario: Avaliação de um filme com 4 reviews

    Given eu estou na página do filme "Madagascar"
      And eu estou logado como o usuário "Pedro" com senha "Agua123!"
      And o filme "Madagascar" ainda não tem uma nota geral
      And o filme "Madagascar" tem 4 avaliações com notas "8", "9", "9" e "9" 
      And eu ainda não tenho uma nota pessoal para o filme "Madagascar"
    When eu tento avaliar o filme madagascar com nota "10"
      And confirmo
    Then o sistema mostra uma mensagem de sucesso
      And eu ainda estou na página do filme "Madagascar"
      And eu consigo ver que "Madagascar" agora tem uma nota geral "9"
      And eu consigo ver que minha nota pessoal para o filme "Madagascar" é "10"

Scenario: Tentar avaliar filme como visitante

    Given eu estou na página do filme "Madagascar"
      And eu não estou logado 
    When eu tento avaliar o filme "Madagascar"
    Then eu sou redirecionado para a página de "Login"
