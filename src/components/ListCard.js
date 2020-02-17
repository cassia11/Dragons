import React from 'react'
import axios from '../configs/api';
import { Card, Button } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import DetailsPage from '../pages/dragons/DetailsPage';

const handleDelete = (idDragon) => {
    console.log(idDragon);
    axios.delete(`/${idDragon}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            window.location.reload();
        })
}

const ListCard = ({ dragon }, key) => (
    <div>
        <Card border="dark" bg="dark" text="white" style={{ width: '18rem', margin: '30px' }}>
            <Card.Body>
                <Card.Title bg="light">{dragon.name}</Card.Title>
                <Button variant="danger" onClick={() => handleDelete(dragon.id)} >Remover</Button>
                <Card.Link path={`/dragons/${dragon.id}`} >
                    <Button variant="primary" >Editar</Button>
                </Card.Link>
            </Card.Body>
            <Card.Footer className="text-muted">{dragon.createdAt}</Card.Footer>
        </Card>
        <Route path='/dragons/:id' component={ DetailsPage } ></Route>
    </div>
);

export default ListCard