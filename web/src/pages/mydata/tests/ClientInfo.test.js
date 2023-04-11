import React from 'react';
import { render, screen, fireEvent, waitFor, act} from '@testing-library/react';
import ClientInfo from '../components/ClientInfo/ClientInfo';
import { BrowserRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

describe('ClientInfo', () => {
    //Cria um token de acesso para ser usado no teste
    Cookies.set('token', 'teste@hotmail.com', {expires: 7})
    beforeEach(() => {
        // Mocka a resposta de fetch do server
        global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve([{ id: '12', name: 'teste', email: 'teste@hotmail.com', password: 'senha' }])
        })
        );
    });

    afterEach(() => {
        //Remove todos os mocks depois de cada teste
        jest.clearAllMocks();
    });
    afterAll(() =>{
        //Deleta o token de acesso criado para esse teste
        Cookies.remove('token')
    })

    it('renders the client info page with the correct data fields', async () => {
        const{getByPlaceholderText} = render(<BrowserRouter><ClientInfo /></BrowserRouter>);
        //Cria constantes que representam os inputs ReadOnly para nome, senha e e-mail
        const name = getByPlaceholderText('Nome')
        const passwd = getByPlaceholderText('Senha')
        const email = getByPlaceholderText('E-mail')

        //Espera até que os valores do nome e da senha sejam atualizados no UseEffect
        await waitFor(() => expect(expect(name).toHaveValue('teste')));

        //Verifica se os inputs foram renderizados com os valores corretos para cada campo
        expect(name).toBeInTheDocument();
        expect(name).toHaveValue('teste')
        expect(email).toBeInTheDocument();
        expect(email).toHaveValue('teste@hotmail.com')
        expect(passwd).toBeInTheDocument();
        expect(passwd).toHaveValue('senha')
    });

    it('uses the fetch function to try to change the value of the password input through the "EditPasswordPopup"', async () => {
        const{getByPlaceholderText, getByTestId, getByText} = render(<BrowserRouter><ClientInfo /></BrowserRouter>);
        //Espera até que os valores dos inputs sejam atualizados no UseEffect
        const name_ = getByPlaceholderText('Nome')
        await waitFor(() => expect(expect(name_).toHaveValue('teste')));
        
        //Pega o botão de atualizar vinculado à caixa de texto do e-mail
        const openPopupPassword = getByTestId('senha')
        //Abre o popup, digita o senha atual e a nova senha e clica em confirmar para salvar as alterações
        fireEvent.click(openPopupPassword)
        const oldPasswordField = getByPlaceholderText("Senha atual");
        const passwordField = getByPlaceholderText("Nova senha");

        fireEvent.change(oldPasswordField, { target: { value: "senha" } });
        fireEvent.change(passwordField, { target: { value: "senhanova" } });
        fireEvent.click(getByText("Salvar"));

        //Espera até que o componente chame a função fetch para atualizar o valor do e-mail -> não atualiza o valor no input do teste porque a implementação do fetch é mockada
        await waitFor(() => expect(fetch).toHaveBeenCalledWith('http://localhost:3001/clients/12', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'teste', email: 'teste@hotmail.com', password: 'senhanova'})
        }));
    });

    it('navigates back to the account page when the "Voltar" button is clicked', async () => {
        const{getByText} = render(<BrowserRouter><ClientInfo /></BrowserRouter>);
        //Constante recebe o botão "voltar"
        const goBackButton = getByText('Voltar');

        //Quando o botão é clicada o usuário volta para a página "minha conta"
        fireEvent.click(goBackButton);
        expect(window.location.pathname).toBe('/minha-conta');
    });

    it('uses the fetch function to try to change the value of the name input through the "EditNamePopup"', async () => {
        const{getByPlaceholderText, getByTestId, getByText} = render(<BrowserRouter><ClientInfo /></BrowserRouter>);
        //Cria a constante que representa o input ReadOnly para nome
        const name = getByPlaceholderText('Nome')

        //Espera até que os valores dos inputs sejam atualizados no UseEffect
        await waitFor(() => expect(expect(name).toHaveValue('teste')));

        //Pega o botão de atualizar vinculado à caixa de texto do nome
        const openPopupName = getByTestId('nome')
        //Abre o popup, digita um novo nome "teste2" e clica em confirmar para salvar as alterações
        fireEvent.click(openPopupName)
        const nameField = getByPlaceholderText("Novo nome");
        fireEvent.change(nameField, { target: { value: "teste2" } });
        fireEvent.click(getByText("Salvar"));

        //Espera até que o componente chame a função fetch para atualizar o valor do nome -> não atualiza o valor no input do teste porque a implementação do fetch é mockada
        await waitFor(() => expect(fetch).toHaveBeenCalledWith('http://localhost:3001/clients/12', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'teste2', email: 'teste@hotmail.com', password: 'senha'})
        }));
    });

    it('uses the fetch function to try to change the value of the email input through the "EditEmailPopup"', async () => {
        const{getByPlaceholderText, getByTestId, getByText} = render(<BrowserRouter><ClientInfo /></BrowserRouter>);
        //Espera até que os valores dos inputs sejam atualizados no UseEffect
        const name = getByPlaceholderText('Nome')
        await waitFor(() => expect(expect(name).toHaveValue('teste')));
        
        //Pega o botão de atualizar vinculado à caixa de texto do e-mail
        const openPopupEmail = getByTestId('email')
        //Abre o popup, digita o código de verificação correto, o novo email "teste2@hotmail.com" e clica em confirmar para salvar as alterações
        fireEvent.click(openPopupEmail)
        const emailInput = getByPlaceholderText('Novo e-mail');
        const firstDigitInput = getByTestId('first_digit');
        fireEvent.change(firstDigitInput, { target: { value: '1' } });
        const secondDigitInput = getByTestId('second_digit');
        fireEvent.change(secondDigitInput, { target: { value: '1' } });
        const thirdDigitInput = getByTestId('third_digit');
        fireEvent.change(thirdDigitInput, { target: { value: '1' } });
        const fourthDigitInput = getByTestId('fourth_digit');
        fireEvent.change(fourthDigitInput, { target: { value: '1' } });
        fireEvent.change(emailInput, { target: { value: 'teste2@hotmail.com' } });
        fireEvent.click(getByText('Salvar'));

        //Espera até que o componente chame a função fetch para atualizar o valor do e-mail -> não atualiza o valor no input do teste porque a implementação do fetch é mockada
        await waitFor(() => expect(fetch).toHaveBeenCalledWith('http://localhost:3001/clients/12', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'teste', email: 'teste2@hotmail.com', password: 'senha'})
        }));
    });

    
    
});
