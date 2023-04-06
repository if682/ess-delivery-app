import { render, fireEvent, act } from '@testing-library/react';
import { GetClientName, warningMessage} from './GetClientName';
import { BrowserRouter } from 'react-router-dom';


describe('GetClientName component', () => {
  test('renders the component', () => {
    const { getByText, getByPlaceholderText } = render(<BrowserRouter><GetClientName /></BrowserRouter>);

    expect(getByText('Vamos iniciar seu cadastro? :)')).toBeInTheDocument();
    expect(getByPlaceholderText('Nome')).toBeInTheDocument();
    expect(getByText('Continuar >'.trim())).toBeInTheDocument();
  });

  test('shows a warning message when the name input is empty', () => {
    const { getByPlaceholderText, getByText, container } = render(<BrowserRouter><GetClientName /></BrowserRouter>);
    const input = getByPlaceholderText('Nome');
    fireEvent.change(input, { target: { value: '' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);
    act(() => {
      const warningMessage = container.querySelector('#warning_message').textContent;
      expect(warningMessage).toEqual('Esse campo é de preenchimento obrigatório!');
    });
  });

  test('navigates to the next page with the name parameter when the name input is not empty', () => {
    const { getByPlaceholderText, getByText } = render(<BrowserRouter><GetClientName /></BrowserRouter>);
    const input = getByPlaceholderText('Nome');
    fireEvent.change(input, { target: { value: 'John' } });
    const button = getByText('Continuar >'.trim());
    fireEvent.click(button);
    expect(window.location.pathname).toBe('/cadastro-email');
    expect(window.history.state.usr).toEqual({ name: 'John' });
  });
});
