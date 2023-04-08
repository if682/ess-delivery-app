import { render, screen, fireEvent, waitFor, act, getByTestId} from '@testing-library/react';
import { RestaurantMenu } from '../../RestaurantMenu';
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
        // Check that the "RemItemPopup" component appears
        await waitFor(() => fireEvent.click(screen.getByTestId('removeItemButton')));

        await waitFor(() => expect(screen.getAllByTestId('confirmRemoveButton').length).toBe(1));
    });

    it('should just close the modal when Cancelar button is clicked', async () => {
        await waitFor(() => fireEvent.click(screen.getByTestId('removeItemButton')));

        await waitFor(() => fireEvent.click(screen.getByText('Cancelar')));

        await waitFor(() => expect(screen.getAllByTestId('removeItemButton').length).toBe(1));
    });

    it('should close the modal when an item is removed', async () => {
        await waitFor(() => fireEvent.click(screen.getByTestId('removeItemButton')));

        await waitFor(() => fireEvent.click(screen.getByTestId('confirmRemoveButton')));
        
        screen.debug();
        await waitFor(() => expect(screen.queryByTestId('confirmRemoveButton')).toBeNull());

        // Check that there are no "Remover" buttons
        await waitFor(() => expect(screen.queryAllByText('Item Teste').length).toBe(0));
    });
});