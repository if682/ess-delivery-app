import React from 'react';
import './index.css'


interface ModalProps {
    onClick: () => void;
    title: string;
}

function CustomButton({ onClick, title }: ModalProps) {
    return (
        <button className="CustomButton" onClick={onClick}>
            {title}
        </button>
    );
}

export default CustomButton;