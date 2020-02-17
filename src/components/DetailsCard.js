import React from 'react'
import { Card } from 'react-bootstrap';

const DetailsCard = ({ dragon }, key) => (
    <div>
        <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Body>
                <Card.Title>{dragon.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{dragon.createdAt}</Card.Subtitle>
                <Card.Text> {dragon.type} </Card.Text>
            </Card.Body>
        </Card>
    </div>
)

export default DetailsCard