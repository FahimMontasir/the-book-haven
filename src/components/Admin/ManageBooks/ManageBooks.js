import React, { useContext } from 'react';
import { Jumbotron, Table, Button } from 'react-bootstrap';
import SimpleNav from '../SimpleNav/SimpleNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { booksContext } from '../../../App';
import './ManageBooks.css'
import { Link } from 'react-router-dom';
const ManageBooks = () => {
  const [books] = useContext(booksContext)
  //to delete from the database
  const handleDelete = () => {
    console.log('delete clicked')
  }
  return (
    <div>
      <SimpleNav>Manage All Books</SimpleNav>
      <Jumbotron className="mt-5 mr-3 tron-body">
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
            {
              books.map(book => {
                const { bookName, authorName, price, _id: id } = book;
                return (
                  <tr key={id}>
                    <td>{bookName}</td>
                    <td>{authorName}</td>
                    <td>${price}</td>
                    <td>
                      <Button as={Link} to={`/admin/edit-books/${id}`} variant="outline-info">
                        <FontAwesomeIcon icon={faEdit} size="1x" />
                      </Button>
                      <Button onClick={handleDelete} variant="outline-danger" className="ml-3">
                        <FontAwesomeIcon icon={faTrash} size="1x" />
                      </Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Jumbotron>
    </div>
  );
};

export default ManageBooks;