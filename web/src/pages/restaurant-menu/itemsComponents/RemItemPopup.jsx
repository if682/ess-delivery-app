import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import PrimaryButton from '../../../components/atoms/primary-button/PrimaryButton';
import SecondaryButton from '../../../components/atoms/secondary-button/SecondaryButton';

export const RemItemPopup = (props) => {
    async function RemItem () {
        await fetch(`http://localhost:3001/items/${props.item}`, {
            method: "DELETE"
        })

        props.onHide()
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
            Remover item
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Tem certeza que deseja remover esse item do cardápio? A ação é permanente.
        </Modal.Body>
        <Modal.Footer>
            <SecondaryButton
                className='btn-secondary'
                onClick={props.onHide}
                buttonContent="Cancelar">
            </SecondaryButton>
            <PrimaryButton
                className='btn-danger'
                data-testid='confirmRemoveButton'
                onClick={async () => {RemItem()}}
                buttonContent="Excluir">
            </PrimaryButton>
        </Modal.Footer>
        </Modal>
    );
}
