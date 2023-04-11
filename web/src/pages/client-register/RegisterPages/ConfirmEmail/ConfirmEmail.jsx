import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
import { isInputNull } from '../../../../shared/functions/isInputNull';
import "../../RegisterClient.css"
import "./ConfirmEmail.css"
import { useNavigate, useLocation} from 'react-router-dom';
import { RegisterPageContainer } from '../../../../components/atoms/register-page-container/RegisterPageContainer';


export const ConfirmEmail = (props) => {
    const [firstDigit, setFirstDigit] = useState(null);
    const [secDigit, setSecDigit] = useState(null)
    const [thirdDigit, setThirdDigit] = useState(null)
    const [fourthDigit, setFourthDigit] = useState(null)
    const [warningMessage, setWarningMessage] = useState(null);

    let navigate = useNavigate();
    const {state} = useLocation()
    const {name, email} = (state != null) ? state : props.state;

    //o valor de warningMessage sempre é recebe null se houver mudanças nos valores dos inputs
    useEffect(() => {
        setWarningMessage(null)
    }, [firstDigit, secDigit, thirdDigit, fourthDigit])

    const ConfirmEmail = () => {
        //verifica se há algum input vazio
        if(isInputNull(firstDigit) || isInputNull(secDigit) || isInputNull(thirdDigit) || isInputNull(fourthDigit)){
            setWarningMessage('Preencha todos os campos!')
        }
        //verifica se o código de verificação fornecido está errado
        else if((firstDigit != 1) || (secDigit != 1) || (thirdDigit != 1) || (fourthDigit != 1)){
            setWarningMessage('Código de verificação incorreto')
        }
        else{
            //vai para a página de cadastro de senha e manda os valores do nome e email obtidos nas páginas de cadastro anteriores a essa
            navigate('/cadastro-senha', {state: {name: name, email: email}})
        }
    }

    //atualiza a página
    const handleResend = () =>{
        window.location.reload()
    }

    return(
        <RegisterPageContainer>
            <>
                    <text className='email_confirmation_title'>Agora, confirme o seu endereço de e-mail</text>
                    <text className='email_confirmation_text'>Nós enviamos um código para</text>
                    <text className='email_address'>{email}</text>
                    <div className='display_input_code'>
                        <input
                        type="text"
                        maxlength="1"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        onChange={(event) => setFirstDigit(event.target.value)}
                        className="email_confirmation_input"
                        data-testid='first_digit'
                        />
                        <br></br>
                        <input
                        type="text"
                        maxlength="1"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        onChange={(event) => setSecDigit(event.target.value)}
                        className="email_confirmation_input"
                        data-testid='second_digit'
                        />
                        <br></br>
                        <input
                        type="text"
                        maxlength="1"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        onChange={(event) => setThirdDigit(event.target.value)}
                        className="email_confirmation_input"
                        data-testid='third_digit'
                        />
                        <br></br>
                        <input
                        type="text"
                        maxlength="1"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        onChange={(event) => setFourthDigit(event.target.value)}
                        className="email_confirmation_input"
                        data-testid='fourth_digit'
                        />
                    </div>
                    <br></br>
                    
                    <text className='warning_text' id='warning_message'>{warningMessage}</text>
                    <text className='email_confirmation_text_resend'>Não recebeu o código ? <text className='resend' onClick={handleResend}>Reenviar</text></text>
                    <Button onClick={() => ConfirmEmail()} className='email_confirmation_button'>Verificar  ></Button>
                </>
        </RegisterPageContainer>
    );


}