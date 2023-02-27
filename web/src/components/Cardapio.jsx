import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

let itens = []

export default function Cardapio() {
    const [show, setShow] = useState(false);
    const [itensCopia, setItensCopia] = useState([]);

    useEffect (() => {
        if (itens.length > 0) {
            setItensCopia(itens)
        }
        else {
            setItensCopia([])
        }
    })
    return (
        <div className="App">
            <button onClick={() => setShow(true)}>
                Adicionar
            </button>
            <PopupAdicionarItem show={show} onHide={() => setShow(false)}/>
            
            {itensCopia.map((item) => (
                <div id={item.nomeItem} key={item.nome}>
                    <li>{item.nomeItem}</li>
                    <li>{item.descricaoItem}</li>
                    <li>{item.precoItem}</li>
                    <button onClick={() => RemoveItem(item.nomeItem)}>Remover</button>
                </div>
            ))}
        </div>
    );
}

function addItem(item) {
    itens.push(item)

    console.log(itens)
}

function RemoveItem(item) {
    itens = itens.filter(e => e.nomeItem !== item);
    
    console.log(itens)
}

function PopupAdicionarItem (props) {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    
    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Adicionar item
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input
                onChange={(event) => setNome(event.target.value)}
                type="text"
                class="form-control"
                placeholder="Nome"
                />
            <br></br>
            <input
                onChange={(event) => setDescricao(event.target.value)}
                type="text"
                class="form-control"
                placeholder="Descrição"
                />
            <br></br>
            <input
                onChange={(event) => setPreco(event.target.value)}
                type="number"
                class="form-control"
                placeholder="Preço"
                />
            <br></br>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Cancelar</Button>
            <Button onClick={() => {addItem({nomeItem:nome, descricaoItem: descricao, precoItem: preco})}}>Adicionar</Button>
        </Modal.Footer>
        </Modal>
    );
}

