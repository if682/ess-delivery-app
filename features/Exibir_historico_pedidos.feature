Feature: view order history
	As a registered customer in the delivery app
	I want to be able to view order history, filter them by certain attributes of my orders, see their details and ask for help with possible issue with order

Scenario: View history of orders made from the restaurant “Mc Donalds” 
	Given I'm in the view order history section
	When I search for my orders the restaurant "Mc Donalds"
	Then I see the history of all my orders placed in the "Mc Donalds" 

Scenario: Show specific order details
	Given I'm in the view order history section
	When I use the interface provided in the app to direct me to the specific order details of "Mc Donalds order of 12/27/2022" screen
	Then I see the details of that order
