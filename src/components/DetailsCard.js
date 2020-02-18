import React from 'react'
import { Card, Form, Col } from 'react-bootstrap'

const DetailsCard = ({ dragon }, key) => (
    <div>
        <h1>Altere os dados do Dragão</h1>
        <Form>
            <Form.Row>
                <Col>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control />
                </Col>
                <Col>
                    <Form.Label>Tipo:</Form.Label>
                    <Form.Control />
                </Col>
                <Col>
                    <Form.Label>Data de Criação:</Form.Label>
                    <Form.Control />
                </Col>
            </Form.Row>
        </Form>
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