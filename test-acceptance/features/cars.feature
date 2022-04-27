Feature: As car rental business
         I want to register the new cars
         So I can keep track of them while renting

Scenario: Filling car registration form
Given I'm on the page "App Sample"
And the "Light-blue" "Lancer" from "Mitsubishi", costing "123" doesn't appear on the list
When I fill the name fild with "Lancer", the brand with "Mitsubishi", the price with "123", the color with "Light-blue"
And I confirm the registration
Then the "Light-blue" "Lancer" from "Mitsubishi", costing "123" appears on the list