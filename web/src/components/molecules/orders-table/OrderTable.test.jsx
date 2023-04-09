import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import OrdersTable from "./OrdersTable";

const mockOrders = [
  {
    id: "001",
    place: "Restaurante 1",
    address: "Rua 1, 11",
    date: "01/01/2021",
    items: [
      {
        name: "Item 1",
        quantity: 1,
        price: 10.0
      },
      {
        name: "Item 2",
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
  },
  {
    id: "002",
    place: "Restaurante 2",
    address: "Rua 2, 22",
    date: "02/02/2021",
    items: [
      {
        name: "Item 3",
        quantity: 1,
        price: 12.0
      },
      {
        name: "Item 4",
        quantity: 1,
        price: 8.0
      }
    ],
    values: {
      subtotal: 20.0,
      deliveryFee: 5.0,
      total: 25.0
    },
    paymentMethod: "Cartão de débito"
  }
];

describe("OrdersTable Component", () => {
  test("renders the list of orders correctly", () => {
    render(
      <Router>
        <OrdersTable orders={mockOrders} />
      </Router>
    );

    mockOrders.forEach((order) => {
      expect(screen.getByText(new RegExp(order.place, "i"))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(order.address, "i"))).toBeInTheDocument();
    });
  });

  test("filters by restaurant name correctly", () => {
    render(
      <Router>
        <OrdersTable orders={mockOrders} />
      </Router>
    );

    const nameFilterInput = screen.getByPlaceholderText("Nome do restaurante");

    fireEvent.change(nameFilterInput, { target: { value: "Restaurante 1" } });

    expect(screen.getByText(/Restaurante 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Rua 1, 11/i)).toBeInTheDocument();

    expect(screen.queryByText(/Restaurante 2/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Rua 2, 22/i)).not.toBeInTheDocument();
  });

  test("filters by delivery address correctly", () => {
    render(
      <Router>
        <OrdersTable orders={mockOrders} />
      </Router>
    );

    const addressFilterInput = screen.getByPlaceholderText("Endereço de entrega");

    fireEvent.change(addressFilterInput, { target: { value: "Rua 1, 11" } });

    expect(screen.getByText(/Restaurante 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Rua 1, 11/i)).toBeInTheDocument();

    expect(screen.queryByText(/Restaurante 2/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Rua 2, 22/i)).not.toBeInTheDocument();
  });

  test("navigates between the list of orders and order details correctly", () => {
    render(
      <Router>
        <OrdersTable orders={mockOrders} />
      </Router>
    );
  
    fireEvent.click(screen.getByText(/Restaurante 1/i));

    expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 2/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Voltar/i));

    expect(screen.getByText(/Histórico de pedidos/i)).toBeInTheDocument();
    expect(screen.getByText(/Restaurante 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Restaurante 2/i)).toBeInTheDocument();
  });

});
