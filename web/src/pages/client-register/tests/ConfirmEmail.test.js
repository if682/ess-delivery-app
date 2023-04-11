import { render, fireEvent, act } from '@testing-library/react';
import { ConfirmEmail } from '../RegisterPages/ConfirmEmail/ConfirmEmail';
import { BrowserRouter } from 'react-router-dom';


describe('ConfirmEmail component', () => {
  //substitui o estado recebido por ConfirmEmail pelo navigate da página GetClientEmail
  const state = {name: 'teste', email: 'testando@hotmail.com'}
  
  //Verifica se a página está sendo renderizada corretamente
  test('renders the component', () => {
    const { getByText} = render(<BrowserRouter><ConfirmEmail state={state}/></BrowserRouter>);

    //Checa se o texto "Agora, confirme o seu endereço de e-mail" e o botão "Verificar >" constam no html da página
    expect(getByText('Agora, confirme o seu endereço de e-mail')).toBeInTheDocument();
    expect(getByText('Verificar >'.trim())).toBeInTheDocument();
  });

  //Verifica se a mensagem de erro "Preencha todos os campos!" aparece quando se clica no botão "Verificar >" com input nulo
  test('shows a warning message when not all the fields are filled', () => {
    const { getByText, container, getByTestId} = render(<BrowserRouter><ConfirmEmail state={state} /></BrowserRouter>);

    //inputs que recebem os digitos do código de verificação
    const input1 = getByTestId('first_digit');
    const input2 = getByTestId('second_digit');
    const input3 = getByTestId('third_digit');
    const input4 = getByTestId('fourth_digit');

    //clica no botão "verificar" com um dos inputs nulo
    fireEvent.change(input1, { target: { value: '1' } });
    fireEvent.change(input2, { target: { value: '1' } });
    fireEvent.change(input3, { target: { value: '' } });
    fireEvent.change(input4, { target: { value: '1' } });
    const button = getByText('Verificar >'.trim());
    fireEvent.click(button);
    
    //checa se a mensagem de erro "Preencha todos os campos!" aparece na página
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Preencha todos os campos!');
    });
  });

  //Verifica se a mensagem de erro "Código de verificação incorreto" aparece quando o código de verificação errado é fornecido
  //e o botão "Verificar >" é clicado
  test('shows a warning message when the code is incorrect', () => {
    const { getByText, container, getByTestId} = render(<BrowserRouter><ConfirmEmail state={state} /></BrowserRouter>);

    //inputs que recebem os digitos do código de verificação
    const input1 = getByTestId('first_digit');
    const input2 = getByTestId('second_digit');
    const input3 = getByTestId('third_digit');
    const input4 = getByTestId('fourth_digit');

    //clica no botão "verificar" com o código de verificação errado
    fireEvent.change(input1, { target: { value: '1' } });
    fireEvent.change(input2, { target: { value: '1' } });
    fireEvent.change(input3, { target: { value: '2' } });
    fireEvent.change(input4, { target: { value: '1' } });
    const button = getByText('Verificar >'.trim());
    fireEvent.click(button);

    //checa se a mensagem de erro "Código de verificação incorreto" aparece na página
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Código de verificação incorreto');
    });
  });

  //Verifica se o site passa para a próxima página de cadastro (cadastro-senha) quando o código de verificação fornecido é válido
  test('navigates to the register password page with the name and email parameteres when the code is correct', () => {
    const { getByText, container, getByTestId} = render(<BrowserRouter><ConfirmEmail state={state} /></BrowserRouter>);

    //inputs que recebem os digitos do código de verificação
    const input1 = getByTestId('first_digit');
    const input2 = getByTestId('second_digit');
    const input3 = getByTestId('third_digit');
    const input4 = getByTestId('fourth_digit');

    //clica no botão "verificar" com o código de verificação certo
    fireEvent.change(input1, { target: { value: '1' } });
    fireEvent.change(input2, { target: { value: '1' } });
    fireEvent.change(input3, { target: { value: '1' } });
    fireEvent.change(input4, { target: { value: '1' } });
    const button = getByText('Verificar >'.trim());
    fireEvent.click(button);

    //checa se o site está expondo a página de cadastro de senha e se essa página recebeu o state enviado pelo método navigate
    expect(window.location.pathname).toBe('/cadastro-senha');
    expect(window.history.state.usr).toEqual(state);
  });

  //Verifica se a página é atualizada quando "Reenviar" é clicado
  test('reload the page when "reenviar" is clicked', () => {
    //simula a função de reload
    const reload = jest.fn();
    delete window.location;
    window.location = { reload };
    const reloadSpy = jest.spyOn(window.location, 'reload');

    const { getByText} = render(<BrowserRouter><ConfirmEmail state={state}/></BrowserRouter>);

    //Clica em "reenviar"
    const resend = getByText('Reenviar')
    fireEvent.click(resend);

    //Checa se a função de reload mockada foi chamada 1 vez
    expect(reloadSpy).toHaveBeenCalledTimes(1);
  });

});
