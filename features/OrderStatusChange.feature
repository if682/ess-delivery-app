  Feature: Order Status Change

    Given a restaurant and a client this feature ensures that business orders are properly updated
    as expected whenever they change their state that is to say orders are made, accepted and ready.

    Example: Users orders "Fritas", then the restaurant "Marco's" should be notified of the request by a notification
    and the system should notify the user the acceptance of it's order, then the business should prepare the food,
    after preparation the system shoud notify the client that it's ready for delivery, notice that the delivery person
    is not involved.

    Background:

        Given a business named "Comida de Mainha"
        And a customer named "Tiguinho"
        And a order named "Fritas de Mainha"

    Scenario Outline: making a new order

        Given Tiguinho business is open
        When Tiguinho orders Fritas de Mainha
        Then Tiguinho order is validated
        And the DB adds a new order and update it status to made

        Given Tiguinho business is open
        When Tiguinho orders Fritas de Mainha
        Then Tiguinho order is validated
        And the DB fails to add a new entry with status made
        And a service is executed to re-try the insertion

        Given Tiguinho business is closed
        When Tiguinho orders Fritas de Mainha
        Then Tiguinho order isn't validated
        And the DB won't add a new order
        And a error message will appear

    Scenario Outline: receives a new order request

        Given that Comida de Mainha is open
        When Tiguinho orders Fritas de Mainha
        Then Comida de Mainha will be notified of the order
        And Comida de Mainha accept's the order
        And the DB will updated Fritas de Mainha entry to accepted
        And Tiguinho will be notified that the request was accepted by Comida de Mainha

        Given that Comida de Mainha is open
        When Tiguinho orders Fritas de Mainha
        Then Comida de Mainha will be notified of the order
        And Comida de Mainha accept's the order
        And the DB can't update Fritas de Mainha entry to accepted
        And a internal service will be executed re-try the DB update

        Given that Comida de Mainha is open
        When Tiguinho orders Fritas de Mainha
        Then Comida de Mainha will be notified of the order
        And Comida de Mainha won't accept the order
        And the DB will not update Fritas de Mainha status to accepted
        And Tiguinho will be notified that the request wasn't accepted by Comida de Mainha

        Given that Comida de Mainha is closed
        When Tiguinho orders Fritas de Mainha
        Then Comida de Mainha won't be notified of the order
        And the DB musn't add the order as an entry

    Scenario Outline: client is notified that the order is ready

        Given that Comida de Mainha has accepted the request
        When Comida de Mainha confirm in the application that the order is ready
        Then the DB should update order status to ready
        And Tiguinho will be notified that his order is ready

        Given that Comida de Mainha has accepted the request
        When Comida de Mainha confirm in the application that the order is ready
        Then the DB should update order status to ready
        And Tiguinho will be notified that his order is ready

        Given that Comida de Mainha has accepted the request
        When Comida de Mainha has'n confirmed in the application that the order is ready
         Then the DB can't update the order status to ready
        And Tiguinho won't be notified

    Scenario Outline: test if notifications are sent and received in under 5 min

        Given that Tiguinho has made a order
        When Comida da Mainha confirms the order as <state>
        Then A notification should be sent to Tiguinho
        And must arrive at most 5min later

        Given that Tiguinho has made a order
        When Comida da Mainha confirms the order as <state>
        Then A notification should be sent to Tiguinho
        And will arrive after 5min
        And a service will be executed to re-send the notification

                |state   |
                |ready   |
                |accepted|
