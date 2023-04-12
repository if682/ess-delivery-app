import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { isInputNull } from '../../../shared/functions/isInputNull';
import PrimaryButton from '../../../components/atoms/primary-button/PrimaryButton';
import SecondaryButton from '../../../components/atoms/secondary-button/SecondaryButton';

export const AddItemPopup = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [warningMessage, setWarningMessage] = useState(null)

    useEffect(() => {
        setWarningMessage(null)
    }, [props, name, description, price])

    async function addItem () {
        const priceRegex = /^\d+,\d{2}$/
        
        if (isInputNull(name) || isInputNull(description) || isInputNull(price)) {
            setWarningMessage("Todas as entradas devem ser preenchidas!")
        }
        else if (!priceRegex.test(price)) {
            setWarningMessage("O formato do preço não está certo! Tente começar apenas com dígitos e terminar com uma vírgula e duas casas decimais.")
        }
        else if (props.currentItems.filter(item => item.name === name).length > 0) {
            setWarningMessage("Já existe um item com esse nome!")
        }
        else {
            let item = {"id": Date.now(), "name": name, "description": description, "price": price, "category": props.category}

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
            show={props.show}
            onHide={props.onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Adicionar item em {props.category}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    onChange={(event) => setName(event.target.value.trim())}
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    />
                <br></br>
                <input
                    onChange={(event) => setDescription(event.target.value.trim())}
                    type="text"
                    className="form-control"
                    placeholder="Descrição"
                    />
                <br></br>
                <input
                    onChange={(event) => setPrice(event.target.value.trim())}
                    type="text"
                    className="form-control"
                    placeholder="Preço"
                    />
                <br></br>

                {warningMessage}
            </Modal.Body>
            <Modal.Footer>
                <SecondaryButton
                     onClick={() => (props.onHide())}
                    buttonContent="Cancelar">
                </SecondaryButton>
                <PrimaryButton data-testid="addButton"
                    onClick={async () => await addItem()}
                    buttonContent="Adicionar">
                </PrimaryButton>
            </Modal.Footer>
            </Modal>
        </>
    );
}
