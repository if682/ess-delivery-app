import React from "react";
import './styles.css'
const Button = ({children,...props}) => {
    return(
        <button className="Button-Submit" type="button"{...props}>
            {children}
        </button>
    );
};

export default Button;
