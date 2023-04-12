import React, { useEffect, useState } from "react"
import './RedButton.css'

export const RedButtonLogin = (props) => { // props.buttonText is the text of the button,
    // props.onClick is a function that is called when the button is clicked

    return (
        <div> {/* redButtonLogin is the container for the button */}
            <button className="redButtonLogin"
            onClick={props.onClick}
            >{props.buttonText}</button>
        </div>
    );
}
