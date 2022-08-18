Feature: Administrating users and artists

    Scenario: Accessing the admin interface
        Given I'm on 'The Beatles' page
        And I'm logged in as 'John' and have 'admin' privileges
        When I choose the option to 'Manage users'
        Then I should see the 'Admin interfaces' page

    Scenario: Adding a user as admin
        Given I'm on the 'Admin interfaces' page of 'The Beatles'
        When I choose the option to 'Add a user'
        And I fill in 'Username' with 'Paul'
        Then 'Paul' should be a new admin from 'The Beatles'

    Scenario: Removing a user as admin
        Given I'm on the 'Admin interfaces' page of 'The Beatles'
        And 'John' is an admin from 'The Beatles'
        When I choose the option to 'Remove a user'
        And I fill in 'Username' with 'John'
        Then 'John' should not be an admin from 'The Beatles'
        Then I should change this because stakeholders
