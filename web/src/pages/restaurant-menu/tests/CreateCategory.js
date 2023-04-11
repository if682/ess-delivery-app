import { fireEvent, screen } from "@testing-library/react";

export default async function createCategory(name) {
    const addButton = screen.getByTestId("add-category-button");
    fireEvent.click(addButton);
    const nameInput = screen.getByTestId("add-category-input");
    fireEvent.change(nameInput, { target: { value: name } });
    const createButton = screen.getByTestId("create-category-button");
    fireEvent.click(createButton);
}
