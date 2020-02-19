import React from 'react'
import '../css/ListCard.scss'
import axios from '../../configs/api'
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
    <Card border="dark" className="align-buttons align-card-list">
        <Card.Header>Informações do dragão:</Card.Header>
        <Card.Body>
            <Card.Title bg="light">Nome: {dragon.name}</Card.Title>
            <Button className="button-pink" variant="danger" onClick={() => handleDelete(dragon.id)} >Remover</Button>
            <Card.Link href={`/dragons/${dragon.id}`}><Button className="button-pink" variant="primary">Editar</Button></Card.Link>
        </Card.Body>
    </Card>

);

export default ListCard