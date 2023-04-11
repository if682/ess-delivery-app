import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
import { isInputNull } from '../../../../shared/functions/isInputNull';
import "./GetClientPassword.css"
import { useNavigate, useLocation} from 'react-router-dom';
import Cookies from 'js-cookie';
import { RegisterPageContainer } from '../../../../components/atoms/register-page-container/RegisterPageContainer';



export const GetClientPassword = (props) => {
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [warningMessage, setWarningMessage] = useState(null);
    const [checked, setChecked] = useState(false)

    let navigate = useNavigate();
    const {state} = useLocation()
    const { name, email} = (state != null) ? state : props.state;

    //warningMessage recebe o valor null toda vez que name tem seu valor atualizaddo
    useEffect(() => {
        setWarningMessage(null)
    }, [password])

    //altera o estado da checkbox, checked ou not checked
    const handleOnChange = () => {
        setChecked(!checked);
      };



    async function getPassword() {
        //verifica se a password ou/e a passwordConfirmation possui valor nulo
        if(isInputNull(password) || isInputNull(passwordConfirmation)){
            setWarningMessage('Preencha todos os campos!')
        }
        //checa se a senha e a sua confirmação são diferentes
        else if(password != passwordConfirmation){
            setWarningMessage('As senhas não coincidem')
        }
        //verifica se a checkbox está no estado "checked"
        else if(checked == false){
            setWarningMessage('Aceite os termos de privacidade')
        }
        else{
            //adiciona um novo cliente na db
            let item = {"name": name, "email": email, "password": password}
            await fetch('http://localhost:3001/clients', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(item),
                });
            //cria um token de acesso para o novo cliente
            Cookies.set('token', email, { expires: 7 });
            //vai para a página de cadastro finalizado
            navigate('/cadastro-finalizado');
        }
           
    }

    return(
        <RegisterPageContainer>
            <>
                    <text className='register_password_title'>Estamos quase lá, {name}!</text>
                    <text className='register_password_text'>Crie uma senha para a sua conta</text>
                    <div className='display_password_inputs'>
                    <input
                        onChange={(event) => {setPassword(event.target.value.trim())}}
                        type="password"
                        class="form-control"
                        placeholder="Digite sua senha"
                        className='register_password_input'
                    />
                    <br></br>
                    <input
                        onChange={(event) => {setPasswordConfirmation(event.target.value.trim())}}
                        type="password"
                        class="form-control"
                        placeholder="Confirme sua senha"
                        className='register_password_input'
                    />
                    </div>
                    <text className='register_password_warning_text' id='warning_message'>{warningMessage}</text>
                    <div className='register_checkbox'>
                        <input type='checkbox' checked={checked} onChange={handleOnChange}/>
                        <text className='checkbox_text'>Li e concordo com os <text className='clause_checkbox'>termos e políticas de privacidade</text></text>
                    </div>
                    
                    <Button onClick={() => getPassword()} className='register_password_button'>Continuar  ></Button>
            </>
        </RegisterPageContainer>
    );


}