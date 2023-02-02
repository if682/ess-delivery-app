Feature: Calculate month's total orders for each restaurant
    As a "customer" user
    I want to see and clear the month's total orders per restaurant
    So that I can keep track of my purchases and budget accordingly

	Scenario: Visualize this month's total value in orders for each restaurant
		Given I am logged in with a customer account
		And the account has made orders in this month in restaurants "Tonho" and "Almir"
		When I open the "total orders" page
		Then I should see the total value of orders for restaurants "Tonho" and "Almir" for this month

	Scenario: User wants to visualize this month's totals but hasn't made any purchases yet
		Given I am logged in with a customer account
		And the account has made no purchases
		When I open the "Order totals" page
		Then I should see a message indicating no purchases were made yet

	Scenario: User wants to visualize this month's totals but hasn't made any purchases this month
		Given I am logged in with a customer account
		And the account has made no purchases this month
		And the account has made purchases in the past months
		When I open the "Order totals" page
		Then I should see a message indicating no purchases were made this month