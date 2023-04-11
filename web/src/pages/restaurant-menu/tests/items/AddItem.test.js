import { screen, fireEvent, waitFor } from '@testing-library/react';
import deleteItemsAndCategories from '../RemoveTestData';
import { createItem } from '../CreateItem';

describe('AddItemPopup', () => {
    beforeEach(async () => {
        await deleteItemsAndCategories();
        await createItem();
    });

    afterEach(async () => {
        await deleteItemsAndCategories();
    });

    it('should render AddItemPopup component when Adicionar Item button is clicked', async () => {
        // Check that "Adicionar item" button now appears
        await waitFor(() => screen.findByTestId('addItemBtn'));

        // Click the "Adicionar item" button
        await waitFor(() => fireEvent.click(screen.getByTestId('addItemBtn')));

        // Check that the "AddItemPopup" component appears
        await waitFor(() => expect(screen.getByTestId('addButton')).toBeInTheDocument());
    });

    it('should close the modal when Cancelar button is clicked', async () => {
        // Click the "Adicionar item" button
        await waitFor(() => fireEvent.click(screen.getByTestId('addItemBtn')));
        
        // Click "Cancelar"
        fireEvent.click(screen.getByText('Cancelar'));
        
        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());

        // Check if items are still the same
        await waitFor(() => expect(screen.getAllByTestId('removeItemButton').length).toBe(1));
    });

    it('should show a warning message if any field is left blank', async () => {
        // Click the "Adicionar item"
        fireEvent.click(screen.getByTestId('addItemBtn'));
        
        // Check that the popup appears
        await waitFor(() => expect(screen.getByTestId('addButton')).toBeInTheDocument());

        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: ''}});

        // Click "Adicionar"
        fireEvent.click(screen.getByTestId('addButton'));

        // Expect error message
        waitFor(() => screen.findByText('Todas as entradas devem ser preenchidas!'));

        // Click "Cancelar"
        fireEvent.click(screen.getByText('Cancelar'));
        
        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());

        // Check if items are still the same
        await waitFor(() => expect(screen.getAllByTestId('removeItemButton').length).toBe(1));
    });

    it('should show a warning message if the price format is invalid', async () => {
        // Click the "Adicionar item"
        fireEvent.click(screen.getByTestId('addItemBtn'));
        
        // Check that the popup appears
        await waitFor(() => expect(screen.getByTestId('addButton')).toBeInTheDocument());
        
        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste 2'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste 2'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10.50'}});

        fireEvent.click(screen.getByTestId('addButton'));

        // Expect error message
        await waitFor(() => expect(screen.getByText('O formato do preço não está certo! Tente começar apenas com dígitos e terminar com uma vírgula e duas casas decimais.')).toBeInTheDocument());
        
        // Click "Cancelar"
        fireEvent.click(screen.getByText('Cancelar'));
        
        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());

        // Check if items are still the same
        await waitFor(() => expect(screen.getAllByTestId('removeItemButton').length).toBe(1));
    });

    it('should show a warning message if an item with the same name already exists', async () => {
        // Click the "Adicionar item"
        fireEvent.click(screen.getByTestId('addItemBtn'));
        
        // Check that the popup appears
        await waitFor(() => expect(screen.getByTestId('addButton')).toBeInTheDocument());

        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste.'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10,50'}});

        fireEvent.click(screen.getByTestId('addButton'));

        // Expect error message
        await waitFor(() => expect(screen.getByText("Já existe um item com esse nome!")).toBeInTheDocument());

        // Click "Cancelar"
        fireEvent.click(screen.getByText('Cancelar'));
        
        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());

        // Check if items are still the same
        await waitFor(() => expect(screen.getAllByTestId('removeItemButton').length).toBe(1));
    });

    it('should add a new item and close the pop-up when all fields are filled correctly', async () => {
        // Click the "Adicionar item"
        fireEvent.click(screen.getByTestId('addItemBtn'));
        
        // Check that the popup appears
        await waitFor(() => expect(screen.getByTestId('addButton')).toBeInTheDocument());

        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste 2'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste 2.'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10,50'}});

        // Click "Adicionar"
        fireEvent.click(screen.getByTestId('addButton'));

        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());

        // Check if item's been created
        await waitFor(() => screen.findByText("Item Teste"));
        await waitFor(() => screen.findByText("Item Teste 2"));
    });
});