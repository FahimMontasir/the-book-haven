import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { booksContext } from '../../../App';

const HomeNav = () => {
  const [books, setBooks, loggedInUser] = useContext(booksContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">The Book Haven</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/" className="mr-5 font-weight-bold">Home</Nav.Link>
            <Nav.Link as={Link} to="/orders" className="mr-5 font-weight-bold">Orders</Nav.Link>
            <Nav.Link as={Link} to="/admin" className="mr-5 font-weight-bold">Admin</Nav.Link>
            <Nav.Link as={Link} to="/checkout/noId" className="mr-5 font-weight-bold">
              Checkout <FontAwesomeIcon icon={faShoppingBasket} />
            </Nav.Link>
            {
              loggedInUser.name ?
                <h5 style={{ backgroundColor: "lightgrey", padding: '5px', borderRadius: "5px" }}>
                  {loggedInUser.name}
                  <img src={loggedInUser.userImg} alt="user"
                    style={{ width: "30px", borderRadius: "50%" }}
                  />
                </h5> :
                <Nav.Link as={Link} to="/login" className="font-weight-bold btn btn-outline-success">Login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNav;