import './App.scss'
import React, { Component } from 'react'
import { MDBContainer } from 'mdbreact'
import HomePage from '../home/HomePage'
import ListPage from '../dragons/ListPage'
import Login from '../../components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import DetailsPage from '../dragons/DetailsPage'
import NotFoundPage from '../error/NotFoundPage'
import RegisterPage from '../dragons/RegisterPage'
import { Navbar, Nav, Button, Form } from 'react-bootstrap'
import { isAuthenticated } from '../../services/AuthService'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

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
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/dragons' component={ListPage} />
      <PrivateRoute exact path='/dragons/register' component={RegisterPage} />
      <PrivateRoute path='/dragons/:id' component={DetailsPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

const Footer = () => (
  <div className="footer-copyright text-center py-3 footer-dragon">
    <MDBContainer fluid >
      &copy; {new Date().getFullYear()} Copyright: Cássia Gomes
        </MDBContainer>
  </div>
);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isToaster: false,
      notification: {
        title: '',
        message: ''
      }
    };
  }
  componentDidMount() {
    console.log(this.props)
  }

  render() {
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
      </div >
    )
  }

}
