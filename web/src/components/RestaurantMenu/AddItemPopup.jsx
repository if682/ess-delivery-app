import { AddItem } from './functions/AddItem';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const AddItemPopup = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    
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
                onChange={(event) => setName(event.target.value)}
                type="text"
                class="form-control"
                placeholder="Nome"
                />
            <br></br>
            <input
                onChange={(event) => setDescription(event.target.value)}
                type="text"
                class="form-control"
                placeholder="Descrição"
                />
            <br></br>
            <input
                onChange={(event) => setPrice(event.target.value)}
                type="number"
                class="form-control"
                placeholder="Preço"
                />
            <br></br>
        </Modal.Body>
        <Modal.Footer>
            <Button className='btn-danger' onClick={props.onHide}>Cancelar</Button>
            <Button 
            onClick={() => {AddItem(name, description, price)
            props.onHide()}}
            >Adicionar</Button>
        </Modal.Footer>
        </Modal>
    );
}
