import React, { useEffect, useState } from "react"
import './WhiteButton.css'

export const WhiteButtonLogin = (props) => {

    return (
        <div>
            <button className="WhiteButtonLogin"
                onClick={props.onClick}
            >
                <div className="WhiteButtonLogin_font">
                    {props.buttonText}
                </div>
                <div className="WhiteButtonLogin_icon">
                    {'>'}
                </div>
            </button>
        </div>
    );
}
