import React, { Component } from 'react';
import RegisterDragon from '../../components/dragons/RegisterDragon';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <RegisterDragon />
    }
}