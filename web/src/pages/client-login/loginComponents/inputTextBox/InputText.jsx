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
            <input className='inputBox' placeholder={props.placeholder} value={value} onChange={(e) => alterVal(e.target.value)}></input>
        </div>
    );
}
