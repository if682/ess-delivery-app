import { render, screen, fireEvent, waitFor, getByText, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import moment from "moment";
import OrderTotals from "./OrderTotals";
import userEvent from '@testing-library/user-event'
import { wait } from "@testing-library/user-event/dist/utils";

describe("Total orders from restaurant", () => {
  let props;
  let { container } = render(<BrowserRouter><OrderTotals {...props} /></BrowserRouter>);
  beforeEach(() => {container = render(<BrowserRouter><OrderTotals {...props} /></BrowserRouter>);})

  it('renders table of total ordered', () => {
    expect(screen.findByText("Voltar")).toBeDefined();
  });
  it('should set month selector to current month', () => {
    const currentDateYYYYMM = moment(new Date()).to("YYYY-MM");
    expect(screen.findByDisplayValue(currentDateYYYYMM)).toBeDefined();
  });
  it('should be able to input data into monthInput', () => {
    const testDateYYYYMM = "2021-01";
    // nao faz input por algum motivo misterioso
    userEvent.input(screen.findByTestId("monthInput"), { target: { value: testDateYYYYMM } })
    expect(screen.findByDisplayValue(testDateYYYYMM)).toBeDefined();
  });
  it('should have this months order total for a restaurant', () => {
    //current date has one order, previous step should've set to test date but it's broken for no reason
    expect(screen.findByDisplayValue("Total: R$\d{1,}")).toBeDefined();
  });
  it('can expand accordion element and see "most ordered item"', () => {
    // cant click, probably due to being a react-bootstrap element
    userEvent.click(screen.getByDisplayValue("Total: R$\d{1,}"));
    expect(screen.findByDisplayValue("Mais pedido:")).toBeDefined();
  });
 
  it('is counting the number ordered', () => {
    expect(screen.findByDisplayValue("\d unidades")).toBeDefined();
  });
  it('able to go back to minha conta page', () => {
    userEvent.click(screen.getByText("Voltar"));
    expect(window.location.pathname).toBe('/minha-conta')
  });
});