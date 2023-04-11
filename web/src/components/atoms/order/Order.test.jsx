import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Order from './Order';

describe('Order', () => {
  const orderData = {
    id: "098123",
    place: "McDonald's",
    address: "Rua dos Bobos, 0",
    date: "01/01/2021",
    items: [
      {
        name: "Big Mac",
        quantity: 1,
        price: 10.0
      },
      {
        name: "Coca-Cola",
        quantity: 1,
        price: 5.0
      }
    ],
    values: {
      subtotal: 15.0,
      deliveryFee: 5.0,
      total: 20.0
    },
    paymentMethod: "Cartão de crédito"
  };

  test('verifica se todos os elementos estão sendo renderizados na tela', () => {
    render(<Order {...orderData} />);

    expect(screen.getByText(`#${orderData.id}`)).toBeInTheDocument();
    expect(screen.getByText(orderData.place)).toBeInTheDocument();
    expect(screen.getByText(orderData.address)).toBeInTheDocument();
    expect(screen.getByText(orderData.date)).toBeInTheDocument();
  });

  test('exibe os detalhes do pedido corretamente quando o "Detalhes" é clicado', () => {
    render(<Order {...orderData} />);
  
    const toggleButton = screen.getByTestId('toggle-details');
    fireEvent.click(toggleButton);
  
    expect(screen.getByText(orderData.items[0].name)).toBeInTheDocument();
    expect(screen.getByText(orderData.items[1].name)).toBeInTheDocument();
    expect(screen.getByText(orderData.paymentMethod)).toBeInTheDocument();
  });

  test('verifica se a função selectOrder é chamada quando o botão "Ajuda" é clicado', () => {
    const selectOrderMock = jest.fn();
    render(<Order {...orderData} selectOrder={selectOrderMock} />);
  
    const helpButton = screen.getByText("Ajuda");
    fireEvent.click(helpButton);
  
    expect(selectOrderMock).toHaveBeenCalled();
  });
  
});