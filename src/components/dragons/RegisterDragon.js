import { Form, Button } from 'react-bootstrap'
import axios from '../../configs/api'
import '../css/RegisterDragon.scss'
import React from 'react'

const data = {
    name: '',
    type: ''
};

const handlePost = () => {
    fillField()
    try {
        axios.post('', data)
            .then(res => {
                
                window.location = "/dragons"
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

const RegisterDragon = () => (
    <div className="dimension">
        <Form>
            <h1 className="title">Cadastrar Dragão:</h1>
            <Form.Group controlId="name-dragon">
                <Form.Label>Nome:</Form.Label>
                <Form.Control type="text" name="name" required />
            </Form.Group>
            <Form.Group controlId="type-dragon">
                <Form.Label>Tipo:</Form.Label>
                <Form.Control type="text" name="type" required />
            </Form.Group>
            <div className="align-buttons">
                <Button className="button-pink" type="button" onClick={() => handlePost()} >Salvar</Button>
            </div>
        </Form>
    </div>
);

export default RegisterDragon
