- Feature: Update restaurant
    As a admin, I want to change my restaurant's information to keep your data up to date

    i Scenario: Client update restaurant data successfully
        Given Eduardo is the restaurant system admin 
        And want to change the street name of the restaurant
        And is on the "Edit restaurant" screen
        And change the data from the field "Restaurant name" to "Recanto do Edu"
        When try to finish the restaurant data update
        Then a success message shows up

    ii Scenario: Client insert the wrong current password by changing the password
        Given Eduardo is the restaurant system admin 
        And want to change the password of the account
        And is on the "Edit restaurant" screen
        And the current password of the account is "edu123"
        And he place the password "eduedu" in the current password field
        When try to finish the restaurant data update
        Then an error message shows up saying that the current password given is wrong
        And he can close the modal and get back to the edition screen