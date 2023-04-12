import React from 'react';
import { waitFor, fireEvent, render, screen, act } from '@testing-library/react';
import { RestaurantMenu } from '../../RestaurantMenu';
import deleteItemsAndCategories from '../RemoveTestData';
import createCategory from '../CreateCategory';

describe('Add Categories tests', () => { 
    
    beforeEach(async () => {
        await deleteItemsAndCategories();
        await act(async () => {
            render(<RestaurantMenu />);
        });
    });

    afterAll(async () => {
        await deleteItemsAndCategories();
    });

    it('renders correctly', () => {
        const categoriesText = screen.getByText('Categories');
        expect(categoriesText).toBeInTheDocument();
        const addButton = screen.getByTestId("add-category-button");
        expect(addButton).toBeInTheDocument();
    });

    it('Cancel category creation', async() => {
        const addButton = screen.getByTestId("add-category-button");
        fireEvent.click(addButton);
        const nameInput = screen.getByTestId("add-category-input");
        fireEvent.change(nameInput, { target: { value: 'Massas' } });
        const cancelButton = screen.getByTestId("cancel-button");
        fireEvent.click(cancelButton);
        const category = screen.queryByText('Massas');
        await expect(category).not.toBeInTheDocument();
    });

    
    it('Create category successfully', async() => {
        createCategory('Bolo');
        const category = screen.findByText('Bolo');
        await expect((await category).textContent).toBe("Bolo");
    });

    it ('Create category with empty name', async() => {
        const addButton = screen.getByTestId("add-category-button");
        fireEvent.click(addButton);
        const nameInput = screen.getByTestId("add-category-input");
        fireEvent.change(nameInput, { target: { value: '' } });
        const createButton = screen.getByTestId("create-category-button");
        fireEvent.click(createButton);
        const msg = 'Please enter a category name!'
        const warningMessage = screen.findByText(msg);
        await expect((await warningMessage).textContent).toBe(msg);
    });
    
    it('Create category with name already exists', async() => {
        createCategory('Pratão');
        const category = screen.findByText('Pratão');
        await expect((await category).textContent).toBe("Pratão");
        setTimeout(async() => {
            await createCategory('Pratão');
        }, 5000);
        const msg = "There is already a category with that name!";
        const warningMessage = screen.findByText(msg);
        waitFor(async() => expect((await warningMessage).textContent).toBe(msg));
    });
      
      
      
})