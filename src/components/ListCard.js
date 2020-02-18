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
            <Card.Header style={{ textAlign: 'center ' }}>Informações do dragão:</Card.Header>
            <Card.Body style={{ textAlign: 'center ' }} >
                <Card.Title bg="light">Nome: {dragon.name}</Card.Title>
                <Button style={{ marginRight: '15px' }} variant="danger" onClick={() => handleDelete(dragon.id)} >Remover</Button>
                <Card.Link href={`/dragons/${dragon.id}`}><Button variant="primary">Editar</Button></Card.Link>
            </Card.Body>
        </Card>
    </div>
);

export default ListCard