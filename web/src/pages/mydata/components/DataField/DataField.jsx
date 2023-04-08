import React, { useEffect, useState } from "react"
import './DataField.css'
import { ArrowClockwise } from 'react-bootstrap-icons';
import Button from "react-bootstrap/esm/Button";

export const DataField = (props) => {

    const handleClick = () => {
        props.setShow(true);
    }

    return (
        <div className="data-field-container">
            <text>{props.fieldName}</text>
            <div>
                <input
                type={props.inputType}
                defaultValue={props.value}
                readOnly
                />
            <Button onClick={handleClick}>
                <ArrowClockwise /> Atualizar
            </Button>
            </div>
            
        </div>
    );
}
