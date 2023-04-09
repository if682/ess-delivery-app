import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { isInputNull } from '../../../../shared/functions/isInputNull';
import { WarningText } from '../../../../components/atoms/warning-text/WarningText';
import { InputText } from '../../../../components/atoms/input-text/InputText';
import './EditPasswordPopup.css'

export const EditPasswordPopup = (props) => {
    const [password, setPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("")
    const [warningMessage, setWarningMessage] = useState(null);
    
    useEffect(() => {
        setWarningMessage(null)
    }, [password, oldPassword])


    async function EditPassword () {
        if(isInputNull(password) || isInputNull(oldPassword)){
            setWarningMessage('Preencha todos os campos!')
        }
        else if(oldPassword != props.currentPassword){
            setWarningMessage('O valor fornecido para a senha atual está incorreto')
        }
        else {
            let item = {name: props.name, email: props.email, password: password}

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
            Alterar senha
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <text className='edit-password-text'>
            Digite sua senha atual e logo em seguida a nova senha
            </text>
            <div className='input-texts'>
                <InputText setInput={setOldPassword} type="password" placeholder="Senha atual"/>
                <InputText setInput={setPassword} type="password" placeholder="Nova senha"/>
                <WarningText warningMessage={warningMessage}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button className='btn-secondary' onClick={props.onHide}>Cancelar</Button>
            <Button className='btn-primary' onClick={() => EditPassword()}>Salvar</Button>
        </Modal.Footer>
        </Modal>
    );
}
