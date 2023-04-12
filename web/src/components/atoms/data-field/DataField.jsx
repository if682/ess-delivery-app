import React, { useEffect, useState } from "react"
import './DataField.css'
import { ArrowClockwise } from 'react-bootstrap-icons';
import Button from "react-bootstrap/Button";

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
                placeholder={props.placeholder}
                readOnly
                />
            <Button onClick={handleClick} data-testid={props.testid}>
                <ArrowClockwise /> Atualizar
            </Button>
            </div>
            
        </div>
    );
}
