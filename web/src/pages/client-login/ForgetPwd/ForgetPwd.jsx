import React from 'react';
import { useState, useEffect } from 'react';
import './ForgetPwd.css'
import forgetPwdLogo from "../../../assets/img/forgetPwdLogo.svg"
import forgetPwdLogoDone from "../../../assets/img/forgetPwdLogoDone.svg"
import { InputTextBox } from '../loginComponents/inputTextBox/InputText'
import { RedButtonLogin } from '../loginComponents/RedButton/RedButton';
import { Navigate, useNavigate } from 'react-router';
import emailjs from '@emailjs/browser';

function ForgetPwd(props) {
  const navigate = useNavigate();
  const [items, setItems] = useState([])
  const [input, setInput] = useState("")
  const [inputDone, setInputDone] = useState("")
  const [handleErrorEmail, setHandleErrorEmail] = useState("")

  useEffect(() => {
    setItems(props.Items || [])
    fetch('http://localhost:3001/clients')
      .then(response => response.json())
      .then(data => {
        setItems(data)
      });
  }, []);

  const checkEmailinItems = ({ email }) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].email === email) {
        return { name: items[i].name, pwd: items[i].password };
      }
    }
    setHandleErrorEmail(true);
    return false;
  };

  const handleSubmit = (e) => {
    const { name, pwd } = checkEmailinItems({ email: input });
    if (name && pwd) {
      if (props.Items && props.Items.length > 0) {
        setInputDone("true")
      } else {

        emailjs
          .send("service_46pljof", "template_1rafotf", {
            to_name: name,
            new_pwd: pwd,
            to_email: input,
          }, "5j6-v5QHvWber29u9")
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              setInputDone("true");
            },
            (err) => {
              console.log("FAILED...", err);
            }
          );
      }
    } else {
      setHandleErrorEmail("true");
    }
  };

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
                <InputTextBox errorText={"*E-mail inválido"} isError={handleErrorEmail} type={"text"} set_val={setInput} placeholder={'Insira um email'}></InputTextBox>
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