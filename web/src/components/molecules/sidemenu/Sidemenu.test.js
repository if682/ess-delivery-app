import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Sidemenu } from './Sidemenu.js';
import { Router } from 'react-router';

const MockSidebar = () => {
  return (
    <BrowserRouter>
      <Router location={history.location} navigator={history}>{children}</Router>
    </BrowserRouter>
  )
} 

describe('Sidemenu', () => {
  it('navigation to início', async () => {
    const history = createMemoryHistory();
    render(
      <Sidemenu />
    );
    const divElement = screen.getByTestId('inicio-nav');
    fireEvent.click(divElement)
    expect(divElement.pathname).toBe('/');
  });

  it('navigation to restaurantes', async () => {
    const history = createMemoryHistory();
    render(
      <Sidemenu />
    );
    const divElement = screen.getByTestId('restaurantes-nav');
    fireEvent.click(divElement)
    expect(divElement.pathname).toBe('/restaurantes');
  });

  it('navigation to perfil', async () => {
    const history = createMemoryHistory();
    render(
      <Sidemenu />
    );
    const divElement = screen.getByTestId('perfil-nav');
    fireEvent.click(divElement)
    expect(divElement.pathname).toBe('/perfil');
  });

  it('navigation to cardapio', async () => {
    const history = createMemoryHistory();
    render(
      <Sidemenu />
    );
    const divElement = screen.getByTestId('cardapio-nav');
    fireEvent.click(divElement)
    expect(divElement.pathname).toBe('/cardapio');
  });

  it('navigation to pedidos', async () => {
    const history = createMemoryHistory();
    render(
      <Sidemenu />
    );
    const divElement = screen.getByTestId('pedidos-nav');
    fireEvent.click(divElement)
    expect(divElement.pathname).toBe('/pedidos');
  });

  it('navigation to avaliações', async () => {
    const history = createMemoryHistory();
    render(
      <Sidemenu />
    );
    const divElement = screen.getByTestId('avaliacoes-nav');
    fireEvent.click(divElement)
    expect(divElement.pathname).toBe('/avaliacoes');
  });

  it('navigation to ajuda', async () => {
    const history = createMemoryHistory();
    render(
      <Sidemenu />
    );
    const divElement = screen.getByTestId('ajuda-nav');
    fireEvent.click(divElement)
    expect(divElement.pathname).toBe('/ajuda');
  });

  it('should render logo image', async () => {
    render(
      <Sidemenu />
    );
    const imgElement = await screen.findByTestId('logo-nav')
    expect(imgElement).toBeInTheDocument();
  });
});