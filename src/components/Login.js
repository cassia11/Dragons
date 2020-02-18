import React from 'react'
import { Form, Button } from 'react-bootstrap';

const Login = () => (

    <Form style={{ paddingTop: '16px', padding: '20px' }}>
        <Form.Group controlId="formBasicUsername">
            <Form.Label>Nome de usuário:</Form.Label>
            <Form.Control type="username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha:</Form.Label>
            <Form.Control type="password" />
        </Form.Group>
        <Button style={{  backgroundColor: 'pink', borderColor: 'pink' }}>Entrar</Button>
    </Form>
);
export default Login
