import './css/Login.scss'
import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { LoginWebService } from '../services/LoginWebService'

const user = {
    username: '',
    password: ''
};

const handleSubmit = () => {
    try {
        fillField()
        console.log(user)
        const res = LoginWebService({user})
        res === 'ok' ? window.location = "/" :  window.location.reload()
    } catch (err) {
        console.log(`😱 Failed: ${err}`)
    }
}

const fillField = () => {
    const username = document.getElementById("user-name").value
    const password = document.getElementById("user-password").value
    user.username = username
    user.password = password
}

const Login = () => (

    <Form>
        <h1 className="title">Login:</h1>
        <Form.Group controlId="user-name">
            <Form.Label>Nome de usuário:</Form.Label>
            <Form.Control type="username" required/>
        </Form.Group>
        <Form.Group controlId="user-password">
            <Form.Label>Senha:</Form.Label>
            <Form.Control type="password" required/>
        </Form.Group>
        <div className="align-buttons">
            <Button className="button-pink" onClick={() => handleSubmit()}>Entrar</Button>
        </div>
    </Form>
);

export default Login
