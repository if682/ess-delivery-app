Scenario: Cannot load purchase history

Scenario: User wants to visualize this month's total but hasn't made any purchasess
Then I should see a message indicating no purchases were made yet

Scenario: Visualize this month's total
	Given I am logged in with a customer account
	And I am at the home page
	And the account has made orders in this month in restaurants "Tonho" and "Almir"
	When I click the "total orders" button
	Then I should see the total value of orders for restaurants "Tonho" and "Almir" for this month
