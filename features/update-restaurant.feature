- Feature: Update restaurant
    As a admin, I want to change my restaurant's information to keep your data up to date

    i Scenario: Client update restaurant data successfully
        Given Eduardo is the restaurant system admin 
        And want to change the street name of the restaurant
        And is on the "Edit restaurant" screen
        And change the data from the field "Restaurant name" to "Recanto do Edu"
        When try to finish the restaurant data update
        Then a success message shows up