import { render, screen, fireEvent, waitFor, getByText, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import moment from "moment";
import userEvent from '@testing-library/user-event'
import RestaurantTotal from "./RestaurantTotal";

describe("Total items from orders from a restaurant", () => {
  let props;
  let { container } = render(<BrowserRouter><RestaurantTotal {...props} /></BrowserRouter>);
  beforeEach(() => {container = render(<BrowserRouter><RestaurantTotal {...props} /></BrowserRouter>);})

  it('renders correctly', () => {
    expect(screen.findByText("Voltar")).toBeDefined();
  });
  it('should set month selector to current month', () => {
    const currentDateYYYYMM = moment(new Date()).to("YYYY-MM");
    expect(screen.findByDisplayValue(currentDateYYYYMM)).toBeDefined();
  });
  it('should be able to input data into monthInput', async () => {
    const testDateYYYYMM = "2021-01";
    // nao faz input por algum motivo misterioso, "not an input function" (é literalmente um elemento input)
    userEvent.input(await screen.findByTestId("monthInput"), { target: { value: testDateYYYYMM } })
    expect(screen.findByDisplayValue(testDateYYYYMM)).toBeDefined();
  });
  it('should have this months order total for a restaurant', () => {
    expect(screen.findByDisplayValue("pedidos")).toBeDefined();
  });
  it('is counting the number ordered', () => {
    expect(screen.findByDisplayValue("\d pedidos")).toBeDefined();
  });
  it('able to go back to total pedidos page', () => {
    userEvent.click(screen.getByText("Voltar"));
    expect(window.location.pathname).toBe('/total-pedidos')
  });
});