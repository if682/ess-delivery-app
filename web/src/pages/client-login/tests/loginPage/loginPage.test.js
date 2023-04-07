import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom'; // add this import
import ClientLogin from '../../ClientLogin';

describe('LoginTest', () => {

    const currentClients = [
        {
            id: 121231,
            name: "NomeTeste",
            email: "emailTeste@emailTeste",
            password: "senhaTeste",
        },
        {
            id: 128291,
            name: "Pedro",
            email: "pasp@cin.ufpe.br",
            password: "senha1"
        },
        {
            id: 128291,
            name: "Pedro",
            email: "emailTeste2@cin.ufpe.br",
            password: "senha2"
        }
    ];

    const onHideMock = jest.fn(() => { });
    const onShowMock = jest.fn(() => { });

    it('should render invalid email error after logging in with incorrect email', () => {
        render(
            <MemoryRouter> {/* Wrap ClientLogin with MemoryRouter */}
                <ClientLogin Items={currentClients} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText('Insira um email'), { target: { value: 'invalid-email@gmail.com' } });

        fireEvent.click(screen.getByText('Entrar'));
        const errorMessage = screen.getByText('*E-mail inválido');
        expect(errorMessage).toBeInTheDocument();
    });
    it('should render invalid password error after logging in with incorrect password', () => {
        render(
            <MemoryRouter>
                <ClientLogin Items={currentClients} />
            </MemoryRouter>
        );
        const emailInput = screen.getByPlaceholderText('Insira um email');
        const passwordInput = screen.getByPlaceholderText('Insira uma senha');
        const loginButton = screen.getByText('Entrar');

        fireEvent.change(emailInput, { target: { value: 'pasp@cin.ufpe.br' } });
        fireEvent.change(passwordInput, { target: { value: 'senhaErrada' } });
        fireEvent.click(loginButton);

        const errorMessage = screen.getByText('*Senha inválida');
        expect(errorMessage).toBeInTheDocument();
    });
    it('should move to next page after successfully logged in', () => {
        render(
            <MemoryRouter>
                <Route path="/login">
                    <ClientLogin Items={currentClients} />
                </Route>
                <Route path="/cadastro-nome">
                    <div>Teste</div>
                </Route>
            </MemoryRouter>
        );
        const emailInput = screen.getByPlaceholderText('Insira um email');
        const passwordInput = screen.getByPlaceholderText('Insira uma senha');
        const loginButton = screen.getByText('Entrar');

        fireEvent.change(emailInput, { target: { value: 'pasp@cin.ufpe.br' } });
        fireEvent.change(passwordInput, { target: { value: 'senha1' } });
        fireEvent.click(loginButton);

        screen.debug();
        //const errorMessage = screen.getByText('*Senha inválida');
        //expect(errorMessage).toBeInTheDocument();
        const errorMessage = screen.getByText('*Senha inválida');
    });

});
