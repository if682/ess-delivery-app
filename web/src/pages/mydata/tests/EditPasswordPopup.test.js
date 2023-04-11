import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { EditPasswordPopup } from "../components/EditPassword/EditPasswordPopup";

describe("EditPasswordPopup", () => {
    let onHideMock, props;
    
    //mocka a função onHide e o props recebidos pelo popup
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
    
    //Verifica se o popup é renderizado corretamente 
    it('renders correctly', () => {
        const { container } = render(<EditPasswordPopup {...props} />);

//checa se o que foi renderizado corresponde ao snapshot do componente expect(container.firstChild).toMatchSnapshot();
    });

//Verifica se a função mockada onHide é chamada quando se clica no botão de cancelar
    it('should call onHide when cancel button is clicked', () => {
        const { getByText } = render(<EditPasswordPopup {...props} />);
        fireEvent.click(getByText('Cancelar'));
        expect(onHideMock).toHaveBeenCalled();
      });

//Verifica se o popup expõe a mensagem de erro "Preencha todos os campos!" se houver alguma caixa de texto vazia
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

//Verifica se o popup expõe a mensagem de erro "O valor fornecido para a senha atual está incorreto" quando o valor recebido como senha não coincide com o valor da senha atual
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

    //Verifica se a função fetch é chamada para atualizar a senha do usuário quando todas as informações recebidas no input são válidas
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
