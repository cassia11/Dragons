import React from 'react'
import axios from '../configs/api'
import { Form, Col, Button } from 'react-bootstrap'

const form = {
    name: '',
    type: ''
};

const handleSubmit = (idDragon) => {
    try {
        axios.put(`/${idDragon}`, { form })
            .then(res => {
                console.log(res)
            })
    } catch (err) {
        console.log(`😱 Axios request failed: ${err}`);
    }
}

const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    if (name === 'name') form.name = value
    else form.type = value
    console.log(form)
}

const handleField = ({ dragon }) => {
    const name = dragon.name
}

const DetailsCard = ({ dragon }, key) => (
    <div>
        <h1 style={{ fontSize: '30px', paddingTop: '10px', textAlign: 'center' }}>Altere os dados do Dragão</h1>
        <Form>
            <Form.Row style={{ paddingTop: '16px', padding: '20px' }}>
                <Col>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control defaultValue={dragon.name} name="name" onChange={(event) => handleChange(event)} />
                </Col>
                <Col>
                    <Form.Label>Tipo:</Form.Label>
                    <Form.Control defaultValue={dragon.type} name="type" onChange={(event) => handleChange(event)} />
                </Col>
                <Col>
                    <Form.Label>Data de Criação:</Form.Label>
                    <Form.Control value={dragon.createdAt} disabled />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col><Button type="button" onClick={(event) => handleSubmit(dragon.id)}>Atualizar</Button></Col>
            </Form.Row>
        </Form>
    </div>
)

export default DetailsCard