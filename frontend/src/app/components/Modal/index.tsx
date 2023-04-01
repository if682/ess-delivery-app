import ReactModal from 'react-modal';
import CustomButton from '../CustomButton';
import './index.css'

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    title: string;
    description: string;
}

function Modal({ isOpen, onRequestClose, title, description }: ModalProps) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Example Modal"
            className="Modal"
            overlayClassName="Overlay"
            appElement={document.getElementById('root') as HTMLElement} // É importante definir o elemento raiz da sua aplicação
        >
            <h2 className="Modal__title">{title}</h2>
            <p className="Modal__description">{description}</p>
            <CustomButton onClick={onRequestClose} title="Confirmar" />
        </ReactModal>
    );
}

export default Modal;

//Pra usar o Modal
// import { useState } from "react";
// import Modal from "../../components/Modal";

// const [isModalOpen, setIsModalOpen] = useState(false);

// const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

// <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} title="Reserva requisitada com sucesso" description="O anfintrião da acomodação já foi avisado das suas intenções, qualquer atualização será informada no e-mail" />
// <button onClick={handleOpenModal}>Abrir Modal</button>