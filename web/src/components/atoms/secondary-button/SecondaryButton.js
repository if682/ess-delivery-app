import { Button } from 'react-bootstrap';
import './SecondaryButton.css'

function SecondaryButton(props) {
  return (
    <div>
      <button onClick={props.onClick} className='secondary-button'>{props.buttonContent}</button>
    </div>
  )
}

export default SecondaryButton