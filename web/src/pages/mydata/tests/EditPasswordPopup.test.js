import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { EditPasswordPopup } from "../components/EditPassword/EditPasswordPopup";

describe("EditPasswordPopup", () => {
    let onHideMock, props;
    beforeEach(() => {
        onHideMock = jest.fn();
        props = {
            name: 'teste',
            email: 'teste@hotmail.com',
            client_id: 123,
            currentPassword: 'oldpassword',
            show: true,
            onHide: onHideMock
        };
    });
    
    it('renders correctly', () => {
        const { container } = render(<EditPasswordPopup {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
    it('should call onHide when cancel button is clicked', () => {
        const { getByText } = render(<EditPasswordPopup {...props} />);
        fireEvent.click(getByText('Cancelar'));
        expect(onHideMock).toHaveBeenCalled();
      });
    it('should display warning message "Preencha todos os campos!" if either password or oldPassword is null', async () => {
        const {getByPlaceholderText, getByText} = render(<EditPasswordPopup {...props} />);
        const oldPasswordField = getByPlaceholderText("Senha atual");
        const passwordField = getByPlaceholderText("Nova senha");
        const saveButton = getByText("Salvar");

        fireEvent.change(oldPasswordField, { target: { value: "a" } });
        fireEvent.change(passwordField, { target: { value: "" } });
        fireEvent.click(saveButton);

        const warningMessage = await screen.findByText("Preencha todos os campos!");
        expect(warningMessage).toBeInTheDocument();
    });

    it('should display the warning message "O valor fornecido para a senha atual está incorreto" if oldPassword is incorrect', async () => {
        const {getByPlaceholderText, getByText} = render(<EditPasswordPopup {...props} />);
        const oldPasswordField = getByPlaceholderText("Senha atual");
        const passwordField = getByPlaceholderText("Nova senha");
        const saveButton = getByText("Salvar");

        fireEvent.change(oldPasswordField, { target: { value: "wrongPassword" } });
        fireEvent.change(passwordField, { target: { value: "newPassword" } });
        fireEvent.click(saveButton);

        const warningMessage = await screen.findByText(
        "O valor fornecido para a senha atual está incorreto"
        );
        expect(warningMessage).toBeInTheDocument();
    });

    it("should call the fetch function to update the password when save button is clicked with correct inputs", async () => {
        global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ id: 123, name: 'test', email: 'teste@hotmail.com', password: 'newPassword' })
        })
        );
        const { getByText, getByPlaceholderText} = render(<EditPasswordPopup {...props} />);
        const oldPasswordField = getByPlaceholderText("Senha atual");
        const passwordField = getByPlaceholderText("Nova senha");

        fireEvent.change(oldPasswordField, { target: { value: "oldpassword" } });
        fireEvent.change(passwordField, { target: { value: "newPassword" } });
        fireEvent.click(getByText("Salvar"));
        await waitFor(() => expect(fetch).toHaveBeenCalledWith('http://localhost:3001/clients/123', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'teste', email: 'teste@hotmail.com', password: 'newPassword'})
        }));

    });
});
