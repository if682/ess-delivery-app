import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MyOrders from "./MyOrders";


describe("MyOrders Page", () => {
  test("renders 'Minha conta' title and OrdersTable component correctly", async () => {
    render(
      <Router>
        <MyOrders />
      </Router>
    );

    expect(await screen.findByText(/Minha conta/i)).toBeInTheDocument();
    expect(await screen.findByText(/Histórico de pedidos/i)).toBeInTheDocument();
  });
});
