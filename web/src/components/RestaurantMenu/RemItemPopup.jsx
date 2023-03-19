import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const RemItemPopup = (props) => {
    async function RemItem () {
        await fetch(`http://localhost:3001/items/${props.item}`, {
            method: "DELETE"
        })
        .catch(error => console.log(error));
    }

    return (
        <Modal
        show={props.show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Remover item
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Tem certeza que deseja remover esse item do cardápio? A ação é permanente.
        </Modal.Body>
        <Modal.Footer>
            <Button className='btn-danger' onClick={props.onHide}>Cancelar</Button>
            <Button onClick={() => {
                RemItem()
                props.onHide()
            }}>Adicionar</Button>
        </Modal.Footer>
        </Modal>
    );
}
