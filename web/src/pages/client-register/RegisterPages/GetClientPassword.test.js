import { render, fireEvent, act, waitFor} from '@testing-library/react';
import { GetClientPassword } from './GetClientPassword';
import { BrowserRouter } from 'react-router-dom';


describe('GetClientPassword component', () => {
  const state = {name: 'teste', email: 'testando@hotmail.com'}
  beforeAll(() => {
    // Replace the original implementation of window.fetch with a mock implementation
    jest.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );
  });

  afterAll(() => {
    // Restore the original implementation of window.fetch
    window.fetch.mockRestore();
  });
  
  test('renders the component', () => {
    const { getByText, getByPlaceholderText} = render(<BrowserRouter><GetClientPassword state={state}/></BrowserRouter>);

    expect(getByText('Estamos quase lá, teste!')).toBeInTheDocument();
    expect(getByText('Continuar >'.trim())).toBeInTheDocument();
    expect(getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
    expect(getByPlaceholderText('Confirme sua senha')).toBeInTheDocument();
  });

  test('shows a warning message when not all the text fields are filled', () => {
    const { getByText, container, getByPlaceholderText} = render(<BrowserRouter><GetClientPassword state={state} /></BrowserRouter>);
    const input1 = getByPlaceholderText('Digite sua senha');
    const input2 = getByPlaceholderText('Confirme sua senha')
    fireEvent.change(input1, { target: { value: 'senha' } });
    fireEvent.change(input2, { target: { value: '' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Preencha todos os campos!');
    });
  });

  test('shows a warning message when password and password confirmation do not match', () => {
    const { getByText, container, getByPlaceholderText} = render(<BrowserRouter><GetClientPassword state={state} /></BrowserRouter>);
    const input1 = getByPlaceholderText('Digite sua senha');
    const input2 = getByPlaceholderText('Confirme sua senha')
    fireEvent.change(input1, { target: { value: 'senha' } });
    fireEvent.change(input2, { target: { value: 'outrasenha' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('As senhas não coincidem');
    });
  });

  test('shows warning message when terms of privacy are not accepted', () => {
    const { getByText, container, getByPlaceholderText} = render(<BrowserRouter><GetClientPassword state={state} /></BrowserRouter>);
    const input1 = getByPlaceholderText('Digite sua senha');
    const input2 = getByPlaceholderText('Confirme sua senha')
    fireEvent.change(input1, { target: { value: 'senha' } });
    fireEvent.change(input2, { target: { value: 'senha' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Aceite os termos de privacidade');
    });
  });

  test('registers a new client with valid inputs and navigates to the ClientRegistered page', async() => {
    const { getByText, getByPlaceholderText, getByRole} = render(<BrowserRouter><GetClientPassword state={state} /></BrowserRouter>);
    const input1 = getByPlaceholderText('Digite sua senha');
    const input2 = getByPlaceholderText('Confirme sua senha')
    const checkbox = getByRole('checkbox');
    fireEvent.change(input1, { target: { value: 'senha' } });
    fireEvent.change(input2, { target: { value: 'senha' } });
    fireEvent.click(checkbox);
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);
    await Promise.resolve();

    // Verify that fetch was called with the correct arguments
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'teste', email: 'testando@hotmail.com', password: 'senha' }),
    });
    expect(window.location.pathname).toBe('/cadastro-finalizado');
  });

});
