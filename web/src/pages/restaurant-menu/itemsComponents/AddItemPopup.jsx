import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { isInputNull } from '../../../shared/functions/isInputNull';

export const AddItemPopup = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [warningMessage, setWarningMessage] = useState(null)
    const [currentItems, setCurrentItems] = useState([])

    useEffect(() => {
        setWarningMessage(null)
    }, [props, name, description, price])

    useEffect(() => {
        fetch('http://localhost:3001/items')
          .then(response => response.json())
          .then(data => {
            setCurrentItems(data)});
    }, [props])

    async function addItem () {
        const priceRegex = /^\d+,\d{2}$/
        
        if (isInputNull(name) || isInputNull(description) || isInputNull(price)) {
            setWarningMessage("Todas as entradas devem ser preenchidas!")
        }
        else if (!priceRegex.test(price)) {
            setWarningMessage("O formato do preço não está certo! Tente começar apenas com dígitos e terminar com uma vírgula e duas casas decimais.")
        }
        else if (currentItems.filter(item => item.name === name).length > 0) {
            setWarningMessage("Já existe um item com esse nome!")
        }
        else {
            let item = {"id": Date.now(), "name": name, "description": description, "price": price}

            await fetch('http://localhost:3001/items', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            })

            props.onHide()
        }
    }

    return (
        <>
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
                    onChange={(event) => setName(event.target.value.trim())}
                    type="text"
                    class="form-control"
                    placeholder="Nome"
                    />
                <br></br>
                <input
                    onChange={(event) => setDescription(event.target.value.trim())}
                    type="text"
                    class="form-control"
                    placeholder="Descrição"
                    />
                <br></br>
                <input
                    onChange={(event) => setPrice(event.target.value.trim())}
                    type="text"
                    class="form-control"
                    placeholder="Preço"
                    />
                <br></br>

                {warningMessage}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.onHide}>Cancelar</Button>
                <Button variant='primary'
                onClick={() => addItem()}>Adicionar</Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}
