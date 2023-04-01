import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
import { isInputNull } from '../../../shared/functions/isInputNull';
import "../RegisterClient.css"
import "./GetClientPassword.css"
import { ReactComponent as Logo } from '../../../shared/assets/images/Logo.svg';
import { useNavigate, useLocation} from 'react-router-dom';



export const GetClientPassword = () => {
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [warningMessage, setWarningMessage] = useState(null);
    const [checked, setChecked] = useState(false)

    let navigate = useNavigate();
    const {state} = useLocation()
    const { name, email} = state;

    useEffect(() => {
        setWarningMessage(null)
    }, [password])

    const handleOnChange = () => {
        setChecked(!checked);
      };



    async function getPassword() {
        if(isInputNull(password) || isInputNull(passwordConfirmation)){
            setWarningMessage('Preencha todos os campos!')
        }
        else if(password != passwordConfirmation){
            setWarningMessage('As senhas não coincidem')
        }
        else if(checked == false){
            setWarningMessage('Aceite os termos de privacidade')
        }
        else{
            let item = {"name": name, "email": email, "password": password}
            await fetch('http://localhost:3001/clients', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(item),
                });
            navigate('/Cadastrado');
        }
           
    }

    return(
        <div className='register_bg'>
            <div className='register_box'>
                <div className='register_box_logo'>
                    <Logo />
                </div>
                <>
                    <text className='register_password_title'>Estamos quase lá, {name}!</text>
                    <br></br>
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
                    <text className='register_password_warning_text'>{warningMessage}</text>
                    <div className='register_checkbox'>
                        <input type='checkbox' checked={checked} onChange={handleOnChange}/>
                        <text className='checkbox_text'>Li e concordo com os <text className='clause_checkbox'>termos e políticas de privacidade</text></text>
                    </div>
                    
                    <Button onClick={() => getPassword()} className='register_password_button'>Continuar  ></Button>
                </>
                
            </div>
        </div>
    );


}