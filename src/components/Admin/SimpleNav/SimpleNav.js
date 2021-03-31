import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const SimpleNav = ({ children }) => {
  return (
    <Container>
      <Navbar bg="light" className="rounded-pill ">
        <Navbar.Brand>{children}</Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default SimpleNav;