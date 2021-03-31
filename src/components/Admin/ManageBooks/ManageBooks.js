import React from 'react';
import { Jumbotron, Table, Button } from 'react-bootstrap';
import SimpleNav from '../SimpleNav/SimpleNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
const ManageBooks = () => {
  return (
    <div>
      <SimpleNav>Manage All Books</SimpleNav>
      <Jumbotron className="mt-5 mr-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>BOOK NAME</th>
              <th>AUTHOR NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The best book</td>
              <td>Jhanker</td>
              <td>$100</td>
              <td>
                <Button variant="outline-info">
                  <FontAwesomeIcon icon={faEdit} size="1x" />
                </Button>
                <Button variant="outline-danger" className="ml-3">
                  <FontAwesomeIcon icon={faTrash} size="1x" />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    </div>
  );
};

export default ManageBooks;