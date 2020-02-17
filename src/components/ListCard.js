import React from 'react'
import axios from '../configs/api';
import { Card, Button } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import DetailsPage from '../pages/dragons/DetailsPage';

const handleDelete = (idDragon) => {
    try {
        axios.delete(`/${idDragon}`)
            .then(res => {
                window.location.reload();
            })
    } catch (err) {
        console.log(`😱 Axios request failed: ${err}`);
    }
}

const ListCard = ({ dragon }, key) => (
    <div>
        <Card border="dark" bg="dark" text="white" style={{ width: '18rem', margin: '30px' }}>
            <Card.Body>
                <Card.Title bg="light">{dragon.name}</Card.Title>
                <Button variant="danger" onClick={() => handleDelete(dragon.id)} >Remover</Button>
                <Button variant="primary" type="button" onClick={() => (
                    <BrowserRouter>
                        <Route path='/' component={DetailsPage} />
                    </BrowserRouter>
                )
                }>
                    {dragon.id}
                </Button>
                <Card.Link to={`/${dragon.id}`} >Editar</Card.Link>
            </Card.Body>
            <Card.Footer className="text-muted">{dragon.createdAt}</Card.Footer>
        </Card>
    </div>
);

export default ListCard