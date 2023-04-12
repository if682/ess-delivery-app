import React from 'react';
import { waitFor, fireEvent, render, screen, act } from '@testing-library/react';
import { RestaurantMenu } from '../../RestaurantMenu';
import deleteItemsAndCategories from '../RemoveTestData';
import createCategory from '../CreateCategory';

describe('Add Categories tests', () => { 
    
    beforeEach(async () => {
        await act(async () => {
            render(<RestaurantMenu />);
        });
        await createCategory('Pratao');
    });

    afterEach(async () => {
        await deleteItemsAndCategories();
    });

    it('renders correctly', () => {
        const categoriesText = screen.getByText('Categories');
        expect(categoriesText).toBeInTheDocument();
        const addButton = screen.getByTestId("add-category-button");
        expect(addButton).toBeInTheDocument();
    });

    it ('Cancel to remove category', async() => {
        const category = screen.findByText('Pratao');
        await expect((await category).textContent).toBe("Pratao");
        const removeButton = screen.getByTestId("remove-category-button-Pratao");
        fireEvent.click(removeButton);
        const cancelButton = screen.getByTestId("cancel-delete-button");
        await expect(cancelButton).toBeInTheDocument();
        fireEvent.click(cancelButton);
        const categoryNotRemoved = screen.findByText('Pratao');
        await expect((await categoryNotRemoved).textContent).toBe("Pratao");
    });

    it('Remove category successfully', async() => {
        const category = screen.findByText('Pratao');
        await expect((await category).textContent).toBe("Pratao");
        const removeButton = screen.getByTestId("remove-category-button-Pratao");
        fireEvent.click(removeButton);
        const confirmButton = screen.getByTestId("confirm-delete-button");
        await expect(confirmButton).toBeInTheDocument();
        fireEvent.click(confirmButton);
        const categoryRemoved = screen.findByText('Pratao');
        waitFor (async() => await expect((await categoryRemoved).textContent).not.toBe("Pratao"));
    });

    
});