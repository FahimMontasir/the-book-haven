import React, { useContext } from 'react';
import { Jumbotron, Table, Button } from 'react-bootstrap';
import SimpleNav from '../SimpleNav/SimpleNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { booksContext } from '../../../App';
import './ManageBooks.css'
import { Link } from 'react-router-dom';
const ManageBooks = () => {
  const [books, setBooks] = useContext(booksContext)
  //to delete from the database
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
    const WithoutDeletedBooks = books.filter(book => book._id !== id)
    setBooks(WithoutDeletedBooks)
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
                const { bookName, authorName, price, _id } = book;
                return (
                  <tr key={_id}>
                    <td>{bookName}</td>
                    <td>{authorName}</td>
                    <td>${price}</td>
                    <td>
                      <Button as={Link} to={`/admin/edit-books/${_id}`} variant="outline-info">
                        <FontAwesomeIcon icon={faEdit} size="1x" />
                      </Button>
                      <Button onClick={() => handleDelete(_id)} variant="outline-danger" className="ml-3">
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