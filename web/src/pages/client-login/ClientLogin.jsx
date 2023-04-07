import React, { useState, useEffect } from "react";
import './Login.css'
import { InputTextBox } from "./loginComponents/inputTextBox/InputText";
import { RedButtonLogin } from "./loginComponents/RedButton/RedButton";
import { InputCheckBox } from "./loginComponents/inputCheckBox/InputCheck";
import Logo from "../../assets/img/logo.svg"
import { WhiteButtonLogin } from "./loginComponents/whiteButton/WhiteButton";
import { Navigate, useLocation, useNavigate} from "react-router-dom";;
import Cookies from 'js-cookie';


const Login = () => {
    const navigate = useNavigate();

    const [inputEmail, setInputEmail] = useState("")
    const [inputPwd, setInputPwd] = useState("")
    const [items, setItems] = useState([])
    const [handleErrorEmail, setHandleErrorEmail] = useState("")
    const [handleErrorPwd, setHandleErrorPwd] = useState("")
    const [check, setCheck] = useState(false)

    const [redirect, setRedirect] = useState("")

    const {state} = useLocation()

    const redirectToSignUp = (event) => {
        navigate("/signup")
    }
    const redirectToForgetPwd = (event) => {
        navigate("/forgetPwd")
    }
    useEffect(() => {
        fetch('http://localhost:3001/clients')
          .then(response => response.json())
          .then(data => {
            setItems(data)});
    }, []);

    const checkEmailinItems = ({email, password}) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].email === email) {
                if(items[i].password === password){
                    return true
                }
                setHandleErrorPwd("true")
                return false
            }
        }
        setHandleErrorEmail("true")
        return false
    }
    
    const handleSubmit = (event) => {
        setHandleErrorPwd("false")
        setHandleErrorEmail("false")
        const email = inputEmail
        const password = inputPwd
        if (checkEmailinItems({email, password})) {
            if (check){
                Cookies.set('token', email, { expires: 7 });
            }
            navigate("/home")
        }
    }

    if (Cookies.get('token') !== undefined) {
        return <Navigate to="/home" />
    }
    return (
        <div className="login-container">
            
            <div className="login-box">
                <img className="login-box-icon" src={Logo}></img>
                <p className="login-box-title">Acesse a sua conta</p>
                <div className="login-input">

                    <div className="login-inputText">
                        <p className="login-inputText-title">E-mail</p>
                        <InputTextBox errorText={"*E-mail inválido"} isError={handleErrorEmail} type={"text"} set_val={setInputEmail} placeholder={' Insira um email'} defaultValue={state}></InputTextBox>
                    </div>
                    <div className="login-inputText">
                        <p className="login-inputText-title">Senha</p>
                        <InputTextBox errorText={"*Senha inválida"} isError={handleErrorPwd} type={"password"} set_val={setInputPwd} placeholder={' Insira uma senha'}></InputTextBox>
                    </div>
                    <div className="login-inputCheck">
                        <InputCheckBox checked={check} set_val={setCheck} defaultValue={false} textCheck={'Lembrar Login'}></InputCheckBox>
                        <a onClick={redirectToForgetPwd} className="login-inputCheck-NoPwd">Esqueci minha senha</a>
                    </div>

                    <div className="login-inputButton">
                        <RedButtonLogin onClick={handleSubmit} buttonText={'Entrar'}></RedButtonLogin>

                    </div>
                    <div className="login-inputSignUpText">
                        <p className="login-inputSignUpTextLabel">Ainda não possui o cadastro? </p>
                        <a onClick={redirectToSignUp} className="login-inputSignUpTextLink">Cadastre-se</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Login