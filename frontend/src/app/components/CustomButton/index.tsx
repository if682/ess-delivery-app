import React from 'react';
import './index.css'


interface ModalProps {
    onClick: () => void;
    title: string;
    large?: boolean
}

function CustomButton({ onClick, title, large }: ModalProps) {
    return (
        <button className={`CustomButton ${large ? 'large-btn' : ''}`} onClick={onClick}>
            {title}
        </button>
    );
}

export default CustomButton;