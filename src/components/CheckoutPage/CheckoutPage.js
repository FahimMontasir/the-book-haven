import React, { useContext, useState } from 'react';
import { Badge, Button, Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import HomeNav from '../Home/HomeNav/HomeNav';
import './CheckoutPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { booksContext } from '../../App';
const CheckoutPage = () => {
  const [books, setBooks, loggedInUser] = useContext(booksContext);
  const { id } = useParams();
  const [checkoutDetails, setCheckoutDetails] = useState({});
  const selectedBook = books.find(book => book._id === id);
  //checkout 
  const handleCheckout = () => {
    console.log('clicked', selectedBook, loggedInUser, new Date())
  }
  return (
    <div>
      <HomeNav></HomeNav>
      <Container className="checkout-body">
        <h3>Checkout {id === "noId" ?
          <Badge pill variant="warning"><FontAwesomeIcon icon={faTimes} /></Badge> :
          <Badge pill variant="success"> selected for place order <FontAwesomeIcon icon={faCheck} /></Badge>}
        </h3>
        <Table responsive="md">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedBook?.bookName} </td>
              <td>{id !== "noId" && "1"}</td>
              <td>${selectedBook?.price}</td>
            </tr>
            <tr>
              <th colSpan="2">Total</th>
              <th>${selectedBook?.price}</th>
            </tr>
          </tbody>
        </Table>
        <div className="checkout-btn">
          {id !== "noId" ?
            <Button onClick={handleCheckout} variant="success">
              place order
            </Button> :
            <Button variant="warning" disabled>
              Invalid checkout
            </Button>
          }
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;