import { render, fireEvent, act, waitFor} from '@testing-library/react';
import { GetClientPassword } from '../RegisterPages/GetClientPassword/GetClientPassword';
import { BrowserRouter } from 'react-router-dom';


describe('GetClientPassword component', () => {
  //Substitui o state enviado a partir da navegação da página de confirmação de e-mail para essa página
  const state = {name: 'teste', email: 'testando@hotmail.com'}
  beforeAll(() => {
    //Mock da implementação do método fetch
    jest.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );
  });

  afterAll(() => {
    //Restaura a implementação original do método fetch
    window.fetch.mockRestore();
  });

  //Verifica se a página é renderizada corretamente
  test('renders the component', () => {
    const { getByText, getByPlaceholderText} = render(<BrowserRouter><GetClientPassword state={state}/></BrowserRouter>);

    //checa se o texto "Estamos quase lá, teste!", o botão "continuar"
    expect(getByText('Estamos quase lá, teste!')).toBeInTheDocument();
    expect(getByText('Continuar >'.trim())).toBeInTheDocument();
    expect(getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
    expect(getByPlaceholderText('Confirme sua senha')).toBeInTheDocument();
  });

  //Verifica se a página expõe uma mensagem de erro quando há caixas de textos vazias
  test('shows a warning message when not all the text fields are filled', () => {
    const { getByText, container, getByPlaceholderText} = render(<BrowserRouter><GetClientPassword state={state} /></BrowserRouter>);

    //clica em "continuar" com a caixa de texto que recebe a confirmação da senha vazia
    const input1 = getByPlaceholderText('Digite sua senha');
    const input2 = getByPlaceholderText('Confirme sua senha')
    fireEvent.change(input1, { target: { value: 'senha' } });
    fireEvent.change(input2, { target: { value: '' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);

    //checa se a mensagem de erro "Preencha todos os campos!" consta na página
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Preencha todos os campos!');
    });
  });

  //Verifica se a página expõe uma mensagem de erro quando o "continuar" é clicado e os valores fornecidos para "senha" e "confirme sua senha" não são iguais
  test('shows a warning message when password and password confirmation do not match', () => {
    const { getByText, container, getByPlaceholderText} = render(<BrowserRouter><GetClientPassword state={state} /></BrowserRouter>);
    const input1 = getByPlaceholderText('Digite sua senha');
    const input2 = getByPlaceholderText('Confirme sua senha')
    fireEvent.change(input1, { target: { value: 'senha' } });
    fireEvent.change(input2, { target: { value: 'outrasenha' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);

    //checa se a mensagem de erro "As senhas não coincidem" consta na página
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('As senhas não coincidem');
    });
  });

  //Verifica se a página expõe uma mensagem de erro quando "continuar" é clicado e a checkbox de aceitação dos termos de privacidade não
  test('shows warning message when terms of privacy are not accepted', () => {
    const { getByText, container, getByPlaceholderText} = render(<BrowserRouter><GetClientPassword state={state} /></BrowserRouter>);

    //Clica em "continuar" após preencher as caixas de textos, mas não a checkbox
    const input1 = getByPlaceholderText('Digite sua senha');
    const input2 = getByPlaceholderText('Confirme sua senha')
    fireEvent.change(input1, { target: { value: 'senha' } });
    fireEvent.change(input2, { target: { value: 'senha' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);

    //checa se a mensagem de erro "Aceite os termos de privacidade" consta na página
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Aceite os termos de privacidade');
    });
  });

  //Verifica se há a tentativa de registrar um novo cliente na db e se o site passa para a página de finalização de cadastro do site
  //quando "continuar" é clicado e todos os inputs estão preenchidos corretamente
  test('registers a new client with valid inputs and navigates to the ClientRegistered page', async() => {
    const { getByText, getByPlaceholderText, getByRole} = render(<BrowserRouter><GetClientPassword state={state} /></BrowserRouter>);

    //clica em "continuar" quando os inputs (caixas de texto e checkbox) foram preenchidas da forma certa
    const input1 = getByPlaceholderText('Digite sua senha');
    const input2 = getByPlaceholderText('Confirme sua senha')
    const checkbox = getByRole('checkbox');
    fireEvent.change(input1, { target: { value: 'senha' } });
    fireEvent.change(input2, { target: { value: 'senha' } });
    fireEvent.click(checkbox);
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);
    await Promise.resolve();

    // Verifica se a função fetch POST foi chamada com os parâmetros certos -> representa a tentativa de cadastro do cliente
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'teste', email: 'testando@hotmail.com', password: 'senha' }),
    });
    //checa se o site está expondo a página de finalização de cadastro
    expect(window.location.pathname).toBe('/cadastro-finalizado');
  });

});
