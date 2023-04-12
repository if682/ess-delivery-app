import React from "react"
import './InputCheck.css'

export const InputCheckBox = (props) => { // props.textCheck is the text of the checkbox, 
    //props.placeholder is the placeholder of the checkbox, 
    //props.set_val is a function that sets the value of the checkbox, 
    // props.checked is a boolean that indicates if the checkbox is checked

    
    const alterVal = () => { // alter the value of the checkbox
        props.set_val((prev) => !prev)
    }
    return (
        <div className="checkbox-wrapper">
            <label>
                <input className={props.checked ? "checked" : ""} 
                    
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
