- Feature: Notification of new orders
	As a manager, I want to be notified when a request for a new order was made from the client and confirm that the request was received.

	i. Scenario: Client made a new order's request
		Given Vinicius is a manager and received a new order's notification
		And Check the product to be prepared
		And Check the quantity of the product to be prepared
		And Check if the value is correct
		And Check if the address is correct
		When Vinicius confirm that order was received 
		Then A confirmation message will be sent to the client

	ii. Scenario: Client tries to make an order with a sold out product
		Given Vinicius is a manager and received a new order's notification
		And Check the product to be prepared
		When Vinicius sees that product is sold out
		Then A sold out message will be sent to the client
		And product will be made unavailable

	iii. Scenario: Client tries to make an order with less quantity than requested
		Given Vinicius is a manager and received a new order's notification
		And Check the product to be prepared
		And Check the quantity to be prepated
		When Vinicius sees that product has less quantity than requested
		Then A unavailable quantity message will be sent to the client requesting a confirmation
		And Request confirmation if want that product with less quantity than request
	
	iv. Scenario: Client tries to make an order with more quantity than has available
		Given Vinicius is a manager and received a new order's notification
		And Check the product to be prepared
		And Check the quantity to be prepated
		When Vinicius sees that less product than requested
		Then A unavailable quantity message will be sent to the client
		And Request confirmation if want that product with less quantity than request