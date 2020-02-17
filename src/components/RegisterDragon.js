import React from 'react'
import { Form, Button } from 'react-bootstrap';

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
        <Button variant="outline-danger">Submit</Button>
    </Form>
);
export default RegisterDragon
