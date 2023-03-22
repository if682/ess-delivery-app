import React, { useEffect, useState } from "react"
import './RedButton.css'

export const RedButtonLogin = (props) => {

    return (
        <div>
            <button className="redButtonLogin"
            onClick={props.onClick}
            >{props.buttonText}</button>
        </div>
    );
}
