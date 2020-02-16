import React from 'react'
import { Card } from 'react-bootstrap';

let profile = [];

fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        profile = res;
    });
    

const CardDragons = () => (
    <div>
        <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Body>
                <Card.Title bg="light">{profile.name}</Card.Title>
                <Card.Link bg="light" href="#">Remover dragão</Card.Link>
                <Card.Link bg="light" href="#">Editar dragão</Card.Link>
            </Card.Body>
        </Card>
    </div>
)

export default CardDragons