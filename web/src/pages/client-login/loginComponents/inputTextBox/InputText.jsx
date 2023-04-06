import React, { useEffect, useState } from "react"
import './InputText.css'

export const InputTextBox= (props) => {
    

    const alterVal = (val) => {
        props.set_val(val)
    }
    return (
        <div>
            <input type={props.type} className={props.isError == "true" ? "inputBox-Error" : 'inputBox'} 
            placeholder={props.placeholder} onChange={(e) => alterVal(e.target.value)}></input>
            {props.isError == "true" ? 

            <div className="inputBox-ErrorText">
                <span>{props.errorText}</span>
            </div> :

            <div></div>} 
        </div>
    );
}
