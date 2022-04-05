Feature: Restaurant Profile Page
    As a restaurant i want to add and modify information on my profile page 
    I want to add and modify informations on my account
    so that I can show informations on my profile page

Scenario: restaurant adding new profile photo 
    Given I am logged in as restaurante "Coxinhas do Bairro" 
    And I am at the "pefil" page
    And I see that the restaurant "Coxinhas do Bairro" has no profile picture
    When I add an profile photo "logo_coxinhas.jpg" for restaurante "Coxinhas do Bairro"
    Then I can see a confirmation message
    And I’m still at the "perfil" page
    And I can see that restaurant "Coxinhas do Bairro" has "logo_coxinhas.jpg" on profile photo

Scenario: restaurant adding restaurant description 
    Given I am logged in as restaurante "Coxinhas do Bairro" 
    And I am at the "pefil" page
    And I see that "sobre o restante" is empity 
    When I add "Melhores coxinhas do nosso bairro" on "sobre o restaurant"
    Then I’m still at the "perfil" page
    And I can see that restaurant "Coxinhas do Bairro" has "Melhores coxinhas do nosso bairro" on "sobre o restante"

Scenario: restaurant editing opening hours
    Given I am logged in as restaurante "Coxinhas do Bairro" 
    And I am at the "pefil" page
    And I see that the restaurant is open "8:00 às 18:00" on the weekday "Sabado"
    When I edit the opening hours on the weekday "Sabado" to "09:00 às 19:00"
    Then I’m still at the "perfil" page
    And I see that the restaurant "Coxinhas do Bairro" has "8:00 às 18:00" in the opening hours of the "Sabado"

Scenario: restaurant adding payment method
    Given I am logged in as restaurante "Coxinhas do Bairro" 
    And I am at the "pefil" page
    And I see that the restaurant "Coxinhas do Bairro" has no payment method registered
    When I add the payment method "pix" for the restaurant "Coxinhas do Bairro"
    Then I’m still at the "perfil" page
    And I see that the restaurant "Coxinhas do Bairro" has "pix" on payment method
