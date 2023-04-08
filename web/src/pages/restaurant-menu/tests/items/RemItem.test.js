import { render, screen, fireEvent, waitFor, getByTestId} from '@testing-library/react';
import { RestaurantMenu } from '../../RestaurantMenu';
import deleteItemsAndCategories from '../RemoveTestData';
import { RemItemPopup } from '../../itemsComponents/RemItemPopup';

describe('RemItemPopup', () => {
    async function createItem () {
        render(<RestaurantMenu />);

        // Check that button does not appear initially
        expect(screen.queryByTestId('removeItemButton')).toBeNull();
        
        // Add a category
        fireEvent.click(screen.getByTestId('add-category-button'));
        fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'Categoria Teste' } });
        fireEvent.click(screen.getByTestId('create-category-button'));

        await waitFor(() => expect(screen.getAllByTestId('addItemBtn').length).toBeGreaterThan(0));

        // Click the "Adicionar item" button
        fireEvent.click(screen.getAllByTestId('addItemBtn')[0]);

        // Add an item
        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste.'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10,50'}});

        fireEvent.click(screen.getByTestId('addButton'));
        
        waitFor(() => expect(screen.queryByTestId('addButton')).toBeNull());

        waitFor(() => expect(screen.getAllByTestId('removeItemButton').length).toBe(1));
    }

    beforeEach(async () => {
        await deleteItemsAndCategories();
        await createItem()
    });

    afterEach(async () => {
        await deleteItemsAndCategories();
    });

    it('should render RemItemPopup component when Remover button is clicked', async () => {
        // Check that the "RemItemPopup" component appears
        waitFor(() => fireEvent.click(screen.getByTestId('removeItemButton')));

        waitFor(() => expect(screen.getAllByTestId('confirmRemoveButton').length).toBe(1));
    });

    it('should just close the modal when Cancelar button is clicked', async () => {
        waitFor(() => fireEvent.click(screen.getByTestId('removeItemButton')));

        waitFor(() => fireEvent.click(screen.getByText('Cancelar')));

        waitFor(() => expect(screen.getByTestId('confirmRemoveButton')).notToBeInTheDocument());

        waitFor(() => expect(screen.getAllByTestId('removeItemButton').length).toBe(1));
    });

    it('should close the modal when an item is removed', async () => {
        waitFor(() => fireEvent.click(screen.getByTestId('removeItemButton')));

        waitFor(() => fireEvent.click(screen.getByTestId('confirmRemoveButton')));

        waitFor(() => expect(screen.getByText('confirmRemoveButton')).notToBeInTheDocument());

        waitFor(() => expect(screen.getAllByTestId('removeItemButton').length).toBe(0));
    });
});