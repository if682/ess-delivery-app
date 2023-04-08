import React, { useState, useEffect } from "react";
import { AddItemPopup } from "./itemsComponents/AddItemPopup";
import { RemItemPopup } from "./itemsComponents/RemItemPopup";
import { EdiItemPopup } from "./itemsComponents/EdiItemPopup";
import AddCategory from "./categoriesComponents/AddCategory";
import RemCategoryPopup from "./categoriesComponents/RemCategoryPopup";
import { Item } from "./itemsComponents/Item";
import "./RestaurantMenu.scss"
import Button from 'react-bootstrap/Button';
import deleteItemsAndCategories from "./tests/RemoveTestData";

export const RestaurantMenu = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = React.useState([]);

    const [addItemToggle, setAddItemToggle] = useState([false, null]);
    const [remItemToggle, setRemItemToggle] = useState([false, null]);
    const [ediItemToggle, setEdiItemToggle] = useState([false, null]);

    const [addCatToggle, setAddCatToggle] = useState(false);
    const [remCatToggle, setRemCatToggle] = useState([false, null]);

    useEffect(() => {
        fetch('http://localhost:3001/items')
            .then(response => response.json())
            .then(data => {
                setItems(data)});

        fetch('http://localhost:3001/categories')
            .then(response => response.json())
            .then(data => {
                setCategories(data)});
    }, [addItemToggle, remItemToggle, ediItemToggle, addCatToggle, remCatToggle]);

    return (
        <div>
            <AddCategory show={() => setAddCatToggle(true)} onHide={() => setAddCatToggle(false)} data-testid = 'setAdd'/>
            <RemCategoryPopup show={remCatToggle[0]} category={remCatToggle[1]} onHide={() => setRemCatToggle(false)}/>

            <AddItemPopup show={addItemToggle[0]} onHide={() => setAddItemToggle(false)} currentItems={items} category={addItemToggle[1]}/>
            <RemItemPopup show={remItemToggle[0]} item={remItemToggle[1]} onHide={() => setRemItemToggle([false, null])}/>
            <EdiItemPopup show={ediItemToggle[0]} item={ediItemToggle[1]} onHide={() => setEdiItemToggle([false, null])}/>

            {
            categories.map((category) => (
                <div key={category.id}>
                    <li>{category.name}</li>

                    <button variant='primary' onClick={() => setRemCatToggle([true, category.id])} data-testid = {`remove-category-button-${category.name}`}>Remover categoria</button>
                    
                    <Button variant='success' onClick={() => setAddItemToggle([true, category.name])} data-testid = 'addItemBtn'>
                        Adicionar item
                    </Button>
                    
                    <div data-testid='items-container'>
                    {
                    items.filter((item) => item.category === category.name) // filter items by category name
                        .map((item) => (
                        <Item 
                            item={item}
                            onClickEdit={(() => setEdiItemToggle([true, item]))}
                            onClickRemove={() => setRemItemToggle([true, item.id])}/>
                    ))
                    } 
                    </div> 
                </div>
            ))
            }
        </div>
    );
}

