import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">The Book Haven</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/" className="mr-5 font-weight-bold">Home</Nav.Link>
            <Nav.Link as={Link} to="/admin" className="mr-5 font-weight-bold">Admin</Nav.Link>
            <Nav.Link as={Link} to="/checkout" className="mr-5 font-weight-bold">Checkout</Nav.Link>
            <Nav.Link as={Link} to="/login" className="font-weight-bold btn btn-outline-success">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNav;