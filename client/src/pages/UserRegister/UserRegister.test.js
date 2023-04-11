import { fireEvent, getByRole, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserRegister from '.'

let nameField, usernameField, emailField, passwordField, birthdayField, phoneField, locationField, submitButton
const mockLog = jest.spyOn(console, 'log');

beforeEach(() =>{
    const { getByTestId } = render(
        <Router>
            <UserRegister />
        </Router>
    );

    nameField = getByTestId("name");
    usernameField = getByTestId("username");
    emailField = getByTestId("email");
    passwordField = getByTestId("password");
    birthdayField = getByTestId("birthday");
    phoneField = getByTestId("phone");
    locationField = getByTestId("location");
    submitButton = getByTestId("submit");

});

test('Testar se o registro foi bem sucedido', async () => {
    fireEvent.change(nameField, { target: { value: "John Doe" } });
    fireEvent.change(usernameField, { target: { value: "john1231231" } });
    fireEvent.change(emailField, { target: { value: "john@email.com"}});
    fireEvent.change(passwordField,{ target: { value: "Medeiros123!"}});
    fireEvent.change(birthdayField, { target: { value: "2002-11-21"}});
    fireEvent.change(phoneField, { target: { value: "1231231231"}});
    fireEvent.change(locationField, { target: { value: "Recife"}});
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(mockLog).toHaveBeenCalledWith("Registro completo");
      });
});

test('Testar campo nome vazio, registro mal sucedido', async () => {
    fireEvent.change(nameField, { target: { value: "" } });
    fireEvent.change(usernameField, { target: { value: "john1231231" } });
    fireEvent.change(emailField, { target: { value: "john@email.com"}});
    fireEvent.change(passwordField,{ target: { value: "Medeiros123!"}});
    fireEvent.change(birthdayField, { target: { value: "2002-11-21"}});
    fireEvent.change(phoneField, { target: { value: "1231231231"}});
    fireEvent.change(locationField, { target: { value: "Recife"}});
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(mockLog).toHaveBeenCalledWith("Campo nome vazio");
      });
});

test('Testar campo senha vazio, registro mal sucedido', async () => {
    fireEvent.change(nameField, { target: { value: "john pedro" } });
    fireEvent.change(usernameField, { target: { value: "john1231231" } });
    fireEvent.change(emailField, { target: { value: "john@email.com"}});
    fireEvent.change(passwordField,{ target: { value: ""}});
    fireEvent.change(birthdayField, { target: { value: "2002-11-21"}});
    fireEvent.change(phoneField, { target: { value: "1231231231"}});
    fireEvent.change(locationField, { target: { value: "Recife"}});
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(mockLog).toHaveBeenCalledWith("Campo senha vazio");
      });
});