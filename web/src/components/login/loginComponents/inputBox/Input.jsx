import React, { useEffect, useState } from "react"
import './Input.css'

export const InputFieldText = (props) => {
    

    const alterVal = (val) => {
        props.set_val(val)
    }
    return (
        <div>
            <input className='inputBox' placeholder={props.placeholder} onChange={(e) => alterVal(e.target.value)}></input>
        </div>
    );
}
