import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { isInputNull } from '../../../../shared/functions/isInputNull';
import Cookies from 'js-cookie';
import { VerificationCodeInput } from '../../../../components/atoms/verification-code-input/VerificationCodeInput';
import { WarningText } from '../../../../components/atoms/warning-text/WarningText';
import "./EditEmailPopup.css"
import { InputText } from '../../../../components/atoms/input-text/InputText';
import { validateEmail } from '../../../../shared/functions/ValidateEmail';

export const EditEmailPopup = (props) => {
    const [email, setEmail] = useState("");
    const [warningMessage, setWarningMessage] = useState(null);
    const [clicked, setClicked] = useState(false)

    //warningMessage e clicked recebem os valores null e false sempre que o valor de e-mail é atualizado
    useEffect(() => {
        setWarningMessage(null)
        setClicked(false)
    }, [email])


    async function EditEmail () {
        //clicked assume estado oposto
        setClicked(!clicked)

        //checa se o valor do input não é nulo
        if(isInputNull(email)){
            setWarningMessage('Esse campo é de preenchimento obrigatório!')
        }
        //checa se o e-mail fornecido possui um formato válido
        else if(!validateEmail(email)){
            setWarningMessage('O e-mail fornecido possui um formato inválido')
        }
        //checa se o e-mail dado pertence ao registro de outro cliente
        else if(props.currentClients.filter(item => item.email == email).length == 1){
            setWarningMessage('Esse e-mail já está sendo usado')
        }
        else {
            let item = {name: props.name, email: email, password: props.password}

            //Atualiza o valor do e-mail no registro do cliente, o qual é identificado pelo seu id (props.client_id)
            await fetch(`http://localhost:3001/clients/${props.client_id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
            //cria um novo token para o e-mail atualizado
            Cookies.set('token', email, { expires: 7 });
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
            Alterar e-mail
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <text className='edit-email-central-text'>
                Para realizar a troca do endereço de e-mail vinculado à conta, você receberá um código no seu e-mail atual.
            </text>
            <br></br>
            <VerificationCodeInput clicked={clicked} setWarningMessage={setWarningMessage} setClicked={setClicked}/>
            <div className='edit-email-input'>
                <InputText setInput={setEmail} type="text" placeholder="Novo e-mail"/>
                <WarningText warningMessage={warningMessage}/>
            </div>
            
        </Modal.Body>
        <Modal.Footer>
            <Button className='btn-secondary' onClick={props.onHide}>Cancelar</Button>
            <Button className='btn-primary' onClick={() => EditEmail()}>Salvar</Button>
        </Modal.Footer>
        </Modal>
    );
}
