import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { EditNamePopup } from "../components/EditName/EditNamePopup";

describe("EditNamePopup", () => {
    let onHideMock, props;
    
    //mocka a função onHide e o props recebido pelo popup
    beforeEach(() => {
        onHideMock = jest.fn();
        props = {
            email: 'teste@hotmail.com',
            client_id: 123,
            password: 'senha',
            show: true,
            onHide: onHideMock
        };
    });

    //Verifica se o popup é renderizado corretamente
    it('renders correctly', () => {
        const { container } = render(<EditNamePopup {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
    it('should call onHide when cancel button is clicked', () => {
        const { getByText } = render(<EditNamePopup {...props} />);
        fireEvent.click(getByText('Cancelar'));
        expect(onHideMock).toHaveBeenCalled();
      });

    //Verifica se a mensagem de erro "Esse campo é de preenchimento obrigatório!" é exibida no popup quando se clica em salvar com a caixa de nome vazio
    it('should display warning message "Esse campo é de preenchimento obrigatório!" if either input field is null', async () => {
        const {getByPlaceholderText, getByText} = render(<EditNamePopup {...props} />);
        const nameField = getByPlaceholderText("Novo nome");
        const saveButton = getByText("Salvar");

        fireEvent.change(nameField, { target: { value: "" } });
        fireEvent.click(saveButton);

        const warningMessage = await screen.findByText("Esse campo é de preenchimento obrigatório!");
        expect(warningMessage).toBeInTheDocument();
    });

    //Verifica se a função fetch é chamada para atualizar o nome do usuário quando se clica em salvar com a caixa de texto preenchida
    it("should call the fetch function to update the name when save button is clicked with not null input", async () => {
        global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ id: 123, name: 'teste2', email: 'teste@hotmail.com', password: 'senha' })
        })
        );
        const { getByText, getByPlaceholderText} = render(<EditNamePopup {...props} />);
        const nameField = getByPlaceholderText("Novo nome");

        fireEvent.change(nameField, { target: { value: "teste2" } });
        fireEvent.click(getByText("Salvar"));
        await waitFor(() => expect(fetch).toHaveBeenCalledWith('http://localhost:3001/clients/123', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'teste2', email: 'teste@hotmail.com', password: 'senha'})
        }));

    });
});
