import React from 'react'
import { Card } from 'react-bootstrap'

const DetailsCard = ({ dragon }, key) => (
    <div>
        <h1>Altere os dados do Dragão</h1>
        <Card style={{ width: '50%', margin: '30px' }}>
            <Card.Body>
                <Card.Title>nome: {dragon.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tipo: {dragon.type}</Card.Subtitle>
                <Card.Text>Criado em: {dragon.createdAt}</Card.Text>
            </Card.Body>
        </Card>
    </div>
)

export default DetailsCard