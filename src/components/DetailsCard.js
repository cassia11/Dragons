import React from 'react'
import { Card } from 'react-bootstrap';

let profile = [];

fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/:id')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        profile = res;
    });


const DetailsCard = () => (
    <div>
        <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{profile.createdAt}</Card.Subtitle>
                <Card.Text> {profile.type} </Card.Text>
            </Card.Body>
        </Card>
    </div>
)

export default DetailsCard