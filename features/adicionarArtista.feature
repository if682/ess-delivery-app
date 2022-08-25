Feature: Adding artists to the database and users
    As a user
    I want to create my personal artist page
    So that I can reach more people

    Scenario: Adding a new artist
        Given I am at the register page
        When I fill in "Nome" with "Juninho da Silva Sauro"
        And I fill in "Email" with "emailvalido@gmail.com"
        And I fill in "País" with "Brasil"
        And I fill in "Estilo musical" with "Rock"
        And I try to create my account
        Then you should be on "Juninho da Silva Sauro" artist page

    Scenario: Adding already existing artist
        Given "Juninho da Silva Sauro" is already created
        And I am at the register page
        When I fill in "Nome" with "Juninho da Silva Sauro"
        And I fill in "Email" with "emailvalido@gmail.com"
        And I fill in "País" with "Brasil" 
        And I fill in "Estilo musical" with "Rock"
        And I try to create my account
        Then I should see an error message "Artist já existe"

    Scenario: Failing to create an artist by not specifying a name
        Given I am at the register page
        When I fill in "Email" with "emailvalido@gmail.com"
        And I fill in "País" with "Brasil"
        And I fill the "Estilo musical" with "Rock"
        And I try to create my account
        Then I should see an error message "Um nome é requerido"

    Scenario: Failing to create an artist by not specifying a genre
        Given I am at the register page
        When I fill in "Email" with "emailvalido@gmail.com"
        And I fill in "Nome" with "Juninho da Silva Sauro"
        And I fill in "País" with "Brasil"
        And I try to create my account
        Then I should see an error message "Um estilo musical é requerido"

    Scenario: Failing to create an artist by not giving a valid email
        Given I am at the register page
        When I fill in "Email" with "emailinvalidvalido"
        And I fill in "Nome" with "Juninho da Silva Sauro"
        And I fill in "País" with "Brasil"
        And I try to create my account
        Then I should see an error message "Email inválido"