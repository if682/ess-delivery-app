import React, { useState, useEffect } from "react";
import { AddItemPopup } from "./AddItemPopup";
import { RemItemPopup } from "./RemItemPopup";

export const RestaurantMenu = () => {
    const [items, setItems] = useState([]);
    const [addItemToggle, setAddItemToggle] = useState(false);
    const [remItemToggle, setRemItemToggle] = useState([false, null]);

    useEffect(() => {
        fetch('http://localhost:3001/items')
          .then(response => response.json())
          .then(data => {
            setItems(data)});
    }, []);

    return (
        <div className="App">
            <AddItemPopup show={addItemToggle} onHide={() => setAddItemToggle(false)}/>
            <RemItemPopup show={remItemToggle[0]} item={remItemToggle[1]} onHide={() => setRemItemToggle(false)}/>
            
            <button onClick={() => setAddItemToggle(true)}>
                Adicionar
            </button>

            {
            items.map((item) => (
            <div key={item.id}>
                <li>{item.name}</li>
                <li>{item.description}</li>
                <li>{item.price}</li>
                <button onClick={() => setRemItemToggle([true, item.id])}>Remover</button>
            </div>
            ))
            }  
        </div>
    );
}
