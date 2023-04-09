import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DeactivateAccountPopup } from "./DeactivateAccountPopup";
import { BrowserRouter } from "react-router-dom";

describe("DeactivateAccountPopup", () => {
    let onHideMock, props;
    beforeEach(() => {
        onHideMock = jest.fn();
        props = {
            show: true,
            onHide: onHideMock
        };
    });
    
    it('renders correctly', () => {
        const { container } = render(<BrowserRouter><DeactivateAccountPopup {...props} /></BrowserRouter>);
        expect(container.firstChild).toMatchSnapshot();
    });
    it('should call onHide when cancel button is clicked', () => {
        const { getByText } = render(<BrowserRouter><DeactivateAccountPopup {...props} /></BrowserRouter>);
        fireEvent.click(getByText('Cancelar'));
        expect(onHideMock).toHaveBeenCalled();
    });
    it('should navigate to the login page when confirm button is clicked', () => {
        const { getByText } = render(<BrowserRouter><DeactivateAccountPopup {...props} /></BrowserRouter>);
        fireEvent.click(getByText('Confirmar'));
        expect(window.location.pathname).toBe('/login');
    });
    
});
