import { render, fireEvent, act } from '@testing-library/react';
import { ClientRegistered } from '../RegisterPages/ClientRegistered/ClientRegistered';
import { BrowserRouter } from 'react-router-dom';


describe('ClientRegistered component', () => {
  test('renders the component', () => {
    const { getByText} = render(<BrowserRouter><ClientRegistered/></BrowserRouter>);

    expect(getByText('Conta criada com sucesso!')).toBeInTheDocument();
    expect(getByText('Peça já!'.trim())).toBeInTheDocument();
  });


  test('navigates to the home page when the button "Peça já!" is clicked', () => {
    const {getByText} = render(<BrowserRouter><ClientRegistered/></BrowserRouter>);
    const button = getByText('Peça já!'.trim());
    fireEvent.click(button);
    expect(window.location.pathname).toBe('/');
  });
});
