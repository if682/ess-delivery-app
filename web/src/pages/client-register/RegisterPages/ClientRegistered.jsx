import Button from 'react-bootstrap/Button';
import "../RegisterClient.css"
import "./ClientRegistered.css"
import { ReactComponent as Logo } from '../../../shared/assets/images/Logo.svg';
import { useNavigate} from 'react-router-dom';



export const ClientRegistered = () => {

    let navigate = useNavigate();

    const handleClick = () =>{
        navigate('/')
    }


    return(
        <div className='register_bg'>
            <div className='register_box'>
                <div className='register_box_logo'>
                    <Logo />
                </div>
                <>
                    <text className='register_success'>Conta criada com sucesso!</text>
                    <br></br>
                    
                    <Button onClick={() => handleClick()} className='order_now_button'>Peça já!</Button>
                </>
                
            </div>
        </div>
    );


}