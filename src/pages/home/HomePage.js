import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import './HomePage.css';


export default class Home extends Component {
  render() {
    return (
      <div className="HomePage-div">
        <Image className="HomePage-image" src="dragonHome.jpg" fluid />
      </div>
    );
  }
}