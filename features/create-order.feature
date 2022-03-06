- Feature: Create order
    As a client, I want to place an order at the restaurant using the delivery APP, so I can receive my order at home

    i Scenario: Client try to create a order without filling out all the fields in the form
        Given Eduardo is a client and want to create a order by the APP
        And is on the "Create order" screen
        And entered the data into the form: Name - Eduardo; Address - Rua Sebastião Alencastro Salazar, 100; Phone - [em banco]; Email - eduardoaqz@gmail.com
        And selected 1 in product quantity "hamburguer"
        When try to save the order
        Then the error is shown in the telephone field indicating that the field is required
        And the form data remains unchanged

    ii Scenario: Customer tries to create order with invalid phone number
        Given Eduardo is a client and want to create a order by the APP
        And is on the "Create order" screen
        And entered the data into the form: Name - Eduardo; Address - Rua Sebastião Alencastro Salazar, 100; Phone - 81 9996775; Email - eduardoaqz@gmail.com
        And selected 1 in product quantity "hamburguer"
        When try to save the order
        Then the error is displayed in the phone field indicating that the phone number is invalid
        And the form data remains unchanged