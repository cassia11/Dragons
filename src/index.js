import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/root/App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

require('dotenv').config({
    path: process.env.NODE_ENV === "development" ? ".env.testing" : ".env"
  })
console.log(process.env.APP_NAME)
console.log(process.env.ENVIROMENT)

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
