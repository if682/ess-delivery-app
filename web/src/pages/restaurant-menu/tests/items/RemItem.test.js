import { screen, fireEvent, waitFor } from '@testing-library/react';
import deleteItemsAndCategories from '../RemoveTestData';
import { createItem } from '../CreateItem';

describe('RemItemPopup', () => {
    beforeEach(async () => {
        await deleteItemsAndCategories();
        await createItem()
    });

    afterEach(async () => {
        await deleteItemsAndCategories();
    });

    it('should render RemItemPopup component when Remover button is clicked', async () => {
        // Click "Remover" button
        await waitFor(() => fireEvent.click(screen.getByTestId('removeItemButton')));

        // Check if popup appears
        await waitFor(() => expect(screen.getAllByTestId('confirmRemoveButton').length).toBe(1));
    });

    it('should just close the modal when Cancelar button is clicked', async () => {
        // Click "Remover" button
        await waitFor(() => fireEvent.click(screen.getByTestId('removeItemButton')));

        // Check if popup appears
        await waitFor(() => expect(screen.getAllByTestId('confirmRemoveButton').length).toBe(1));

        // Click "Cancelar"
        await waitFor(() => fireEvent.click(screen.getByText('Cancelar')));

        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());

        // Check if item is still there
        await waitFor(() => expect(screen.getAllByTestId('removeItemButton').length).toBe(1));
    });

    it('should close the modal when an item is removed', async () => {
        // Click "Remover" button
        await waitFor(() => fireEvent.click(screen.getByTestId('removeItemButton')));

        // Check if popup appears
        await waitFor(() => expect(screen.getAllByTestId('confirmRemoveButton').length).toBe(1));

        // Click "Confirmar"
        await waitFor(() => fireEvent.click(screen.getByTestId('confirmRemoveButton')));
        
        // Wait for the popup to disappear
        await waitFor(() => expect(screen.queryByText('Cancelar')).toBeNull());

        // Check that the item was removed
        await waitFor(() => expect(screen.queryAllByTestId('removeItemButton').length).toBe(0));
    });
});