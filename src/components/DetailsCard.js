import React from 'react'
import { Card, Form, Col, Button } from 'react-bootstrap'

const DetailsCard = ({ dragon }, key) => (
    <div>
        <h1 style={{ fontSize: '30px', paddingTop: '10px', textAlign: 'center' }}>Altere os dados do Dragão</h1>
        <Form>
            <Form.Row style={{ paddingTop: '16px', padding: '20px' }}>
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
            <Button style={{marginLeft: '20px'}} variant="outline-success">Salvar</Button>
        </Form>
        <Card border="dark" style={{ width: '25rem', margin: '30px' }} className="justify-content-between">
            <Card.Header style={{ textAlign: 'center ', fontSize: '20px' }}>Informações do dragão:</Card.Header>
            <Card.Body >
                <Card.Title bg="light" style={{ fontSize: '18px' }}>Nome: {dragon.name}</Card.Title>
                <Card.Subtitle bg="light" style={{ fontSize: '18px' }}>Tipo: {dragon.type}</Card.Subtitle>
                <Card.Text bg="light" style={{ fontSize: '18px' }}>Data de criação: {dragon.createdAt}</Card.Text>
            </Card.Body>
        </Card>
    </div>
)

export default DetailsCard