import React, { useState, useEffect } from "react";
import { AddItemPopup } from "./itemsComponents/AddItemPopup";
import { RemItemPopup } from "./itemsComponents/RemItemPopup";
import { EdiItemPopup } from "./itemsComponents/EdiItemPopup";
import { Item } from "./itemsComponents/Item";
import "./RestaurantMenu.scss"
import Button from 'react-bootstrap/Button';

export const RestaurantMenu = () => {
    const [items, setItems] = useState([]);
    const [addItemToggle, setAddItemToggle] = useState(false);
    const [remItemToggle, setRemItemToggle] = useState([false, null]);
    const [ediItemToggle, setEdiItemToggle] = useState([false, null]);

    useEffect(() => {
        fetch('http://localhost:3001/items')
          .then(response => response.json())
          .then(data => {
            setItems(data)});
    }, []);

    return (
        <div>
            <AddItemPopup show={addItemToggle} onHide={() => setAddItemToggle(false)} currentItems={items}/>
            <RemItemPopup show={remItemToggle[0]} item={remItemToggle[1]} onHide={() => setRemItemToggle(false)}/>
            <EdiItemPopup show={ediItemToggle[0]} item={ediItemToggle[1]} onHide={() => setEdiItemToggle(false)}/>

            <Button variant='primary' onClick={() => setAddItemToggle(true)}>
                Adicionar
            </Button>

            <div className="item-cards">
                {
                items.map((item) => (
                    <Item 
                        item={item}
                        onClickEdit={(() => setEdiItemToggle([true, item]))}
                        onClickRemove={() => setRemItemToggle([true, item.id])}/>
                ))
                }  
            </div>
        </div>
    );
}
