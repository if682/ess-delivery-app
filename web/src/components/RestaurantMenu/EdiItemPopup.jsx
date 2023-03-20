import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

export const EdiItemPopup = (props) => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();

    useEffect (() => {
        setName(props.item?.name)
        setDescription(props.item?.description)
        setPrice(props.item?.price)
    }, [props])

    async function EdiItem () {
        let item = {name: name, description: description, price: price}

        await fetch(`http://localhost:3001/items/${props.item?.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    }

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton {...props}>
            <Modal.Title id="contained-modal-title-vcenter">
            Editar item
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input
                onChange={(event) => setName(event.target.value)}
                value={name}
                type="text"
                class="form-control"
                placeholder="Nome"
                />
            <br></br>
            <input
                onChange={(event) => setDescription(event.target.value)}
                value={description}
                type="text"
                class="form-control"
                placeholder="Descrição"
                />
            <br></br>
            <input
                onChange={(event) => setPrice(event.target.value)}
                value={price}
                type="number"
                class="form-control"
                placeholder="Preço"
                />
            <br></br>
        </Modal.Body>
        <Modal.Footer>
            <Button className='btn-secondary' onClick={props.onHide}>Cancelar</Button>
            <Button className='btn-primary'
            onClick={() => {EdiItem()
            props.onHide()}}
            >Editar</Button>
        </Modal.Footer>
        </Modal>
    );
}
