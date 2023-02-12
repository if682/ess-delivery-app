Feature: Registration and maintenance of Users (insert, remove, update)
	AS A "Dizer" employee
	I WANT TO insert new users
    AND remove existing users
    AND update existing users information
	SO THAT users could login at the "Dizer"
    AND users could update theirs information at the "Dizer"

Scenario: Registering new users
    Given I am on the "New User Registration" page
    When I write "Pedro Basilio" in "Name"
    And I write "pcsb@cin.ufpe.br" in "e-mail"
    And I write "000000" in "Password"
    And I click on "Register"
    Then I see a registration completed message

Scenario: User logged in wants to change his password
    Given I am on the "User Profile" page
    And I am logged in with email "pcsb@cin.ufpe.br" and password "000000"
    When I click on "Change Password" option
    And I write "000000" in "Current Password"
    And I write "00pcsb" in "New Password"
    And I click on "Confirm"
    Then I see a password changed successfully message

Scenario: Logged in user wants to delete his account
    Given I am on the "User Profile" page
    And I am logged in with email "pcsb@cin.ufpe.br" and password "00pcsb"
    When I click on "Delete Account" option
    Then I get a message that the user "pcsb@cin.ufpe.br" has been deleted
    And I am logged out on the "New User Registration" page

Scenario: Administrator wants to remove a User from the system
    Given I am logged in with and admin account with email "admin@dizer.com" and password "admin"
    And I'm on the "Admin Dashboard" page
    And I see a list of system users
    And I see the "e-mail" user "pcsb@cin.ufpe.br"
    When I click on the "Remove User" button on the "e-mail" user "pcsb@cin.ufpe.br"
    And I click "confirm"
    Then I get a message that the user has been deleted
    And I check that the "e-mail" user "pcsb@cin.ufpe.br" is no longer on the list of system users

Scenario: Register new User with already registered email
    Given I am on the "New User Registration" page
    When I write "Pedro Basilio" in "Name"
    And I write "pcsb@cin.ufpe.br" in "email"
    And I write "000000" in "Password"
    Then I get a Registration Error message "email already registered"


Scenario: Register new User with password less than 6 digits.

