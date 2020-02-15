import React from 'react'
import Image from 'react-bootstrap/Image'
import './HomePage.css';


class Home extends React.Component {

  render() {
    return (
      <div className="HomePage-div">
        <Image className="HomePage-image" src="dragonHome.jpg" fluid />
      </div>
    );
  }
}


export default Home