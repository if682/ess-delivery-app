import React, { useEffect, useState } from "react"
import './InputText.css'

export const InputTextBox= (props) => {
    let value = ""
    const alterVal = (val) => {
        props.set_val(val)
    }
    if(props.defaultValue != null){
        value = props.defaultValue.email
    }

    return (
        <div>
            <input type={props.type} className={props.isError == "true" ? "inputBox-Error" : 'inputBox'} 
            placeholder={props.placeholder} value={value} onChange={(e) => alterVal(e.target.value)}></input>
            {props.isError == "true" ? 

            <div className="inputBox-ErrorText">
                <span>{props.errorText}</span>
            </div> :

            <div></div>} 
        </div>
    );
}
