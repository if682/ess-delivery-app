import { render, fireEvent, act } from '@testing-library/react';
import { ClientRegistered } from '../RegisterPages/ClientRegistered/ClientRegistered';
import { BrowserRouter } from 'react-router-dom';


describe('ClientRegistered component', () => {
  //Verifica se a página é renderizada corretamente
  test('renders the component', () => {
    const { getByText} = render(<BrowserRouter><ClientRegistered/></BrowserRouter>);

    //Checa se o texto "Conta criado com sucesso!" e o botão "Peça já" foram renderizados
    expect(getByText('Conta criada com sucesso!')).toBeInTheDocument();
    expect(getByText('Peça já!'.trim())).toBeInTheDocument();
  });

  //Verifica se o usuário é direcionado para a página principal quando o botão "Peça já" é clicado
  test('navigates to the home page when the button "Peça já!" is clicked', () => {
    const {getByText} = render(<BrowserRouter><ClientRegistered/></BrowserRouter>);
    const button = getByText('Peça já!'.trim());
    fireEvent.click(button);
    //Após simular um clique no botão "Peça já!", checa se houve navegação para a home
    expect(window.location.pathname).toBe('/');
  });
});
