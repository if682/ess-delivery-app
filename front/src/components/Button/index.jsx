import React from "react";
import './styles.css'
const Button = ({onClick, children}) => {
    return(
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
