import { render, fireEvent, act } from '@testing-library/react';
import { GetClientName} from '../RegisterPages/GetClientName/GetClientName';
import { BrowserRouter } from 'react-router-dom';


describe('GetClientName component', () => {

  //Verifica se a página foi renderizada corretamente
  test('renders the component', () => {
    const { getByText, getByPlaceholderText } = render(<BrowserRouter><GetClientName /></BrowserRouter>);

    //checa se o texto "Vamos iniciar seu cadastro? :)", o input com placeholder "Nome" e o botão "continuar" constam no html da página
    expect(getByText('Vamos iniciar seu cadastro? :)')).toBeInTheDocument();
    expect(getByPlaceholderText('Nome')).toBeInTheDocument();
    expect(getByText('Continuar >'.trim())).toBeInTheDocument();
  });

  //Verifica se a página expõe uma mensagem de erro quando o botão "continuar" é clicado com o input vazio
  test('shows a warning message when the name input is empty', () => {
    const { getByPlaceholderText, getByText, container } = render(<BrowserRouter><GetClientName /></BrowserRouter>);

    //Clica em "continuar" com o input vazio
    const input = getByPlaceholderText('Nome');
    fireEvent.change(input, { target: { value: '' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);

    //checa se a mensagem de erro "Esse campo é de preenchimento obrigatório!" consta na página
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Esse campo é de preenchimento obrigatório!');
    });
  });

  //Verifica se o site passa para a próxima página de cadastro (cadastro-email) quando o botão é clicado e o a caixa de texto não está vazia
  test('navigates to the next page with the name parameter when the name input is not empty', () => {

    const { getByPlaceholderText, getByText } = render(<BrowserRouter><GetClientName /></BrowserRouter>);

    //Clica em "continuar" com a caixa de texto preenchida
    const input = getByPlaceholderText('Nome');
    fireEvent.change(input, { target: { value: 'John' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);

    //checa se o site está expondo a página de cadastro de e-mail e se essa página recebeu o state enviado pelo método navigate
    expect(window.location.pathname).toBe('/cadastro-email');
    expect(window.history.state.usr).toEqual({ name: 'John' });
  });
});
