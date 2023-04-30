import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
import './Login.css'
import { InputTextBox } from "./loginComponents/inputTextBox/InputText";
import { RedButtonLogin } from "./loginComponents/RedButton/RedButton";
import { InputCheckBox } from "./loginComponents/inputCheckBox/InputCheck";
import Logo from "../../assets/img/logo.svg"
import { Navigate, useNavigate} from "react-router-dom";;


const Login = (props) => { // props.Items is an array of objects with name, email and password properties
    const navigate = useNavigate(); // navigate is a function that redirects to a page

    const [inputEmail, setInputEmail] = useState("") // inputEmail is the email
    const [inputPwd, setInputPwd] = useState("") // inputPwd is the password 
    const [items, setItems] = useState([]) // items is an array of objects with name, email and password properties
    const [handleErrorEmail, setHandleErrorEmail] = useState("") // handleErrorEmail is a boolean that indicates if the email is valid
    const [handleErrorPwd, setHandleErrorPwd] = useState("") // handleErrorPwd is a boolean that indicates if the password is valid
    const [check, setCheck] = useState(false) // check is a boolean that indicates if the checkbox is checked

    const redirectToSignUp = (event) => { // redirect to the sign up page
        navigate("/cadastro-nome")
    } 
    const redirectToForgetPwd = (event) => { // redirect to the forget password page
        navigate("/forgetPwd")
    }
    useEffect(() => { // fetch the items from the server
        setItems(props.Items || [])
        fetch('http://localhost:3001/clients')
          .then(response => response.json())
          .then(data => {
            setItems(data)});
    }, []);

    const checkEmailinItems = ({email, password}) => { // check if the email is in the items array
        for (let i = 0; i < items.length; i++) {
            if (items[i].email === email) { // check if the email is correct
                if(items[i].password === password){ // check if the password is correct
                    return true
                }
                setHandleErrorPwd("true") // set the error message for the password
                return false
            }
        }
        setHandleErrorEmail("true") // set the error message for the email
        return false
    }
    
    const handleSubmit = (event) => { // handle the submit of the form
        setHandleErrorPwd("false") // set the error message for the password
        setHandleErrorEmail("false") // set the error message for the email
        const email = inputEmail 
        const password = inputPwd
        if (checkEmailinItems({email, password})) { // check if the email and password are correct
            if (check){
                Cookies.set('token', email, { expires: 7 }); // set the cookie for 7 days
            }
            navigate("/") // redirect to the home page
        }
    }

    if (Cookies.get('token') !== undefined) { // check if the user is already logged in
        return <Navigate to="/" /> // redirect to the home page
    }
    return (
        <div className="login-container"> 
            <div className="login-box"> {/* login-box is the container for the login form */}
                <img className="login-box-icon" src={Logo}></img>
                <p className="login-box-title">Acesse a sua conta</p> 
                <div className="login-input"> {/* login-input is the container for the inputs */}

                    <div className="login-inputText"> {/* login-inputText is the container for the email input */}
                        <p className="login-inputText-title">E-mail</p>
                        <InputTextBox errorText={"*E-mail inválido"} isError={handleErrorEmail} type={"text"} set_val={setInputEmail} placeholder={'Insira um email'}></InputTextBox>
                    </div>
                    <div className="login-inputText"> {/* login-inputText is the container for the password input */}
                        <p className="login-inputText-title">Senha</p>
                        <InputTextBox errorText={"*Senha inválida"} isError={handleErrorPwd} type={"password"} set_val={setInputPwd} placeholder={'Insira uma senha'}></InputTextBox>
                    </div>
                    <div className="login-inputCheck"> {/* login-inputCheck is the container for the checkbox and the forget password link */}
                        <InputCheckBox checked={check} set_val={setCheck} defaultValue={false} textCheck={'Lembrar Login'}></InputCheckBox>
                        <a onClick={redirectToForgetPwd} className="login-inputCheck-NoPwd">Esqueci minha senha</a>
                    </div>

                    <div className="login-inputButton"> {/* login-inputButton is the container for the login button */}
                        <RedButtonLogin onClick={handleSubmit} buttonText={'Entrar'}></RedButtonLogin>

                    </div>
                    <div className="login-inputSignUpText"> {/* login-inputSignUpText is the container for the sign up link */}
                        <p className="login-inputSignUpTextLabel">Ainda não possui o cadastro? </p>
                        <a onClick={redirectToSignUp} className="login-inputSignUpTextLink">Cadastre-se</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Login