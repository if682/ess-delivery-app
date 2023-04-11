import { render, fireEvent, act } from '@testing-library/react';
import { GetClientEmail} from '../RegisterPages/GetClientEmail/GetClientEmail';
import { GetClientName } from '../RegisterPages/GetClientName/GetClientName';
import { BrowserRouter, Router} from 'react-router-dom';



describe('GetClientEmail component', () => {
  //Simula a navegação da página de cadastro de nome para a página de cadastro de email antes da execução de cada teste
  beforeEach(() =>{
    const { getByPlaceholderText, getByText} = render(<BrowserRouter><GetClientName /></BrowserRouter>);
    const input = getByPlaceholderText('Nome');
    fireEvent.change(input, { target: { value: 'teste' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);
  })

  //Verifica se a página é renderizada corretamente
  test('renders the component', () => {
    const { getByText, getByPlaceholderText, getByTestId} = render(<BrowserRouter><GetClientEmail/></BrowserRouter>);
    
    //Checa se o texto "Por favor, nos forneça ou seu melhor email:", a caixa de texto com placeholder "E-mail"
    //e o botão "continuar" estão no doc html da página
    expect(getByText('Por favor, nos forneça ou seu melhor email:')).toBeInTheDocument();
    expect(getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(getByTestId('button-reg-email')).toBeInTheDocument();
  });

  //Verifica se a página expõe uma mensagem de erro quando a caixa de texto do email está vazia
  test('shows a warning message when the e-mail input is empty', () => {
    const { getByPlaceholderText, getByTestId, container} = render(<BrowserRouter><GetClientEmail/></BrowserRouter>);

    //clica no botão "Confirmar" quando a caixa de texto que recebe o e-mail está vazia
    const input = getByPlaceholderText('E-mail');
    fireEvent.change(input, { target: { value: '' } });
    const button = getByTestId('button-reg-email');
    fireEvent.click(button);

    //checa se a mensagem de erro "Esse campo é de preenchimento obrigatório!" consta na página
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Esse campo é de preenchimento obrigatório!');
    });
  });

  //Verifica se a página expõe uma mensagem de erro quando o e-mail fornecido não tem um formato válido "text@text.(com/br/org/...)"
  test('shows a warning message when the e-mail input is not valid', () => {
    const { getByPlaceholderText, container, getByTestId} = render(<BrowserRouter><GetClientEmail/></BrowserRouter>);

    //clica no botão "Confirmar" quando o e-mail fornecido não possui o formato ideal
    const input = getByPlaceholderText('E-mail');
    fireEvent.change(input, { target: { value: 'teste' } });
    const button = getByTestId('button-reg-email');
    fireEvent.click(button);

    //checa se a mensagem de erro "O e-mail fornecido possui um formato inválido" consta na página
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('O e-mail fornecido possui um formato inválido');
    });
  });

    //Verifica se o site navega para a página de login assim que se tenta cadastrar um e-mail já registrado
    test('navigates to login page if email is already registered', () => {

    //simula a resposta para a seleção dos dados dos clientes na database
    const currentClients = [{id: 1, name: 'teste1', email: 'teste@hotmail.com', password: 'teste'}];

    const { getByPlaceholderText, getByTestId} = render(<BrowserRouter><GetClientEmail teste={true} currentC={currentClients}/></BrowserRouter>);

    //clica no botão "confirmar" quando o e-mail fornecido já está vinculado a uma outra conta
    const input = getByPlaceholderText('E-mail');
    fireEvent.change(input, { target: { value: 'teste@hotmail.com' } });
    const button = getByTestId('button-reg-email');
    fireEvent.click(button);

    //checa se o site está expondo a página de cadastro de senha e se essa página recebeu o state enviado pelo método navigate 
    expect(window.location.pathname).toBe('/login');
    expect(window.history.state.usr).toEqual({email: 'teste@hotmail.com'});
  });

  //Verifica se o site navega para a próxima página de cadastro (validacao-email) quando o e-mail fornecido é válido e disponível
  test('navigates to email validation page if email is not registered and its valid', () => {
    const { getByPlaceholderText, getByTestId} = render(<BrowserRouter><GetClientEmail/></BrowserRouter>);

    //clica no botão "confirmar" quando o e-mail pode ser utilizado
    const input = getByPlaceholderText('E-mail');
    fireEvent.change(input, { target: { value: 'testando@hotmail.com' } });
    const button = getByTestId('button-reg-email');
    fireEvent.click(button);

    //checa se o site está expondo a página de confirmação de senha e se essa página recebeu o state enviado pelo método navigate
    expect(window.location.pathname).toBe('/validacao-email');
    expect(window.history.state.usr).toEqual({ name: 'teste', email: 'testando@hotmail.com'});
  });

});
