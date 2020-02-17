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
            <Form.Label>Name:</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formBasicType">
            <Form.Label>Type:</Form.Label>
            <Form.Control type="type" placeholder="Enter type" />
        </Form.Group>
        <Button variant="outline-success" onClick={() => handlePost()} >Submit</Button>
    </Form>
);
export default RegisterDragon
