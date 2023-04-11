import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DeactivateAccountPopup } from "./DeactivateAccountPopup";
import { BrowserRouter } from "react-router-dom";

describe("DeactivateAccountPopup", () => {
    let onHideMock, props;
    
    //mocka a função onHide e cria o props que são recebidos pelo popup
    beforeEach(() => {
        onHideMock = jest.fn();
        props = {
            show: true,
            onHide: onHideMock
        };
    });
    
    //Verifica se o popup é renderizado corretamente
    it('renders correctly', () => {
        const { container } = render(<BrowserRouter><DeactivateAccountPopup {...props} /></BrowserRouter>);
        expect(container.firstChild).toMatchSnapshot();
    });

    //Verifica se a função mockada onHide é chamada quando o botão de cancelar é clicado 
    it('should call onHide when cancel button is clicked', () => {
        const { getByText } = render(<BrowserRouter><DeactivateAccountPopup {...props} /></BrowserRouter>);
        fireEvent.click(getByText('Cancelar'));
        expect(onHideMock).toHaveBeenCalled();
    });

    //Verifica se o site expõe a tela de login após um clique no botão de confirmar
    it('should navigate to the login page when confirm button is clicked', () => {
        const { getByText } = render(<BrowserRouter><DeactivateAccountPopup {...props} /></BrowserRouter>);
        fireEvent.click(getByText('Confirmar'));
        expect(window.location.pathname).toBe('/login');
    });
    
});
