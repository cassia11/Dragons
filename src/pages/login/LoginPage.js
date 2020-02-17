import React, { Component } from 'react';
import Login from '../../components/Login';
import './LoginPage.css';

export default class LoginPage extends Component {

    render() {
        return (
            <div className="LoginPage-div">
                <Login className="LoginPage-div"/>
            </div>
        )
    }
}