import React, { useEffect, useState } from "react"
import './InputCheck.css'

export const InputCheckBox = (props) => {

    
    const alterVal = () => {
        props.set_val((prev) => !prev)
    }
    return (
        <div className="checkbox-wrapper">
            <label>
                <input className={props.checked ? "checked" : ""}
                    //defaultValue={props.defaultValue}
                    
                    placeholder={props.placeholder}
                    type='checkbox'
                    onChange={() => alterVal()}>

                </input>
                <span>
                    {props.textCheck}
                </span>

            </label>
        </div>
    );
}
