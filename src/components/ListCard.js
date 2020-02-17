import React from 'react'
import axios from '../configs/api'
import { Card, Button } from 'react-bootstrap'

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
        <Card border="dark" style={{ width: '18rem', margin: '30px' }} className="justify-content-between">
        <Card.Header>Info Dragão:</Card.Header>
            <Card.Body>
                <Card.Title bg="light">{dragon.name}</Card.Title>
                <Button variant="danger" onClick={() => handleDelete(dragon.id)} >Remover</Button>
                
                <Card.Link href={`/dragons/${dragon.id}`} ><Button variant="primary">Editar</Button></Card.Link>
            </Card.Body>
            <Card.Footer className="text-muted">{dragon.createdAt}</Card.Footer>
        </Card>
    </div>
);

export default ListCard