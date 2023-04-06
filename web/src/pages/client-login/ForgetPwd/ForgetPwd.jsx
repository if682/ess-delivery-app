import React from 'react';
import { useState } from 'react';
import './ForgetPwd.css'
import forgetPwdLogo from "../../../assets/img/forgetPwdLogo.svg"
import forgetPwdLogoDone from "../../../assets/img/forgetPwdLogoDone.svg"
import { InputTextBox } from '../loginComponents/inputTextBox/InputText'
import { RedButtonLogin } from '../loginComponents/RedButton/RedButton';
import { Navigate, useNavigate } from 'react-router';

function ForgetPwd() {
    const navigate = useNavigate();
    const [input, setInput] = useState("")
    const [inputDone, setInputDone] = useState("")
    const handleSubmit = (e) => {
        setInputDone("true");
    }
    const handleReturnLoginPage = (e) => {
        navigate('/login')
    }

    return (
        <div className="forgetPwd-container">
            <div className="forgetPwd-box">
                <div className='forgetPwd-box-begin'>
                    {inputDone === "true" ?
                        (<div>
                            <img className="forgetPwd-box-icon" src={forgetPwdLogoDone}></img>
                            <p className="forgetPwd-box-title">Verifique seu e-mail para obter nova senha</p>
                        </div>) :

                        (<div>
                            <img className="forgetPwd-box-icon" src={forgetPwdLogo}></img>
                            <p className="forgetPwd-box-title">Esqueceu sua senha?</p>
                            <div className="forgetPwd-box-subtitle">
                                <p >Insira o seu e-mail para recuperar a sua senha</p>

                            </div>
                        </div>)}

                </div>
                <div className="forgetPwd-input">
                {inputDone === "true" ? 
                (<div className="forgetPwd-returnLoginPage">
                    <a onClick={(e) => handleReturnLoginPage(e)}>{'<'}  Voltar para o início</a>
                </div>) : 
                        
                (<div>
                    <div className="forgetPwd-inputText">
                        <p className="forgetPwd-inputText-title">E-mail</p>
                        <InputTextBox set_val={setInput} placeholder={'Insira um email'}></InputTextBox>
                    </div>
                    <div className="forgetPwd-inputButton">
                        <RedButtonLogin onClick={(e) => handleSubmit(e)} buttonText={'Enviar'}></RedButtonLogin>

                    </div>

                </div>)}
                </div>

            </div>

        </div>
    );
}

export default ForgetPwd;