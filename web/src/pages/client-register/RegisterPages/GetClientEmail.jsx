import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
import { isInputNull } from '../../../shared/functions/isInputNull';
import "../RegisterClient.css"
import "./GetClientEmail.css"
import { ReactComponent as Logo } from '../../../shared/assets/images/Logo.svg';
import { useNavigate, useLocation} from 'react-router-dom';



export const GetClientEmail = (props) => {
    const [email, setEmail] = useState("");
    const [warningMessage, setWarningMessage] = useState(null);
    const [currentClients, setCurrentClients] = useState([])

    const {state} = useLocation()
    const {name} = state

    let navigate = useNavigate();

    useEffect(() => {
        setWarningMessage(null)
    }, [email])

    useEffect(() => {
        fetch('http://localhost:3001/clients')
          .then(response => response.json())
          .then(data => {
            setCurrentClients(data)})

        if(props.teste == true){
            setCurrentClients(props.currentC)
        }
        
    }, [])

    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const getEmail = () => {
        if(isInputNull(email)){
            setWarningMessage('Esse campo é de preenchimento obrigatório!')
        }
        else if(!validateEmail(email)){
            setWarningMessage('O e-mail fornecido possui um formato inválido')
        }
        else if(currentClients.filter(item => item.email == email).length == 1){
            navigate('/login', {state: {email: email}})
        }
        else{
            navigate('/validacao-email', {state: {name: name, email: email}})
        }
    }

    return(
        <div className='register_bg'>
            <div className='register_box'>
                <div className='register_box_logo'>
                    <Logo />
                </div>
                <>
                    <text className='register_box_title_email'>Olá {name}!</text>
                    <br></br>
                    <text className='register_box_subtitle_email'>Seja bem vinde :)</text>
                    <text className='register_box_text_email'>Por favor, nos forneça ou seu melhor email:</text>
                    <input
                        onChange={(event) => {setEmail(event.target.value.trim())}}
                        type="text"
                        placeholder="E-mail"
                        className='register_box_input_email'
                    />
                    <br></br>
                    
                    <text className='warning_text_email' id="warning_message">{warningMessage}</text>
                    <Button onClick={() => getEmail()} className='register_box_button_email' data-testid="button-reg-email">Continuar  ></Button>
                </>
                
            </div>
        </div>
    );


}