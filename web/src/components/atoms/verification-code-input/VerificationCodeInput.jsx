import {useState, useEffect} from 'react';
import { isInputNull } from '../../../shared/functions/isInputNull';
import "./VerificationCodeInput.css"



export const VerificationCodeInput = (props) => {
    const [firstDigit, setFirstDigit] = useState(null);
    const [secDigit, setSecDigit] = useState(null)
    const [thirdDigit, setThirdDigit] = useState(null)
    const [fourthDigit, setFourthDigit] = useState(null)
    
    useEffect(() => {
        
        props.setWarningMessage(null)
        props.setClicked(false)
    }, [firstDigit, secDigit, thirdDigit, fourthDigit])

    useEffect(() => {
        if(props.clicked == true){
            ValidateCode()
        }
    }, [props.clicked])

    const ValidateCode = () => {
        if(isInputNull(firstDigit) || isInputNull(secDigit) || isInputNull(thirdDigit) || isInputNull(fourthDigit)){
            props.setWarningMessage('Preencha todos os campos!')
        }
        else if((firstDigit != 1) || (secDigit != 1) || (thirdDigit != 1) || (fourthDigit != 1)){
            props.setWarningMessage('Código de verificação incorreto')
        }
    }


    return(
        <div className='verification-code'>
            <text>Código de verificação</text>
                    <div className='display_input_code'>
                        <input
                        type="text"
                        maxlength="1"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        onChange={(event) => setFirstDigit(event.target.value)}
                        data-testid='first_digit'
                        />
                        <br></br>
                        <input
                        type="text"
                        maxlength="1"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        onChange={(event) => setSecDigit(event.target.value)}
                        data-testid='second_digit'
                        />
                        <br></br>
                        <input
                        type="text"
                        maxlength="1"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        onChange={(event) => setThirdDigit(event.target.value)}
                        data-testid='third_digit'
                        />
                        <br></br>
                        <input
                        type="text"
                        maxlength="1"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        onChange={(event) => setFourthDigit(event.target.value)}
                        data-testid='fourth_digit'
                        />
                    </div>
        </div>
    );


}