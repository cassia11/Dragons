import './App.scss'
import React from 'react'
import HomePage from '../home/HomePage'
import ListPage from '../dragons/ListPage'
import RegisterPage from '../register/RegisterPage'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Button, Form } from 'react-bootstrap'
import Login from '../../components/Login'
import DetailsPage from '../dragons/DetailsPage'
import { MDBContainer } from "mdbreact";
import { isAuthenticated } from "../../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <PrivateRoute exact path='/dragons' component={ListPage} />
      <PrivateRoute exact path='/dragons/register' component={RegisterPage} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute path='/dragons/:id' component={DetailsPage} />
    </Switch>
  </BrowserRouter>
);

const Footer = () => (
  <div style={{ backgroundColor: 'pink' }} className="footer-copyright text-center py-3">
    <MDBContainer fluid >
      &copy; {new Date().getFullYear()} Copyright: Cássia Gomes
        </MDBContainer>
  </div>
);

function App() {
  return (
    <div>
      <Navbar className="App-navbar" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="/dragon.png"
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
            <Nav.Link bg="light" href="/dragons/register">Cadastrar um dragão</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <Button variant="outline-danger" href="/login" type="submit">Login</Button>
        </Form>
      </Navbar>
      {Routes()}
      {Footer()}
    </div>
  )
}

export default App;
