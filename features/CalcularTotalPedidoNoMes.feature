teste

Cenário: Não foi possível carregar o histórico

Cenário Usuário ainda não fez nenhuma compra

Scenario: Visualize this month's total value in orders for each restaurant
	Given I am logged in with a customer account
	And I am at the home page
	And the account has made orders in this month in restaurants "Tonho" and "Almir"
	When I click the "total orders" button
	Then I should see the total value of orders for restaurants "Tonho" and "Almir" for this month
	