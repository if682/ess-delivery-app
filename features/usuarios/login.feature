Feature: Login
    As um usuário cadastrado na aplicação
    I want to inserir minhas credênciais de acesso e enviá-las para o servidor de forma segura
    So that eu consiga acessar todas as features internas apenas cabíveis ao meu nível de acesso e ao meu usuário particular, as quais são apenas acessiveis após um processo de autenticação bem sucedido

Scenario: Login bem sucedido na aplicação
	Given o usuário "lucas" de senha "nsin" está corretamente registrado no sistema com permissões de "user"
    And eu estou na página "Login" da aplicação
    And eu insiro corretamente os dados do campo "usuário" como "lucas", "senha" como "nsin"
    aeiou
    Then eu sou redirecionado para a rota "Dashboard"
    And eu consigo acessar as features de "playlist" e de "Configurações de Usuário" com permissões de "user"
