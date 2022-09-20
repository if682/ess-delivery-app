import React from "react";
import './styles.css'
const Button = ({onClick, children,...props}) => {
    return(
        <button className="Button-Submit" type="button" onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
