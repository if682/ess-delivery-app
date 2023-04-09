import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import { EdiItemPopup } from '../../itemsComponents/EdiItemPopup';
import { RestaurantMenu } from '../../RestaurantMenu';
import deleteItemsAndCategories from '../RemoveTestData';
import { createItem } from '../CreateItem';

describe('EdiItemPopup', () => {
    beforeEach(async () => {
        await deleteItemsAndCategories();

        await createItem();
    });

    afterEach(async () => {
        await deleteItemsAndCategories();
    });

    const testItem = [
    { name: 'Item Teste', description: 'Descrição do item teste.', price: '10,50', category: 'Categoria Teste' }
    ];

    const onHideMock = jest.fn(() => {});

    it('should render EdiItemPopup component when Editar button is clicked', async () => {
        // Check that "Editar" button now appears
        await waitFor(() => screen.findByTestId('editItemButton'));

        // Click "Editar" button
        fireEvent.click(screen.getByTestId('editItemButton'));

        // Check if pop-up appears ("Cancelar" button)
        await waitFor(() => screen.findByText('Cancelar'));
    });

    it('should close the modal when Cancelar button is clicked', async () => {
        // Fire Editar popup
        fireEvent.click(screen.getByText('Editar'));

        // Wait for the popup to appear
        await waitFor(() => screen.findByText('Cancelar'));

        // Click "Cancelar"
        fireEvent.click(screen.getByText('Cancelar'));

        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());
        
        // Check the item is still the same
        await waitFor(() => screen.findByText("Item Teste"));
    });

    it('should show a warning message if any field is left blank', async () => {
        // Fire Editar popup
        fireEvent.click(screen.getByText('Editar'));

        // Wait for the popup to appear
        await waitFor(() => screen.findByText('Cancelar'));

        // Change Nome to blank
        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: ''}});

        // Click "Editar"
        fireEvent.click(screen.getByTestId('popupEditButton'));

        // Expect error message
        await waitFor(() => screen.findByText('Todas as entradas devem ser preenchidas!'));

        // Click "Cancelar"
        fireEvent.click(screen.getByText('Cancelar'));

        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());
        
        // Check if item is still the same
        await waitFor(() => screen.findByText("Item Teste"));
    });

    it('should show a warning message if the price format is invalid', async () => {
        // Fire Editar popup
        fireEvent.click(screen.getByText('Editar'));

        // Wait for the popup to appear
        await waitFor(() => screen.findByText('Cancelar'));

        // Change Price to an invalid entry
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10'}});

        // Click "Editar"
        fireEvent.click(screen.getByTestId('popupEditButton'));

        // Expect error message
        await waitFor(() => screen.findByText('O formato do preço não está certo! Tente começar apenas com dígitos e terminar com uma vírgula e duas casas decimais.'));

        // Click "Cancelar"
        fireEvent.click(screen.getByText('Cancelar'));

        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());

        // Check if item is still the same
        await waitFor(() => screen.findByText("R$ 10,50"));
    });

    it('should show a warning message if an item with the same name already exists', async () => {
        // Create a new item
        fireEvent.click(screen.getByTestId('addItemBtn'));

        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste 2'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste 2.'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10,50'}});

        fireEvent.click(screen.getByTestId('addButton'));

        await waitFor(() => expect(screen.queryByTestId('addButton')).toBeNull());

        // Fire Editar popup
        fireEvent.click(screen.getAllByText('Editar')[0]);

        // Wait for the popup to appear
        await waitFor(() => screen.findByText('Cancelar'));

        // Change Nome to other item's name
        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste 2'}});

        // Click "Editar"
        fireEvent.click(screen.getByTestId('popupEditButton'));

        // Expect error message
        await waitFor(() => screen.findByText('Já existe um item com esse nome!'));

        // Click "Cancelar"
        fireEvent.click(screen.getByText('Cancelar'));

        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());
        
        // Check if items are still the same
        await waitFor(() => screen.findByText("Item Teste"));
        await waitFor(() => screen.findByText("Item Teste 2"));
    });

    it('should edit the item and close the pop-up when all fields are filled correctly', async () => {
        // Fire Editar popup
        fireEvent.click(screen.getByText('Editar'));

        // Wait for the popup to appear
        await waitFor(() => screen.findByText('Cancelar'));

        // Change entries
        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste 2'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição teste 2'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10,99'}});

        // Click "Editar"
        fireEvent.click(screen.getByTestId('popupEditButton'));

        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());

        // Check if item has changed
        await waitFor(() => screen.findByText("Item Teste 2"));
        await waitFor(() => expect(screen.queryAllByText('addItemBtn').length).toBe(0));
        await waitFor(() => screen.findByText("Descrição teste 2"));
        await waitFor(() => screen.findByText("R$ 10,99"));
    });

    it('should close the pop-up when all fields are equal to the original item', async () => {
        // Fire Editar popup
        fireEvent.click(screen.getByText('Editar'));

        // Wait for the popup to appear
        await waitFor(() => screen.findByText('Cancelar'));

        // Change entries to be equal to the original ones
        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste 2.'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10,50'}});

        // Click "Editar"
        fireEvent.click(screen.getByTestId('popupEditButton'));

        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());

        // Check if item has changed
        await waitFor(() => screen.findByText("Item Teste"));
        await waitFor(() => screen.findByText("Descrição do item teste 2."));
        await waitFor(() => screen.findByText("R$ 10,50"));
    });
});