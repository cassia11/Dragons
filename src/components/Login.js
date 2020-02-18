import React from 'react'
import { Form, Button } from 'react-bootstrap';

const Login = () => (

    <Form style={{ paddingTop: '16px', padding: '20px' }}>
        <Form.Group controlId="formBasicUsername">
            <Form.Label>Nome de usuário:</Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha:</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button style={{  backgroundColor: 'pink', borderColor: 'pink' }}>Salvar</Button>
    </Form>
);
export default Login
