import './RegisterPageContainer.css'
import { ReactComponent as Logo } from '../../../shared/assets/images/Logo.svg';

export const RegisterPageContainer = (props) => {
    return(
        <div className='register_bg'>
            <div className='register_box'>
                <div className='register_box_logo'>
                        <Logo />
                </div>
                    {props.children}
            </div>
        </div>
        
        
        
    )
}