import React from 'react';
import { useState } from 'react';
import './ForgetPwd.css'
import forgetPwdLogo from "../../../assets/img/forgetPwdLogo.svg"
import { InputTextBox } from '../loginComponents/inputTextBox/InputText'
import { RedButtonLogin } from '../loginComponents/RedButton/RedButton';

function ForgetPwd() {
    const [input, setInput] = useState("")

    return (
        <div className="forgetPwd-container">
            <div className="forgetPwd-box">
                <div className='forgetPwd-box-begin'>
                    <img className="forgetPwd-box-icon" src={forgetPwdLogo}></img>
                    <p className="forgetPwd-box-title">Esqueceu sua senha?</p>
                    <div className="forgetPwd-box-subtitle">
                        <p >Insira o seu e-mail para recuperar a sua senha</p>

                    </div>
                </div>
                <div className="forgetPwd-input">

                    <div className="forgetPwd-inputText">
                        <p className="forgetPwd-inputText-title">E-mail</p>
                        <InputTextBox set_val={setInput} placeholder={ 'Insira um email'}></InputTextBox>
                    </div>
                    <div className="forgetPwd-inputButton">
                        <RedButtonLogin buttonText={'Entrar'}></RedButtonLogin>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default ForgetPwd;