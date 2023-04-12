import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';
import { useNavigate} from 'react-router-dom';
import './DeactivateAccountPopup.css'

export const DeactivateAccountPopup = (props) => {
    const navigate = useNavigate();

    //retorna para a página de login e remove o token de acesso do usuário
    function DeactivateAccount(){
        navigate('/login');
        Cookies.remove("token");
    }


    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton {...props}>
        </Modal.Header>
        <Modal.Body>
            <text className='main-text'>Deseja mesmo desativar sua conta?</text>
            <br/>
            <div className='buttons-container'>
                <Button className='btn-primary' onClick={() => DeactivateAccount()}>Confirmar</Button>
                <Button className='btn-secondary' onClick={props.onHide}>Cancelar</Button>
            </div>
            
        </Modal.Body>
        </Modal>
    );
}
