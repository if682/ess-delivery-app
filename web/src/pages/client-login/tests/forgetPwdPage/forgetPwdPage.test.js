import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // add this import
import ClientLogin from '../../ClientLogin';
import ForgetPwd from '../../ForgetPwd/ForgetPwd';
import { GetClientName } from '../../../client-register/RegisterPages/GetClientName/GetClientName';
import Home from '../../../home/Home';

describe('LoginTest', () => { // This is the test suite for the login page

    const currentClients = [ // This is the list of clients that are currently registered in the system
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

    it('should render invalid email error after trying to recover password with incorrect email', () => { // This test is for the forgetPwd page to show an error message when the email is incorrect
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
    it('should render the correct output when using the appropriate email', () => {  // This test is for the forgetPwd page to show an error message when the email is incorrect
        render(
            <MemoryRouter> {/* Wrap ClientLogin with MemoryRouter */}
                <ForgetPwd Items={currentClients} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText('Insira um email'), { target: { value: 'pasp@cin.ufpe.br' } });

        fireEvent.click(screen.getByText('Enviar'));
        const errorMessage = screen.getByText('Verifique seu e-mail para obter nova senha');
        expect(errorMessage).toBeInTheDocument();
    });

    
      

});
