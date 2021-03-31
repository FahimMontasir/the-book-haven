import React from 'react';
import { Button, Card } from 'react-bootstrap';

const DisplayCard = () => {
  return (
    <div>
      <Card style={{ width: '18rem', margin: "30px" }}>
        <Card.Img variant="top" src="book image" />
        <Card.Body>
          <Card.Title>book name</Card.Title>
          <Card.Text>author name</Card.Text>
          <Card.Text className="d-flex justify-content-center">
            <span style={{ marginRight: "50px", fontSize: "27px" }}>$price</span>
            <Button variant="outline-warning">Buy nOw</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayCard;