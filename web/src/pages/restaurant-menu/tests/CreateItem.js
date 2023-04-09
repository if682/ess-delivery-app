import { render, screen, fireEvent, waitFor, act, getByTestId} from '@testing-library/react';
import { RestaurantMenu } from '../RestaurantMenu';

export async function createItem () {
    await act(async () => {
        render(<RestaurantMenu />);
    })
    
    // Check that button does not appear initially
    expect(screen.queryByTestId('removeItemButton')).toBeNull();
    
    // Add a category
    fireEvent.click(screen.getByTestId('add-category-button'));
    fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'Categoria Teste' } });
    fireEvent.click(screen.getByTestId('create-category-button'));
    
    await (waitFor(() => screen.findByText('Categoria Teste')));
    
    // Click the "Adicionar item" button
    fireEvent.click(screen.getByTestId('addItemBtn'));
    
    // Add an item
    await waitFor(() => {
        fireEvent.change(screen.getByPlaceholderText('Nome'), {target: {value: 'Item Teste'}});
        fireEvent.change(screen.getByPlaceholderText('Descrição'), {target: {value: 'Descrição do item teste.'}});
        fireEvent.change(screen.getByPlaceholderText('Preço'), {target: {value: '10,50'}});
    });
    
    const addItemButton = await screen.findByTestId('addButton');
    expect(addItemButton).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('addButton'));
        
    // Wait for the item to appear
    await waitFor(() => expect(screen.getAllByTestId('removeItemButton').length).toBe(1));
}