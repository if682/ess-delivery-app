import Button from 'react-bootstrap/Button';
import "../../RegisterClient.css"
import "./ClientRegistered.css"
import { useNavigate} from 'react-router-dom';
import { RegisterPageContainer } from '../../../../components/atoms/register-page-container/RegisterPageContainer';



export const ClientRegistered = () => {

    let navigate = useNavigate();

    //Navega para a página principal (home)
    const handleClick = () =>{
        navigate('/')
    }


    return(
        <RegisterPageContainer>
            <>
                    <text className='register_success'>Conta criada com sucesso!</text>
                    <br></br>
                    
                    <Button onClick={() => handleClick()} className='order_now_button'>Peça já!</Button>
            </>
        </RegisterPageContainer>
    );


}