import React from 'react';
import { fireEvent, render, } from '@testing-library/react';
import CategoriesHome from '../../../categories/CategoriesHome.jsx';
//import fetch from 'jest-fetch-mock'; //important do not remove


describe("CategoriesHome", () => {

  it("Create category successfully", async () => { 
      const { getByTestId, findByText } = render(<CategoriesHome />);
      const addButton = getByTestId("add-category-button");
      fireEvent.click(addButton);
      const input = getByTestId("add-category-input");
      fireEvent.change(input, { target: { value: "Test" } });
      const confirmButton = getByTestId("create-category-button");
      fireEvent.click(confirmButton);

      const element = await findByText("Test");
      expect(element.textContent).toBe("Test");

  });

  it("Try to create a duplicated category", async () => {
    const { getByTestId, findByText } = render(<CategoriesHome />);
    const element = await findByText("Test");
    expect(element.textContent).toBe("Test");
    const addButton = getByTestId("add-category-button");
    fireEvent.click(addButton);
    const input = getByTestId("add-category-input");
    fireEvent.change(input, { target: { value: "Test" } });
    const confirmButton = getByTestId("create-category-button");
    fireEvent.click(confirmButton);
    
    const elementError = await findByText("There is already a category with that name!");
    expect(elementError.textContent).toBe("There is already a category with that name!");
  });

  it("Try to create a category with empty name", async () => {
    const { getByTestId, findByText } = render(<CategoriesHome />);
    const addButton = getByTestId("add-category-button");
    fireEvent.click(addButton);
    const input = getByTestId("add-category-input");
    fireEvent.change(input, { target: { value: "" } });
    const confirmButton = getByTestId("create-category-button");
    fireEvent.click(confirmButton);

    const element = await findByText("Please enter a category name!");
    expect(element.textContent).toBe("Please enter a category name!");
  });

  it("Cancel create category", async () => {
      const { getByTestId, findByText } = render(<CategoriesHome />);
      const addButton = getByTestId("add-category-button");
      fireEvent.click(addButton);
      const input = getByTestId("add-category-input");
      fireEvent.change(input, { target: { value: "Test2" } });
      const cancelButton = getByTestId("cancel-button");
      fireEvent.click(cancelButton);
      const element = findByText("Test2");
      expect(element.textContent).not.toBe("Test2");
  });

  it("Cancel delete category", async () => {
      
      const { getByTestId, findByText } = render(<CategoriesHome />);
      const element = await findByText("Test");
      expect(element.textContent).toBe("Test");
      const deleteButton = getByTestId('remove-category-button-Test');
      fireEvent.click(deleteButton);
      const cancelButton = getByTestId("cancel-delete-button");
      fireEvent.click(cancelButton);

      const addedElement = await findByText("Test");
      expect(addedElement.textContent).toBe("Test");
  });

  it("Delete category successfully", async () => {
    const { getByTestId, findByText } = render(<CategoriesHome />);
    const element = await findByText("Test");
    expect(element.textContent).toBe("Test");
    const deleteButton = getByTestId('remove-category-button-Test');
    fireEvent.click(deleteButton);
    const confirmButton = getByTestId("confirm-delete-button");
    fireEvent.click(confirmButton);

    const deletedElement = findByText("Test");
    expect(deletedElement.textContent).not.toBe("Test");
});
  });