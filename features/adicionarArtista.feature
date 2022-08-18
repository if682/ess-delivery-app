Feature: Adding artists to the database and users

    Scenario: Adding a new artist
        Given I am logged as an "user"
        When I go to the "Create Artist" page
        And I fill in "Name" with "The Beatles"
        And I fill in "Country" with "United Kingdom"
        And I fill in "Genre" with "Rock"
        And I fill in "Description" with "The Beatles were an English rock band formed in Liverpool in 1960. With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became widely regarded as the foremost and most influential act of the rock era."
        And I select the option to "Create Artist"
        Then searching "The Beatles" should return the artist page

    Scenario: Adding already existing artist
        Given I am logged as an "user"
        And "The Beatles" is already created
        When I go to the "Create Artist" page
        And I fill in "Name" with "The Beatles"
        And I fill in "Country" with "United Kingdom"
        And I fill in "Genre" with "Rock"
        And I fill in "Description" with "The Beatles were an English rock band formed in Liverpool in 1960. With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became widely regarded as the foremost and most influential act of the rock era."
        And I select the option to "Create Artist"
        Then I should see an error message "Artist already exists"

    Scenario: Failing to create an artist by not specifying a name
        Given I am logged as an "user"
        When I go to the "Create Artist" page
        And I fill in "Country" with "United Kingdom"
        And I fill the "Genre" with "Rock"
        And I fill in "Description" with "The Beatles were an English rock band formed in Liverpool in 1960. With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became widely regarded as the foremost and most influential act of the rock era."
        And I select the option to "Create Artist"
        Then I should see an error message "Name is required"

    Scenario: Failing to create an artist by not specifying a genre
        Given I am logged as an "user"
        When I go to the "Create Artist" page
        And I fill in "Name" with "The Beatles"
        And I fill in "Country" with "United Kingdom"
        And I fill in "Description" with "The Beatles were an English rock band formed in Liverpool in 1960. With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became widely regarded as the foremost and most influential act of the rock era."
        And I select the option to "Create Artist"
        Then I should see an error message "Genre is required"