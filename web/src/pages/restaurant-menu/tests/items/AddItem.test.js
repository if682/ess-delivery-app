import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import { AddItemPopup } from '../../itemsComponents/AddItemPopup';
import { RestaurantMenu } from '../../RestaurantMenu';
import deleteItemsAndCategories from '../RemoveTestData';

describe('AddItemPopup', () => {
    beforeEach(async () => {
        await deleteItemsAndCategories();

        render(<RestaurantMenu />);
        
        waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(0));
    });

    afterEach(async () => {
        await deleteItemsAndCategories();
    });

    const currentItems = [
    { id: 1, name: 'Item 1', description: 'Descrição 1', price: '10,00', category: 'teste' },
    { id: 2, name: 'Item 2', description: 'Descrição 2', price: '20,00', category: 'teste' },
    ];

    const onHideMock = jest.fn(() => {});

    it('should render AddItemPopup component when Adicionar Item button is clicked', async () => {
        // Add a category
        fireEvent.click(screen.getByTestId('add-category-button'));
        fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'Categoria Teste' } });
        fireEvent.click(screen.getByTestId('create-category-button'));

        // Check that "Adicionar item" button now appears
        waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(1));

        // Click the "Adicionar item" button
        waitFor(() => fireEvent.click(screen.getByTestId('addItemBtn')));

        // Check that the "AddItemPopup" component appears
        waitFor(() => expect(screen.getByTestId('addButton')).toBeInTheDocument());
    });

    it('should close the modal when Cancelar button is clicked', async () => {
        render(<AddItemPopup show={true} onHide={onHideMock} currentItems={currentItems} category={'teste'}/>);

        fireEvent.click(screen.getByText('Cancelar'));

        await waitFor(() => expect(onHideMock).toHaveBeenCalledTimes(1));

        render(<RestaurantMenu />);
        
        waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(0));
    });

    it('should show a warning message if any field is left blank', () => {
        render(<AddItemPopup show={true} onHide={onHideMock} currentItems={currentItems} category={'teste'}/>);

        fireEvent.click(screen.getByTestId('addButton'));

        expect(screen.getByText('Todas as entradas devem ser preenchidas!')).toBeInTheDocument();

        render(<RestaurantMenu />);
        
        waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(0));
    });

    it('should show a warning message if the price format is invalid', () => {
        render(<AddItemPopup show={true} onHide={onHideMock} currentItems={currentItems} category={'teste'}/>);

        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste.'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10.50'}});

        fireEvent.click(screen.getByTestId('addButton'));
        
        expect(screen.getByText('O formato do preço não está certo! Tente começar apenas com dígitos e terminar com uma vírgula e duas casas decimais.')).toBeInTheDocument();

        render(<RestaurantMenu />);
        
        waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(0));
    });

    it('should show a warning message if an item with the same name already exists', async () => {
        render(<AddItemPopup show={true} onHide={onHideMock} currentItems={currentItems}/>);

        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item 1'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste.'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10,50'}});
        fireEvent.click(screen.getByTestId('addButton'));

        expect(screen.getByText("Já existe um item com esse nome!")).toBeInTheDocument();

        render(<RestaurantMenu />);
        
        waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(0));
    });

    it('should add a new item and close the pop-up when all fields are filled correctly', async () => {
        render(<AddItemPopup show={true} onHide={onHideMock} currentItems={currentItems}/>);

        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste.'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10,50'}});

        fireEvent.click(screen.getByTestId('addButton'));

        await waitFor(() => expect(onHideMock).toHaveBeenCalledTimes(1));

        render(<RestaurantMenu />);
        
        waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(1));
    });
});