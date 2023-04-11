import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
import { isInputNull } from '../../../../shared/functions/isInputNull';
import "./GetClientEmail.css"
import { useNavigate, useLocation} from 'react-router-dom';
import { RegisterPageContainer } from '../../../../components/atoms/register-page-container/RegisterPageContainer';
import { validateEmail } from '../../../../shared/functions/ValidateEmail';

export const GetClientEmail = (props) => {
    const [email, setEmail] = useState("");
    const [warningMessage, setWarningMessage] = useState(null);
    const [currentClients, setCurrentClients] = useState([])

    const {state} = useLocation()
    const {name} = state

    let navigate = useNavigate();

    //warningMessage recebe o valor null toda vez que email tem seu valor atualizaddo
    useEffect(() => {
        setWarningMessage(null)
    }, [email])

    //define um valor para currentClients ao selecionar os dados de todos os clientes da db
    useEffect(() => {
        fetch('http://localhost:3001/clients')
          .then(response => response.json())
          .then(data => {
            setCurrentClients(data)})

        if(props.teste == true){
            setCurrentClients(props.currentC)
        }
        
    }, [])


    const getEmail = () => {
        //checa se o valor do input não é nulo
        if(isInputNull(email)){
            setWarningMessage('Esse campo é de preenchimento obrigatório!')
        }
        //checa se o e-mail dado é válido
        else if(!validateEmail(email)){
            setWarningMessage('O e-mail fornecido possui um formato inválido')
        }
        //checa se o e-mail dado pertence ao registro de outro cliente
        else if(currentClients.filter(item => item.email == email).length == 1){
            //vai para a página de login e envia o e-mail que já estava cadastrado
            navigate('/login', {state: {email: email}})
        }
        else{
            //vai para a página de validação de e-mail e envia os valores de nome e e-mail obtidos nas outras páginas de cadastro
            navigate('/validacao-email', {state: {name: name, email: email}})
        }
    }

    return(
        <RegisterPageContainer>
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
        </RegisterPageContainer>
    );


}