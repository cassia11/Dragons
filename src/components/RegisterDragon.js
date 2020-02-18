import React from 'react'
import axios from '../configs/api'
import { Form, Button } from 'react-bootstrap';

const handlePost = (idDragon) => {
    try {
        axios.post(`/`)
            .then(res => {
                window.location.reload();
            })
    } catch (err) {
        console.log(`😱 Axios request failed: ${err}`);
    }
}

const RegisterDragon = () => (

    <Form>
        <Form.Group controlId="formBasicName">
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formBasicType">
            <Form.Label>Tipo:</Form.Label>
            <Form.Control type="text" placeholder="Enter type" />
        </Form.Group>
        <Form.Group controlId="formBasicDate">
            <Form.Label>Data de criação:</Form.Label>
            <Form.Control type="text" placeholder="Enter date" />
        </Form.Group>
        <Button variant="outline-success" onClick={() => handlePost()} >Salvar</Button>
    </Form>
);
export default RegisterDragon
