import React from 'react'
import './css/DetailsCard.scss'
import axios from '../configs/api'
import { Form, Col, Button } from 'react-bootstrap'

const data = {
    name: '',
    type: ''
};

const handleSubmit = (idDragon, event) => {
    fillField()
    try {
        axios.put(`/${idDragon}`, data)
            .then(res => {
                window.location = "/dragons";
            })
    } catch (err) {
        console.log(`😱 Axios request failed: ${err}`)
    }
}

const fillField = () => {
    const name = document.getElementById("name-dragon").value;
    const type = document.getElementById("type-dragon").value;
    data.name = name
    data.type = type
}



const DetailsCard = ({ dragon }, key) => (
    <div>
        <h1 className="title">  Editar dados</h1>
        <Form>
            <Form.Row className="form-row">
                <Col >
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control id="name-dragon" defaultValue={dragon.name} name="name" required />
                </Col>
                <Col>
                    <Form.Label>Tipo:</Form.Label>
                    <Form.Control id="type-dragon" defaultValue={dragon.type} name="type" required />
                </Col>
                <Col>
                    <Form.Label>Data de Criação:</Form.Label>
                    <Form.Control value={dragon.createdAt} disabled />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col className="align-buttons">
                    <a href="/dragons">
                        <Button className="button-pink" type="button">Voltar </Button>
                    </a>
                    <Button className="button-pink" type="button" onClick={(event) => handleSubmit(dragon.id, event)}>Atualizar</Button>
                </Col>
            </Form.Row>
        </Form>
    </div>
)

export default DetailsCard