import React, { useState, useEffect } from "react";
import './Login.css'
import { InputTextBox } from "./loginComponents/inputTextBox/InputText";
import { RedButtonLogin } from "./loginComponents/RedButton/RedButton";
import { InputCheckBox } from "./loginComponents/inputCheckBox/InputCheck";
import Logo from "../../assets/logo.svg"
import { WhiteButtonLogin } from "./loginComponents/whiteButton/WhiteButton";

export const Login = () => {
    const [input, setInput] = useState("")
    const [check, setCheck] = useState(false)
    console.log(check)
    return (
        <div className="login-container">
            <div className="login-box">
                <img className="login-box-icon" src={Logo}></img>
                <p className="login-box-title">Acesse a sua conta</p>
                <InputTextBox set_val={setInput} placeholder={'Insira algo'}></InputTextBox>
                <RedButtonLogin buttonText={'Entrar'}></RedButtonLogin>
                <WhiteButtonLogin buttonText={'Entrar'}></WhiteButtonLogin>
                <InputCheckBox checked={check} set_val={setCheck} defaultValue={false} textCheck={'Aceita os termos?'}></InputCheckBox>
                <p>{input}</p>
                <p>{check ? 'true' : 'false'}</p>

            </div>
        </div>
    );
}
