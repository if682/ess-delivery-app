import { render, screen, fireEvent, queryByText, waitForElementToBeRemoved} from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderDetails from "./OrderDetails";

const mockOrder = {
    id: "098123",
    place: "McDonald's",
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
  };
  

describe("OrderDetails Component", () => {
  test("renders correctly with provided data", () => {
    render(<OrderDetails order={mockOrder} />);

    expect(screen.getByText(/#098123/i)).toBeInTheDocument();
    expect(screen.getByText(/McDonald's/i)).toBeInTheDocument();
    expect(screen.getByText(/Cartão de Crédito/i)).toBeInTheDocument();
    expect(screen.getByText(/20,00/i)).toBeInTheDocument();
  });

  test("modal opens and closes correctly when clicking help buttons", async () => {
    render(<OrderDetails order={mockOrder} />);

    expect(screen.queryByText("Como podemos ajudar?")).not.toBeInTheDocument();

    const helpOrderButton = screen.getByText(/Ajuda com o pedido/i);
    const helpDeliveryButton = screen.getByText(/Ajuda com a entrega/i);
  
    fireEvent.click(helpOrderButton);
    expect(screen.queryByText("Como podemos ajudar?")).toBeInTheDocument();

    const closeButton = screen.getByTestId("close-modal");
    fireEvent.click(closeButton);
    await waitForElementToBeRemoved(() => screen.queryByText("Como podemos ajudar?"));
    expect(screen.queryByText("Como podemos ajudar?")).not.toBeInTheDocument();
  
    fireEvent.click(helpDeliveryButton);
    expect(screen.queryByText("Como podemos ajudar?")).toBeInTheDocument();
  
    const cancelButton = screen.getByText(/Cancelar/i);
    fireEvent.click(cancelButton);
    await waitForElementToBeRemoved(() => screen.queryByText("Como podemos ajudar?"));
    expect(screen.queryByText("Como podemos ajudar?")).not.toBeInTheDocument();
  });
  
  test("modal help displays the subject and message fields correctly", async () => {
    render(<OrderDetails order={mockOrder} />);
  
    const helpOrderButton = screen.getByText(/Ajuda com o pedido/i);
    fireEvent.click(helpOrderButton);
  
    const subjectInput = await screen.findByTestId("subject-input");
    const messageInput = await screen.findByTestId("message-input");
  
    expect(subjectInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });
  
});
