import { fireEvent, getByRole, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserRegister from '.'

beforeEach(() => {
    console.log = jest.fn();
});

test('Testar se o registro foi bem sucedido', async () => {
    const mockLog = jest.spyOn(console, 'log');

    const { getByTestId, getByRole } = render(
        <Router>
            <UserRegister />
        </Router>
    );

    const nameField = getByTestId("name");
    const usernameField = getByTestId("username");
    const emailField = getByTestId("email");
    const descriptionField = getByTestId("password");
    const birthdayField = getByTestId("birthday");
    const phoneField = getByTestId("phone");
    const locationField = getByTestId("location");
    const submitButton = getByTestId("submit");

    fireEvent.change(nameField, { target: { value: "John Doe" } });
    fireEvent.change(usernameField, { target: { value: "john" } });
    fireEvent.change(emailField, { target: { value: "john@email.com"}});
    fireEvent.change(descriptionField,{ target: { value: "Este usuário ainda não possui descrição"}});
    fireEvent.change(birthdayField, { target: { value: "2002-11-21"}});
    fireEvent.change(phoneField, { target: { value: "1231231231"}});
    fireEvent.change(locationField, { target: { value: ""}});
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(mockLog).toHaveBeenCalledWith("Enviei ok");
      });
});