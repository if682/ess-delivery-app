import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

export const RemItemPopup = (props) => {
    async function RemItem () {
        await fetch(`http://localhost:3001/items/${props.item}`, {
            method: "DELETE"
        })
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
            <Button className='btn-secondary' onClick={props.onHide}>Cancelar</Button>
            <Button className='btn-danger' data-testid='confirmRemoveButton' onClick={() => {
                RemItem()
                props.onHide()
            }}>Excluir</Button>
        </Modal.Footer>
        </Modal>
    );
}
