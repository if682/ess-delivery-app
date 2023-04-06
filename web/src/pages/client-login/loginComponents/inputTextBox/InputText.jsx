import React, { useEffect, useState } from "react"
import './InputText.css'

export const InputTextBox= (props) => {
    

    const alterVal = (val) => {
        props.set_val(val)
    }
    return (
        <div>
            <input type={props.type} className='inputBox' placeholder={props.placeholder} onChange={(e) => alterVal(e.target.value)}></input>
        </div>
    );
}
