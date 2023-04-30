import { Button } from 'react-bootstrap';
import './SecondaryButton.css'

function SecondaryButton(props) {
  return (
    <div>
      <Button className='secondary-button'>{props.buttonContent}</Button>
    </div>
  )
}

export default SecondaryButton