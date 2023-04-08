import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { isInputNull } from '../../../../shared/functions/isInputNull';

export const EditNamePopup = (props) => {
    const [name, setName] = useState("");
    const [warningMessage, setWarningMessage] = useState(null);
    
    useEffect(() => {
        setWarningMessage(null)
    }, [name])


    async function EditName () {
        if(isInputNull(name)){
            setWarningMessage('Esse campo é de preenchimento obrigatório!')
        }
        else {
            let item = {name: name, email: props.email, password: props.password}

            await fetch(`http://localhost:3001/clients/${props.client_id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
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
            Alterar nome
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <br></br>
            <input
                onChange={(event) => setName(event.target.value)}
                type="text"
                class="form-control"
                placeholder="Novo nome"
            />

            {warningMessage}
        </Modal.Body>
        <Modal.Footer>
            <Button className='btn-secondary' onClick={props.onHide}>Cancelar</Button>
            <Button className='btn-primary' onClick={() => EditName()}>Salvar</Button>
        </Modal.Footer>
        </Modal>
    );
}
