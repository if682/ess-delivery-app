import React, { useState, useEffect } from "react";
import { AddItemPopup } from "./itemsComponents/AddItemPopup";
import { RemItemPopup } from "./itemsComponents/RemItemPopup";
import { EdiItemPopup } from "./itemsComponents/EdiItemPopup";
import AddCategory from "./categoriesComponents/AddCategory";
import RemCategoryPopup from "./categoriesComponents/RemCategoryPopup";
import { Item } from "./itemsComponents/Item";
import "./RestaurantMenu.scss"
import Button from 'react-bootstrap/Button';
import SecondaryButton from '../../components/atoms/secondary-button/SecondaryButton.js'
import PrimaryButton from "../../components/atoms/primary-button/PrimaryButton";
import * as Icon from 'react-bootstrap-icons';

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
        setItems(data)
      });

    fetch('http://localhost:3001/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data)
      });
  }, [addItemToggle, remItemToggle, ediItemToggle, addCatToggle, remCatToggle]);

  return (
    <div className="all-content">
    <div className="restaurant-menu-root">
      <AddCategory show={() => setAddCatToggle(true)} onHide={() => setAddCatToggle(false)} data-testid='setAdd' />
      <RemCategoryPopup show={remCatToggle[0]} category={remCatToggle[1]} onHide={() => setRemCatToggle(false)} />
      
      <AddItemPopup show={addItemToggle[0]} onHide={() => setAddItemToggle(false)} currentItems={items} category={addItemToggle[1]} />
      <RemItemPopup show={remItemToggle[0]} item={remItemToggle[1]} onHide={() => setRemItemToggle([false, null])} />
      <EdiItemPopup show={ediItemToggle[0]} item={ediItemToggle[1]} onHide={() => setEdiItemToggle([false, null])} />

      {
        categories.map((category) => (
          <div className="category-item-area" key={category.id}>
            <div className="category-item-header">
              <li className="category-title">{category.name}</li>
              <div className="buttons-area">
                <SecondaryButton
                  variant='success'
                  onClick={() => setAddItemToggle([true, category.name])}
                  data-testid='addItemBtn'
                  buttonContent="Adicionar categoria">
                </SecondaryButton>
                <SecondaryButton
                  variant='primary' 
                  onClick={() => setRemCatToggle([true, category.id])} 
                  data-testid={`remove-category-button-${category.name}`}
                  buttonContent={<Icon.TrashFill />}>
                </SecondaryButton>
              </div>
            </div>
            <div className="header-description">
              <p>Item</p>
              <p>Descrição</p>
              <p>Valor</p>
            </div>
            <div className="items-container" data-testid='items-container'>
              {
                items.filter((item) => item.category === category.name) // filter items by category name
                  .map((item) => (
                    <Item
                      item={item}
                      onClickEdit={(() => setEdiItemToggle([true, item]))}
                      onClickRemove={() => setRemItemToggle([true, item.id])} />
                  ))
              }
            </div>
          </div>
        ))
      }
    </div>
    </div>
  );
}

