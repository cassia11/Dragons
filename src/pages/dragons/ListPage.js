import React from 'react'
import { Card } from 'react-bootstrap';

class ListPage extends React.Component {

  render() {
    return (
      <div>
        <Card style={{ width: '18rem', margin: '30px' }}>
          <Card.Body>
            <Card.Title bg="light">Nome do dragão</Card.Title>
            <Card.Link bg="light" href="#">Remover dragão</Card.Link>
            <Card.Link bg="light" href="#">Editar dragão</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ListPage