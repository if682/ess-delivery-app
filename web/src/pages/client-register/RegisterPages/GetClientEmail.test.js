import { render, fireEvent, act } from '@testing-library/react';
import { GetClientEmail} from './GetClientEmail';
import { GetClientName } from './GetClientName';
import { BrowserRouter, Router} from 'react-router-dom';



describe('GetClientEmail component', () => {
  beforeEach(() =>{
    const { getByPlaceholderText, getByText} = render(<BrowserRouter><GetClientName /></BrowserRouter>);
    const input = getByPlaceholderText('Nome');
    fireEvent.change(input, { target: { value: 'teste' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);
  })

  test('renders the component', () => {
    const { getByText, getByPlaceholderText, getByTestId} = render(<BrowserRouter><GetClientEmail/></BrowserRouter>);
    expect(getByText('Por favor, nos forneça ou seu melhor email:')).toBeInTheDocument();
    expect(getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(getByTestId('button-reg-email')).toBeInTheDocument();
  });

  test('shows a warning message when the e-mail input is empty', () => {
    const { getByPlaceholderText, getByTestId, container} = render(<BrowserRouter><GetClientEmail/></BrowserRouter>);
    const input = getByPlaceholderText('E-mail');
    fireEvent.change(input, { target: { value: '' } });
    const button = getByTestId('button-reg-email');
    fireEvent.click(button);
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Esse campo é de preenchimento obrigatório!');
    });
  });

  test('shows a warning message when the e-mail input is not valid', () => {
    const { getByPlaceholderText, container, getByTestId} = render(<BrowserRouter><GetClientEmail/></BrowserRouter>);
    const input = getByPlaceholderText('E-mail');
    fireEvent.change(input, { target: { value: 'teste' } });
    const button = getByTestId('button-reg-email');
    fireEvent.click(button);
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('O e-mail fornecido possui um formato inválido');
    });
  });

    test('navigates to login page if email is already registered', () => {
    const currentClients = [{id: 1, name: 'teste1', email: 'teste@hotmail.com', password: 'teste'}];
    const { getByPlaceholderText, getByText, getByTestId} = render(<BrowserRouter><GetClientEmail teste={true} currentC={currentClients}/></BrowserRouter>);
    const input = getByPlaceholderText('E-mail');
    fireEvent.change(input, { target: { value: 'teste@hotmail.com' } });
    const button = getByTestId('button-reg-email');
    fireEvent.click(button);
    expect(window.location.pathname).toBe('/login');
    expect(window.history.state.usr).toEqual({email: 'teste@hotmail.com'});
  });

  test('navigates to email validation page if email is not registered and its valid', () => {
    const { getByPlaceholderText, getByTestId} = render(<BrowserRouter><GetClientEmail/></BrowserRouter>);
    const input = getByPlaceholderText('E-mail');
    fireEvent.change(input, { target: { value: 'testando@hotmail.com' } });
    const button = getByTestId('button-reg-email');
    fireEvent.click(button);
    expect(window.location.pathname).toBe('/validacao-email');
    expect(window.history.state.usr).toEqual({ name: 'teste', email: 'testando@hotmail.com'});
  });

});
