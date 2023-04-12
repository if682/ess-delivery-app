import React, { useEffect, useState } from "react"
import './InputText.css'

export const InputTextBox= (props) => { // props.type is the type of the input, 
    //props.placeholder is the placeholder of the input,
    //props.set_val is a function that sets the value of the input,
    //props.isError is a boolean that indicates if the input is in error,
    //props.errorText is the text of the error
    const alterVal = (val) => {
        props.set_val(val)
    }
    

    return (
        <div> {/* inputBox is the container for the input */}
            <input type={props.type} className={props.isError == "true" ? "inputBox-Error" : 'inputBox'} 
            placeholder={props.placeholder}  onChange={(e) => alterVal(e.target.value)}></input>
            {props.isError == "true" ? 

            <div className="inputBox-ErrorText"> {/* inputBox-ErrorText is the container for the error text */}
                <span>{props.errorText}</span>
            </div> :

            <div></div>} 
        </div>
    );
}
