import { fireEvent, getByRole, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditProfileFormsSection from '../../components/EditProfileForms/EditProfileFormsSection'

describe('Testes da tela de editar perfil', () => {
    let nameField, usernameField, emailField, descriptionField, submitButton
    const mockLog = jest.spyOn(console, 'log');

    beforeEach(() => {
        const { getByTestId } = render(
            <Router>
                <EditProfileFormsSection />
            </Router>
        );
        nameField = getByTestId("name");
        usernameField = getByTestId("username");
        emailField = getByTestId("email");
        descriptionField = getByTestId("description");
        submitButton = getByTestId("submit");
    });

    test('Editar profile foi bem sucedido', async () => {
        fireEvent.change(nameField, { target: { value: "jonh pedro" } });
        fireEvent.change(usernameField, { target: { value: "john" } });
        fireEvent.change(emailField, { target: { value: "john@email.com" } });
        fireEvent.change(descriptionField, { target: { value: "Este usuário ainda não possui descrição" } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockLog).toHaveBeenCalledWith("Edit profile foi enviado");
        });
    });

    test('Campo nome vazio, cadastro mal sucedido', async () => {
        fireEvent.change(nameField, { target: { value: "" } });
        fireEvent.change(usernameField, { target: { value: "john" } });
        fireEvent.change(emailField, { target: { value: "john@email.com" } });
        fireEvent.change(descriptionField, { target: { value: "Este usuário ainda não possui descrição" } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockLog).toHaveBeenCalledWith("Campo nome vazio");
        });
    });

    test('Campo username vazio, cadastro mal sucedido', async () => {
        fireEvent.change(nameField, { target: { value: "Jonh pedrro" } });
        fireEvent.change(usernameField, { target: { value: "" } });
        fireEvent.change(emailField, { target: { value: "john@email.com" } });
        fireEvent.change(descriptionField, { target: { value: "Este usuário ainda não possui descrição" } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockLog).toHaveBeenCalledWith("Campo username vazio");
        });
    });

    test('Campo email vazio, cadastro mal sucedido', async () => {
        fireEvent.change(nameField, { target: { value: "Jonh pedrro" } });
        fireEvent.change(usernameField, { target: { value: "jpcm12312" } });
        fireEvent.change(emailField, { target: { value: "" } });
        fireEvent.change(descriptionField, { target: { value: "Este usuário ainda não possui descrição" } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockLog).toHaveBeenCalledWith("Campo email vazio");
        });
    });

    test('Campo descrição vazio, cadastro mal sucedido', async () => {
        fireEvent.change(nameField, { target: { value: "Jonh pedrro" } });
        fireEvent.change(usernameField, { target: { value: "jpcm12312" } });
        fireEvent.change(emailField, { target: { value: "Alo@email.com" } });
        fireEvent.change(descriptionField, { target: { value: "" } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockLog).toHaveBeenCalledWith("Campo descrição vazio");
        });
    });
})
