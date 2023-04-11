import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // add this import
import ClientLogin from '../../ClientLogin';
import { GetClientName } from '../../../client-register/RegisterPages/GetClientName';
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

    it('should render invalid email error after logging in with incorrect email', () => { // This test is for the login page to show an error message when the email is incorrect
        render( // Wrap ClientLogin with MemoryRouter
            <MemoryRouter> {/* Wrap ClientLogin with MemoryRouter */}
                <ClientLogin Items={currentClients} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText('Insira um email'), { target: { value: 'invalid-email@gmail.com' } });

        fireEvent.click(screen.getByText('Entrar'));
        const errorMessage = screen.getByText('*E-mail inválido');
        expect(errorMessage).toBeInTheDocument();
    });

    it('should render invalid password error after logging in with incorrect password', () => { // This test is for the login page to show an error message when the password is incorrect
        render( // Wrap ClientLogin with MemoryRouter
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
    
    it('should move to next page after successfully logged in', () => { // This test is for the login page to move to the home page after logging in
        render( // Wrap ClientLogin with MemoryRouter
            <MemoryRouter initialEntries={['/login']}> 
            <Routes>
              <Route path="/login" element={<ClientLogin Items={currentClients} />}>
              </Route>
              <Route path="/" element={<Home/>}>
              </Route>
            </Routes>
          </MemoryRouter>
        );
        const emailInput = screen.getByPlaceholderText('Insira um email');
        const passwordInput = screen.getByPlaceholderText('Insira uma senha');
        const loginButton = screen.getByText('Entrar');
        
        fireEvent.change(emailInput, { target: { value: 'pasp@cin.ufpe.br' } });
        fireEvent.change(passwordInput, { target: { value: 'senha1' } });
        fireEvent.click(loginButton);
        
        const successfulMessage = screen.getByText('Home');
        expect(successfulMessage).toBeInTheDocument();
    });
    
    it("should move to cadastro-nome after clicking in the 'Cadastre-se'", () => { // This test is for the login page to move to the cadastro-nome page after clicking in the 'Ainda não possui o cadastro?' button
        render( // Wrap ClientLogin with MemoryRouter
            <MemoryRouter initialEntries={['/login']}>
            <Routes>
              <Route path="/login" element={<ClientLogin Items={currentClients} />}>
              </Route>
              <Route path="/cadastro-nome" element={<GetClientName/>}>
              </Route>
            </Routes>
          </MemoryRouter>
        );
        const loginButton = screen.getByText('Cadastre-se');
      
        fireEvent.click(loginButton);
      
        const successfulMessage = screen.getByText('Primeiramente, como você gostaria de ser chamade?');
        expect(successfulMessage).toBeInTheDocument();
    });
    it('should remember login after successfully logged in and clicked the checkbox to remember login', () => { 
        render( // Wrap ClientLogin with MemoryRouter
            <MemoryRouter initialEntries={['/login']}>
            <Routes>
              <Route path="/login" element={<ClientLogin Items={currentClients} />}>
              </Route>
              <Route path="/" element={<Home/>}>
              </Route>
            </Routes>
          </MemoryRouter>
        );
        const emailInput = screen.getByPlaceholderText('Insira um email');
        const passwordInput = screen.getByPlaceholderText('Insira uma senha');
        const loginButton = screen.getByText('Entrar');
        const getCookies = screen.getByText('Lembrar Login');
        
        fireEvent.change(emailInput, { target: { value: 'pasp@cin.ufpe.br' } });
        fireEvent.change(passwordInput, { target: { value: 'senha1' } });
        fireEvent.click(getCookies);
        fireEvent.click(loginButton);
        
        expect(document.cookie).toBe('token=pasp@cin.ufpe.br');    
    });
      
    
});
