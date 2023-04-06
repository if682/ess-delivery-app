import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = (props) => {
    return (
        <Card style={{ width: '250px', margin:'10px' }}>
            {/* <Card.Img variant="" 
                style={{ objectFit: 'cover', height: '250px', width: '250px' }}
                src="https://images.unsplash.com/photo-1541599188778-cdc73298e8fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" /> */}
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>{props.item.description}</Card.Text>
                <Card.Text>R$ {props.item.price}</Card.Text>
                <Button style={{ margin:'3px' }} variant="secondary" onClick={props.onClickEdit}>Editar</Button>
                <Button style={{ margin:'3px' }} variant="danger" onClick={props.onClickRemove}>Excluir</Button>
            </Card.Body>
        </Card>
    )
}