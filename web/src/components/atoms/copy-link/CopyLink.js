import { Button } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as Icon from 'react-bootstrap-icons';
import './CopyLink.css'

function CopyLink(props) {
  return (
    <CopyToClipboard className='copy-button'  text={props.text}>
        <button data-testid="copy-link-button"><Icon.ShareFill color='red' className='share-link' /></button>
    </CopyToClipboard>
  )
}

export default CopyLink