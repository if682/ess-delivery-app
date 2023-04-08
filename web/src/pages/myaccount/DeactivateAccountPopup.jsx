import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';
import { useNavigate} from 'react-router-dom';

export const DeactivateAccountPopup = (props) => {
    const navigate = useNavigate();

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
            <text>Deseja mesmo desativar sua conta?</text>
            <br/>
            <Button className='btn-secondary' onClick={props.onHide}>Cancelar</Button>
            <Button className='btn-primary' onClick={() => DeactivateAccount()}>Desativar conta</Button>
        </Modal.Body>
        </Modal>
    );
}
