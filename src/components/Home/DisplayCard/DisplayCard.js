import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DisplayCard = ({ book }) => {
  const { img, bookName, authorName, price, _id: id } = book;
  return (
    <div>
      <Card
        style={{ width: '18rem', margin: "30px", border: 'none', boxShadow: "4px 4px 4px lightgrey" }
        }>
        <Card.Img style={{ height: "280px", width: "100%" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{bookName}</Card.Title>
          <Card.Text>Author: {authorName}</Card.Text>
          <Card.Text className="d-flex justify-content-center">
            <span style={{ marginRight: "50px", fontSize: "27px" }}>${price}</span>
            <Button as={Link} to={`/checkout/${id}`} variant="outline-warning">Buy nOw</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayCard;