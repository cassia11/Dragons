import React from 'react'
import { Form, Button } from 'react-bootstrap';

const Login = () => (

    <Form>
        <Form.Group controlId="formBasicUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button variant="outline-danger">Submit</Button>
    </Form>
);
export default Login
