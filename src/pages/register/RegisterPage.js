import React, { Component } from 'react';
import RegisterDragon from '../../components/RegisterDragon';
import './RegisterPage.css';

export default class RegisterPage extends Component {

    render() {
        return (
            <div className="RegisterPage-div">
                <RegisterDragon />
            </div>
        )
    }
}