import React, { useContext } from 'react';
import { Badge, Jumbotron, Table } from 'react-bootstrap';
import { booksContext } from '../../App';
import HomeNav from "../Home/HomeNav/HomeNav"
const Orders = () => {
  const [books, setBooks, loggedInUser] = useContext(booksContext);
  return (
    <div>
      <HomeNav></HomeNav>
      <Jumbotron className="m-3">
        <h4>You've purchased <Badge pill variant="info">3</Badge> book(s)</h4>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td> <img src="" alt="books" /> </td>
              <td>the best book</td>
              <td>jhanker mahabub</td>
              <td>$00</td>
              <td>2 March, 2021</td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    </div>
  );
};

export default Orders;