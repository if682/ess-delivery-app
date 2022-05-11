Feature: User login 

As the owner of the restaurant, I want to be able to log into my account to use a platform

i. Scenario: Login successful
    Given that the user is on the system login page
    And there is a registered user with EMAIL "test@cin.ufpe.br" and PASSWORD "5678"
    When the user fills the EMAIL with "test@cin.ufpe.br", 
    When the user fills the PASSWORD with  "5678" 
    When the user clicks in submit
    Then the login is completed and the user is redirected to the home page

ii. Scenario: Unsuccessful login because the EMAIL entered is not registered
    Given that the user is on the system login page
    And there is no registered user with the EMAIL "test@cin.ufpe.br"
    When the user fills the EMAIL with "test@cin.ufpe.br"
    When the user fills the PASSWORD with "5678"
    When the user clicks in submit
    Then the login is not completed and an error message appears on the` screen, informing us that it was not possible to find any account with the data entered


iii. Scenario: Login failed because the password is incorrect
    Given that the user is on the system login page
    And there is a registered user with EMAIL "test@cin.ufpe.br", PASSWORD "5678" and try to login
    When the user fills the EMAIL with "test@cin.ufpe.br" 
    When the user fills the  PASSWORD with "1234"
    When the user clicks in submit
    Then the login is not completed and an error message appears on the screen, informing us that it was not possible to find any account with the data entered


iv. Scenario: Login failed because the EMAIL field is not filled
    Given that the user is on the system login page
    When the user fills the PASSWORD with "5678"
    When the user clicks in submit
    Then the login is not completed and an error message appears on the screen, informing us that all fields need to be filled

v. Scenario: Login failed because the PASSWORD field is not filled
    Given that the user is on the system login page
    When the user fills the EMAIL with "test@cin.ufpe.br" 
    When the user clicks in submit
    Then the login is not completed and an error message appears on the screen, informing us that all fields need to be filled

vi. Scenario: Login failed because the EMAIL and PASSWORD fields were not populated
    Given that the user is on the system login page
    When the user clicks in submit
    Then the login is not completed and an error message appears on the screen, informing us that all fields need to be filled