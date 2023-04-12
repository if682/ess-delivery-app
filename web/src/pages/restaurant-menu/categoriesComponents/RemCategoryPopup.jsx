import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import PrimaryButton from '../../../components/atoms/primary-button/PrimaryButton';
import SecondaryButton from '../../../components/atoms/secondary-button/SecondaryButton';

export default function RemCategoryPopup(props) {
    async function RemCategory () {

        const items = await fetch('http://localhost:3001/items');
        const itemsJson = await items.json();    
        itemsJson.forEach(async (item) => {
            if (item.category === props.category.name) {
                await fetch(`http://localhost:3001/items/${item.id}`, {
                    method: "DELETE"
                })
            }
        })
        
        await fetch(`http://localhost:3001/categories/${props.category.id}`, {
            method: "DELETE"
        })
        
    }

    return (    
        <Modal
        show={props.show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered

        >
        <Modal.Header closeButton {...props}>
            <Modal.Title id="contained-modal-title-vcenter">
            Remover categoria
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Tem certeza que deseja remover essa categoria? A ação é permanente.
        </Modal.Body>
        <Modal.Footer>
            <SecondaryButton
                className='btn-secondary'
                onClick={props.onHide}
                data-testid = 'cancel-delete-button'
                buttonContent="Cancelar">
            </SecondaryButton>
            <PrimaryButton
                className='btn-danger'
                onClick={() => {
                    RemCategory()
                    props.onHide()
                }}
                data-testid = 'confirm-delete-button'
                buttonContent="Excluir">
            </PrimaryButton>
        </Modal.Footer>
        </Modal>
    );
}