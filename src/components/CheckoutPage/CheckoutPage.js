import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import HomeNav from '../Home/HomeNav/HomeNav';
import './CheckoutPage.css'
const CheckoutPage = () => {
  return (
    <div>
      <HomeNav></HomeNav>
      <Container className="checkout-body">
        <h3>Checkout</h3>
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
              <td>The best book </td>
              <td>1</td>
              <td>$00</td>
            </tr>
            <tr>
              <th colSpan="2">Total</th>
              <th>$00</th>
            </tr>
          </tbody>
        </Table>
        <div className="checkout-btn">
          <Button variant="success">
            place order
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;