- Feature: Update restaurant
    As a admin, I want to change my restaurant's information to keep your data up to date

    i Scenario: Client update restaurant data successfully
        Given Eduardo is the restaurant system admin
        And the password of the account is "12345678"
        And want to change the name of the restaurant
        And is on the "Edit restaurant" screen
        And change the data from the field "Restaurant name" to "Recanto do Edu"
        When try to finish the restaurant data update
        And put the password "12345678" on the confirmation modal
        Then a success message shows up

    ii Scenario: Client try to edit restaurant data but put the wrong password on confirmation
        Given Eduardo is the restaurant system admin
        And the password of the account is "12345678"
        And want to change the name of the restaurant
        And is on the "Edit restaurant" screen
        And change the data from the field "Restaurant name" to "Recanto do Edu"
        When try to finish the restaurant data update
        And put the password "1234abcde" on the confirmation modal
        Then an error message shows up saying that the confirmation password is wrong
        And he can close the modal and get back to the edition screen

    iii Scenario: Client insert an invalid CNPJ
        Given Eduardo is the restaurant system admin 
        And want to change the CNPJ of the restaurant
        And is on the "Edit restaurant" screen
        And he place the CNPJ 1234567800019 in the CNPJ field
        When try to finish the restaurant data update
        Then an error message shows up saying that the CNPJ given is invalid
        And he can close the modal and get back to the edition screen

    iv Scenario: Client leave a mandatory field blank
        Given Eduardo is the restaurant system admin 
        And want to change the street name of the restaurant
        And is on the "Edit restaurant" screen
        And change the data from the field "Restaurant name" to "" (empty string)
        When try to finish the restaurant data update
        Then an error message is showed below the street name field saying that the field needs to be filled
        And he can close the modal and get back to the edition screen
        
    v Scenario: Client change the restaurant profile picture successfully
        Given Eduardo is the restaurant system admin
        And the password of the account is "12345678"
        And want to change the profile picture of the restaurant
        And is on the "Edit restaurant" screen
        And clicking on the edit button, the computer file selector opens
        And upload an image from the computer
        When the upload of the image is finished
        And try to finish the restaurant data update
        And put the password "12345678" on the confirmation modal
        Then a success message shows up
        And the profile appears with the new profile picture on it

    Scenario: Client add a payment method successfully
        Given Eduardo is the restaurant system admin
        And the password of the account is "12345678"
        And is on the "Edit restaurant" screen
        When Eduardo add the payment method "pix" for the restaurant
        And try to finish the restaurant data update
        And put the password "12345678" on the confirmation modal
        Then a success message shows up
        And the payment method "pix" shows up in the payment metod area
        
    Scenario: Restaurant change the opening hours successfully
        Given Eduardo is the restaurant system admin
        And the password of the account is "12345678"
        And is on the "Edit restaurant" screen
        When Eduardo change the opening hour in "segunda-feira" for "08:00"
        And change the close hour in "segunda-feira" for "18:00"
        And try to finish the restaurant data update
        And put the password "12345678" on the confirmation modal
        Then a success message shows up
        And the opening hour in the "segunda-feira" in "08:00 às 18:00"

    Scenario: Restaurant try to add a invalid opening hours
        Given Eduardo is the restaurant system admin
        And the password of the account is "12345678"
        And is on the "Edit restaurant" screen
        When Eduardo change the opening hour in "segunda-feira" for "09:00"
        And change the close hour in "segunda-feira" for "08:00"
        And try to finish the restaurant data update
        And put the password "12345678" on the confirmation modal
        Then a error message shows up
        And the opening hour in the "segunda-feira" is the same as before
    
