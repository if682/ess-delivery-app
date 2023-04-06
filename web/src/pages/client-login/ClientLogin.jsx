import React, { useState, useEffect } from "react";
import './Login.css'
import { InputTextBox } from "./loginComponents/inputTextBox/InputText";
import { RedButtonLogin } from "./loginComponents/RedButton/RedButton";
import { InputCheckBox } from "./loginComponents/inputCheckBox/InputCheck";
import Logo from "../../assets/img/logo.svg"
import { WhiteButtonLogin } from "./loginComponents/whiteButton/WhiteButton";
import { Navigate, useLocation} from "react-router-dom";


const Login = () => {
    const [input, setInput] = useState("")
    const [check, setCheck] = useState(false)
    const [redirect, setRedirect] = useState("")

    const {state} = useLocation()

    const redirectToSignUp = (event) => {
        setRedirect("/signup")
    }
    const redirectToForgetPwd = (event) => {
        setRedirect("/forgetPwd")
    }

    return (
        <div className="login-container">
            {redirect != "" && (
                <Navigate to={redirect}/>
            )}
            <div className="login-box">
                <img className="login-box-icon" src={Logo}></img>
                <p className="login-box-title">Acesse a sua conta</p>
                <div className="login-input">

                    <div className="login-inputText">
                        <p className="login-inputText-title">E-mail</p>
                        <InputTextBox set_val={setInput} placeholder={' Insira um email'} defaultValue={state}></InputTextBox>
                    </div>
                    <div className="login-inputText">
                        <p className="login-inputText-title">Senha</p>
                        <InputTextBox set_val={setInput} placeholder={' Insira uma senha'}></InputTextBox>
                    </div>
                    <div className="login-inputCheck">
                        <InputCheckBox checked={check} set_val={setCheck} defaultValue={false} textCheck={'Lembrar Login'}></InputCheckBox>
                        <a onClick={redirectToForgetPwd} className="login-inputCheck-NoPwd">Esqueceu a senha?</a>
                    </div>

                    <div className="login-inputButton">
                        <RedButtonLogin buttonText={'Entrar'}></RedButtonLogin>

                    </div>
                    <div className="login-inputSignUpText">
                        <p className="login-inputSignUpTextLabel">Ainda não possui o cadastro? </p>
                        <a onClick={redirectToSignUp} className="login-inputSignUpTextLink">Cadastre-se</a>
                    </div>
                    {/* <WhiteButtonLogin buttonText={'Entrar'}></WhiteButtonLogin> */}
                </div>

            </div>
        </div>
    );
}
export default Login