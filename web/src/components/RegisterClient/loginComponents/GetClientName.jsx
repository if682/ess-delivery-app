import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
import { isInputNull } from '../../../shared/functions/isInputNull';
import "../RegisterClient.css"
import { ReactComponent as Logo } from '../../../shared/assets/images/Logo.svg';
import { useNavigate } from 'react-router-dom';


export const GetClientName = () => {
    const [name, setName] = useState("");
    const [warningMessage, setWarningMessage] = useState(null);

    let navigate = useNavigate();

    useEffect(() => {
        setWarningMessage(null)
    }, [name])

    const getName = () => {
        if(isInputNull(name)){
            setWarningMessage('Esse campo é de preenchimento obrigatório!')
        }
        else{
            //passa para a próxima página e envia o nome como parâmetro
            navigate('/CadastroEmail', {state: {name}})
        }
    }

    return(
        <div className='register_bg'>
            <div className='register_box'>
                <div className='register_box_logo'>
                    <Logo />
                </div>
                <>
                    <text className='register_box_title'>Vamos iniciar seu cadastro? :)</text>
                    <text className='register_box_text'>Primeiramente, como você gostaria de ser chamade?</text>
                    <input
                        onChange={(event) => {setName(event.target.value.trim())}}
                        type="text"
                        class="form-control"
                        placeholder="Nome"
                        className='register_box_input'
                    />
                    <br></br>
                    
                    <text className='warning_text'>{warningMessage}</text>
                    <Button onClick={() => getName()} className='register_box_button'>Continuar  ></Button>
                </>
                
            </div>
        </div>
    );


}