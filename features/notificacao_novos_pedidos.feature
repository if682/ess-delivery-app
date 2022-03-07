- Feature: Notification of new orders
	As a manager, I want to be notified when a request for a new order was made from the client and confirm that the request was received.

	i. Sceneario: Client made a new order's request
		Given Vinicius is a manager and received a new order's notification
		And Check the product to be prepared
		And Check the quantity of the product to be prepared
		And Check if the value is correct 
		When Vinicius confirm that order was received 
		Then A confirmation message will be sent to the client