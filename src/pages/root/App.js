import './App.css';
import React from 'react';
import HomePage from '../HomePage';
import ListPage from '../dragons/ListPage';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';



function App() {
  return <div>
    <Navbar className="App-navbar" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="dragon.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Imagem de um dragão"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link bg="light" href="/">Página inicial</Nav.Link>
          <Nav.Link bg="light" href="/dragons">Lista de dragões</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/dragons' component={ListPage} />
    </Switch>
  </div>
}


export default App;
