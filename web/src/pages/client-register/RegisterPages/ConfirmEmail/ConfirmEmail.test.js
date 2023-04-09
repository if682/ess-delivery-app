import { render, fireEvent, act } from '@testing-library/react';
import { ConfirmEmail } from './ConfirmEmail';
import { BrowserRouter } from 'react-router-dom';


describe('ConfirmEmail component', () => {
  const state = {name: 'teste', email: 'testando@hotmail.com'}
  test('renders the component', () => {
    const { getByText} = render(<BrowserRouter><ConfirmEmail state={state}/></BrowserRouter>);

    expect(getByText('Agora, confirme o seu endereço de e-mail')).toBeInTheDocument();
    expect(getByText('Verificar >'.trim())).toBeInTheDocument();
  });

  test('shows a warning message when not all the fields are filled', () => {
    const { getByText, container, getByTestId} = render(<BrowserRouter><ConfirmEmail state={state} /></BrowserRouter>);
    const input1 = getByTestId('first_digit');
    const input2 = getByTestId('second_digit');
    const input3 = getByTestId('third_digit');
    const input4 = getByTestId('fourth_digit');
    fireEvent.change(input1, { target: { value: '1' } });
    fireEvent.change(input2, { target: { value: '1' } });
    fireEvent.change(input3, { target: { value: '' } });
    fireEvent.change(input4, { target: { value: '1' } });
    const button = getByText('Verificar >'.trim());
    fireEvent.click(button);
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Preencha todos os campos!');
    });
  });

  test('shows a warning message when the code is incorrect', () => {
    const { getByText, container, getByTestId} = render(<BrowserRouter><ConfirmEmail state={state} /></BrowserRouter>);
    const input1 = getByTestId('first_digit');
    const input2 = getByTestId('second_digit');
    const input3 = getByTestId('third_digit');
    const input4 = getByTestId('fourth_digit');
    fireEvent.change(input1, { target: { value: '1' } });
    fireEvent.change(input2, { target: { value: '1' } });
    fireEvent.change(input3, { target: { value: '2' } });
    fireEvent.change(input4, { target: { value: '1' } });
    const button = getByText('Verificar >'.trim());
    fireEvent.click(button);
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Código de verificação incorreto');
    });
  });

  test('navigates to the register password page with the name and email parameteres when the code is correct', () => {
    const { getByText, container, getByTestId} = render(<BrowserRouter><ConfirmEmail state={state} /></BrowserRouter>);
    const input1 = getByTestId('first_digit');
    const input2 = getByTestId('second_digit');
    const input3 = getByTestId('third_digit');
    const input4 = getByTestId('fourth_digit');
    fireEvent.change(input1, { target: { value: '1' } });
    fireEvent.change(input2, { target: { value: '1' } });
    fireEvent.change(input3, { target: { value: '1' } });
    fireEvent.change(input4, { target: { value: '1' } });
    const button = getByText('Verificar >'.trim());
    fireEvent.click(button);
    expect(window.location.pathname).toBe('/cadastro-senha');
    expect(window.history.state.usr).toEqual(state);
  });

  test('reload the page when "reenviar" is clicked', () => {
    const reload = jest.fn();
    delete window.location;
    window.location = { reload };
    const reloadSpy = jest.spyOn(window.location, 'reload');
    const { getByText} = render(<BrowserRouter><ConfirmEmail state={state}/></BrowserRouter>);
    const resend = getByText('Reenviar')
    fireEvent.click(resend);
    expect(reloadSpy).toHaveBeenCalledTimes(1);
  });

});
