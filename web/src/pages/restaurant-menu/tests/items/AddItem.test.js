import { render, screen, fireEvent, waitFor, act} from '@testing-library/react';
import { AddItemPopup } from '../../itemsComponents/AddItemPopup';
import { RestaurantMenu } from '../../RestaurantMenu';
import deleteItemsAndCategories from '../RemoveTestData';
import { createItem } from '../CreateItem';

describe('AddItemPopup', () => {
    beforeEach(async () => {
        await deleteItemsAndCategories();
    });

    afterEach(async () => {
        await deleteItemsAndCategories();
        await new Promise((r) => setTimeout(r, 1000));
    });

    const items = [
        { id: 1, name: 'Item Teste', description: 'Descrição Teste', price: '10,00', category: 'Categoria Teste' }
    ];

    const onHideMock = jest.fn(() => {});

    it('should render AddItemPopup component when Adicionar Item button is clicked', async () => {
        // Add a category
        render (<RestaurantMenu/>)
        fireEvent.click(screen.getByTestId('add-category-button'));
        fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'Categoria Teste' } });
        fireEvent.click(screen.getByTestId('create-category-button'));

        // Check that "Adicionar item" button now appears
        await waitFor(() => screen.findByTestId('addItemBtn'));

        // Click the "Adicionar item" button
        await waitFor(() => fireEvent.click(screen.getByTestId('addItemBtn')));

        // Check that the "AddItemPopup" component appears
        await waitFor(() => expect(screen.getByTestId('addButton')).toBeInTheDocument());
    }, 10000);

    it('should close the modal when Cancelar button is clicked', async () => {
        await createItem();

        render(<AddItemPopup show={true} onHide={onHideMock} currentItems={items} category={"Categoria Teste"}/>)

        fireEvent.click(screen.getByText('Cancelar'));
        
        await waitFor(() => expect(onHideMock).toHaveBeenCalledTimes(1));

        await waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(1));
    }, 10000);

    it('should show a warning message if any field is left blank', async () => {
        await createItem();

        render(<AddItemPopup show={true} onHide={onHideMock} currentItems={items} category={"Categoria Teste"}/>)
        
        fireEvent.click(screen.getByTestId('addButton'));

        expect(screen.getByText('Todas as entradas devem ser preenchidas!')).toBeInTheDocument();
        
        await waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(1));
    }, 10000);

    it('should show a warning message if the price format is invalid', async () => {
        await createItem();

        render(<AddItemPopup show={true} onHide={onHideMock} currentItems={items} category={"Categoria Teste"}/>)
        
        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste 2'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste. 2'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10.50'}});

        fireEvent.click(screen.getByTestId('addButton'));
        
        await waitFor(() => expect(screen.getByText('O formato do preço não está certo! Tente começar apenas com dígitos e terminar com uma vírgula e duas casas decimais.')).toBeInTheDocument());

        await waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(1));
    }, 10000);

    it('should show a warning message if an item with the same name already exists', async () => {
        await createItem();

        render(<AddItemPopup show={true} onHide={onHideMock} currentItems={items} category={"Categoria Teste"}/>)
        
        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste.'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10,50'}});
        fireEvent.click(screen.getByTestId('addButton'));

        await waitFor(() => expect(screen.getByText("Já existe um item com esse nome!")).toBeInTheDocument());

        waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(1));
    }, 10000);

    // it('should add a new item and close the pop-up when all fields are filled correctly', async () => {
    //     render(<AddItemPopup show={true} onHide={onHideMock} currentItems={currentItems}/>);

    //     fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste'}});
    //     fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste.'}});
    //     fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10,50'}});

    //     fireEvent.click(screen.getByTestId('addButton'));

    //     await waitFor(() => expect(onHideMock).toHaveBeenCalledTimes(1));

    //     render(<RestaurantMenu />);
        
    //     waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBe(1));
    // });
});