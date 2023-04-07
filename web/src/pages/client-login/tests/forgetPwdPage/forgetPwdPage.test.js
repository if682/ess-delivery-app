import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // add this import
import ClientLogin from '../../ClientLogin';
import ForgetPwd from '../../ForgetPwd/ForgetPwd';
import { GetClientName } from '../../../client-register/RegisterPages/GetClientName';
import Home from '../../../home/Home';

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

    it('should render invalid email error after logging in with incorrect email', () => { // This test is for the login page to show an error message when the email is incorrect
        render(
            <MemoryRouter> {/* Wrap ClientLogin with MemoryRouter */}
                <ForgetPwd Items={currentClients} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText('Insira um email'), { target: { value: 'invalid-email@gmail.com' } });

        fireEvent.click(screen.getByText('Enviar'));
        const errorMessage = screen.getByText('*E-mail inválido');
        expect(errorMessage).toBeInTheDocument();
    });

    
      

});
