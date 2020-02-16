import React from 'react'
import { Card } from 'react-bootstrap'
import DetailsCard from './DetailsCard'
import { BrowserRouter as Router, Route } from "react-router-dom"


const ListCard = ({ dragon }, key) => (
    <div>
        <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Body>
                <Card.Title bg="light">{dragon.name}</Card.Title>
                <Card.Link bg="light" href="#">Remover</Card.Link>
                <Card.Link bg="light" href="/dragons/{ dragon.id }">Editar</Card.Link>
            </Card.Body>
        </Card>
        <Router>
            <Route path="/dragons/:id" component={ DetailsCard } />
        </Router>
    </div>
);

export default ListCard