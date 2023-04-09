import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { isInputNull } from '../../../shared/functions/isInputNull';

export const EdiItemPopup = (props) => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [warningMessage, setWarningMessage] = useState(null)
    const [currentItems, setCurrentItems] = useState([])

    useEffect (() => {
        setName(props.item?.name)
        setDescription(props.item?.description)
        setPrice(props.item?.price)

        fetch('http://localhost:3001/items')
          .then(response => response.json())
          .then(data => setCurrentItems(data));
    }, [props])

    useEffect(() => {
        setWarningMessage(null)
    }, [props, name, description, price])

    async function EdiItem () {
        const priceRegex = /^\d+,\d{2}$/

        if (isInputNull(name) || isInputNull(description) || isInputNull(price)) {
            setWarningMessage("Todas as entradas devem ser preenchidas!")
        }
        else if (!priceRegex.test(price.trim())) {
            setWarningMessage("O formato do preço não está certo! Tente começar apenas com dígitos e terminar com uma vírgula e duas casas decimais.")
        }
        else if (currentItems.filter(item => item.name === name.trim() && item.id !== props.item.id).length > 0) {
            setWarningMessage("Já existe um item com esse nome!")
        }
        else {
            let item = {name: name.trim(), description: description.trim(), price: price.trim(), category: props.item.category}

            await fetch(`http://localhost:3001/items/${props.item?.id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });

            props.onHide()
        }
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
                type="text"
                class="form-control"
                placeholder="Preço"
                />
            <br></br>

            {warningMessage}
        </Modal.Body>
        <Modal.Footer>
            <Button className='btn-secondary' onClick={props.onHide}>Cancelar</Button>
            <Button className='btn-primary' data-testid='popupEditButton' onClick={() => EdiItem()}>Editar</Button>
        </Modal.Footer>
        </Modal>
    );
}
