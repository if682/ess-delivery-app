import React, { useState, useEffect } from "react";
import './Login.css'
import { InputTextBox } from "./loginComponents/inputTextBox/InputText";
import { RedButtonLogin } from "./loginComponents/RedButton/RedButton";
import { InputCheckBox } from "./loginComponents/inputCheckBox/InputCheck";
import Logo from "../../assets/img/logo.svg"
import { WhiteButtonLogin } from "./loginComponents/whiteButton/WhiteButton";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState("")
    const [check, setCheck] = useState(false)
    const redirectToSignUp = (event) => {
        navigate("/signup")
    }
    const redirectToForgetPwd = (event) => {
        navigate("/forgetPwd")
    }

    return (
        <div className="login-container">
            
            <div className="login-box">
                <img className="login-box-icon" src={Logo}></img>
                <p className="login-box-title">Acesse a sua conta</p>
                <div className="login-input">

                    <div className="login-inputText">
                        <p className="login-inputText-title">E-mail</p>
                        <InputTextBox type={"text"} set_val={setInput} placeholder={' Insira um email'}></InputTextBox>
                    </div>
                    <div className="login-inputText">
                        <p className="login-inputText-title">Senha</p>
                        <InputTextBox type={"password"} set_val={setInput} placeholder={' Insira uma senha'}></InputTextBox>
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