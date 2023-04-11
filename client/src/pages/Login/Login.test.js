import { fireEvent, getByRole, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginBox from '../../components/Login';

let usernameField, passwordField, submitButton
const mockLog = jest.spyOn(console, 'log');

beforeEach(() =>{
    const { getByTestId } = render(
        <Router>
            <LoginBox />
        </Router>
    );
    usernameField = getByTestId("username");
    passwordField = getByTestId("password");
    submitButton = getByTestId("submit");
});

test('Testar se o login foi bem sucedido', async () => {
    fireEvent.change(usernameField, { target: { value: "john1231231" } });
    fireEvent.change(passwordField,{ target: { value: "Medeiros123!"}});
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(mockLog).toHaveBeenCalledWith("Login bem sucedido");
      });
});

test('Testar campo username vazio, login mal sucedido', async () => {
    fireEvent.change(usernameField, { target: { value: "" } });
    fireEvent.change(passwordField,{ target: { value: "Medeiros123!"}});
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(mockLog).toHaveBeenCalledWith("Campo username vazio");
      });
});

test('Testar campo senha vazio, Login mal sucedido', async () => {
    fireEvent.change(usernameField, { target: { value: "john1231231" } });
    fireEvent.change(passwordField,{ target: { value: ""}});
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(mockLog).toHaveBeenCalledWith("Campo senha vazio");
      });
});