import './App.css';
import React from 'react';
import Home from '../dragons/Home';
import ListPage from '../dragons/ListPage';
import { Link, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Link to='/'>Home</Link>
        <Link to='/dragon'>Dragon</Link>

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/dragon' component={ ListPage } />
        </Switch>

      </header>
    </div>
  );
}

export default App;
