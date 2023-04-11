import React from 'react';
import { useState, useEffect } from 'react';
import './ForgetPwd.css'
import forgetPwdLogo from "../../../assets/img/forgetPwdLogo.svg"
import forgetPwdLogoDone from "../../../assets/img/forgetPwdLogoDone.svg"
import { InputTextBox } from '../loginComponents/inputTextBox/InputText'
import { RedButtonLogin } from '../loginComponents/RedButton/RedButton';
import { Navigate, useNavigate } from 'react-router';
import emailjs from '@emailjs/browser';

function ForgetPwd(props) { // props.Items is an array of objects with name, email and password properties 
  const navigate = useNavigate();
  const [items, setItems] = useState([]) // items is an array of objects with name, email and password properties
  const [input, setInput] = useState("") // input is the email
  const [inputDone, setInputDone] = useState("") // inputDone is a boolean that indicates if the email was sent
  const [handleErrorEmail, setHandleErrorEmail] = useState("") // handleErrorEmail is a boolean that indicates if the email is valid

  useEffect(() => { // fetch the items from the server
    setItems(props.Items || [])
    fetch('http://localhost:3001/clients')
      .then(response => response.json())
      .then(data => {
        setItems(data)
      });
  }, []);

  const checkEmailinItems = ({ email }) => { // check if the email is in the items array
    for (let i = 0; i < items.length; i++) {
      if (items[i].email === email) {
        return { name: items[i].name, pwd: items[i].password };
      }
    }
    setHandleErrorEmail(true); // if the email is not in the items array, set the handleErrorEmail to true
    return false;
  };

  const handleSubmit = (e) => { // send the email
    const { name, pwd } = checkEmailinItems({ email: input }); // check if the email is in the items array
    if (name && pwd) {
      if (props.Items && props.Items.length > 0) { // if the items array is not empty, send the email
        setInputDone("true")
      } else {

        emailjs 
          .send("service_46pljof", "template_1rafotf", { // send the email
            to_name: name,
            new_pwd: pwd,
            to_email: input,
          }, "5j6-v5QHvWber29u9")
          .then(
            (response) => { 
              console.log("SUCCESS!", response.status, response.text); // if the email was sent, set the inputDone to true
              setInputDone("true");
            },
            (err) => {
              console.log("FAILED...", err);
            }
          );
      }
    } else {
      setHandleErrorEmail("true"); // if the email is not in the items array, set the handleErrorEmail to true
    }
  };

  const handleReturnLoginPage = (e) => { // return to the login page
    navigate('/login')
  }

  return (
    <div className="forgetPwd-container"> {/* // the container of the page */}
      <div className="forgetPwd-box">
        <div className='forgetPwd-box-begin'> {/* // the container of the logo and the title */}
          {inputDone === "true" ?
            (<div> {/* // if the email was sent, show the logo and the title */}
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
        <div className="forgetPwd-input"> {/* // the container of the input and the button */}
          {inputDone === "true" ?
            (<div className="forgetPwd-returnLoginPage"> {/* // if the email was sent, show the button to return to the login page */}
              <a onClick={(e) => handleReturnLoginPage(e)}>{'<'}  Voltar para o início</a>
            </div>) :

            (<div> 
              <div className="forgetPwd-inputText"> {/* // the container of the input */}
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