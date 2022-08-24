Feature: Adding artists to the database and users
    As an artist
    I want to edit my personal artist page
    So that I can personalize my page

    Scenario: Editing my informations
        Given that I am in my artist page
        When I go to edit my informations
        And change the "Country" field to "Brasil"
        And I choose to save
        Then I'm on my artist page

    Scenario: Add a Banner
        Given I am in my artist page
        When I go to edit my informations
        And I upload "Banner.png"
        And I save the changes
        Then I should see a new banner on my artist page

    Scenario: Leaving a field blank
        Given I am in my artist page
        When I choose to edit my informations
        And leave "Nome" blank
        And I save the changes
        Then I should see an error message saying "Campo obrigatório vazio"

    Scenario: Sending invalid field
        Given I am in my artist page
        When I choose to edit my informations
        And I change the "Email" field to "emailinválido"
        And I save the changes
        Then I should see an error message saying "Campo com informações inválidas"