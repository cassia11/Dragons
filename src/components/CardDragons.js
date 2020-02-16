import React from 'react'
import { Card } from 'react-bootstrap';

const CardDragons = ({dragon}, key) => (
    <div>
        <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Body>
                <Card.Title bg="light">{ dragon.name }</Card.Title>
                <Card.Link bg="light" href="#">Remover</Card.Link>
                <Card.Link bg="light" href="#">Editar</Card.Link>
            </Card.Body>
        </Card>
    </div>
);

export default CardDragons