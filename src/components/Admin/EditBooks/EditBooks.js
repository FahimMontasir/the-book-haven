import React, { useContext, useState } from 'react';
import { Button, Col, Jumbotron, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import SimpleNav from '../SimpleNav/SimpleNav';
import { booksContext } from '../../../App';
import './EditBooks.css';

const AddBooks = () => {
  const { register, handleSubmit } = useForm();
  const [books] = useContext(booksContext);
  const { editId } = useParams();
  const selectedToEdit = books.find(book => book._id === editId);
  //submit all to mongodb
  const onSubmit = data => {
    const { bookName, authorName, price } = data;
    const ProductDetails = { bookName, authorName, price }
    fetch(`http://localhost:5000/update/${selectedToEdit?._id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ProductDetails)
    })
      .then(result => console.log(result))
      .catch(res => console.log(res))
  };
  return (
    <>
      <SimpleNav> EDIT BOOKS</SimpleNav>
      <Row>
        <Col>
          <form onSubmit={handleSubmit(onSubmit)} className="form-card-edit d-flex flex-column align-items-center">
            {editId === "noValidId" &&
              <Button as={Link} to="/admin/manage-books" variant="warning">
                Select a book first
              </Button>}
            <input type="text" name="bookName" placeholder="Enter Book Name" ref={register({ required: true })} />
            <input type="text" name="authorName" placeholder="Enter Author Name" ref={register({ required: true })} />
            <input type="number" name="price" placeholder="Enter Price" ref={register({ required: true })} />
            {
              editId === "noValidId" ? <input type="submit" disabled /> : <input type="submit" />
            }
          </form>
        </Col>
        <Col>
          <Jumbotron className="selected-info">
            <h4>Your selected book details</h4>
            <p>name: {selectedToEdit?.bookName}</p>
            <p>author: {selectedToEdit?.authorName}</p>
            <p>price: ${selectedToEdit?.price}</p>
            <p>key: {selectedToEdit?._id}</p>
          </Jumbotron>
        </Col>
      </Row>
    </>
  )
};

export default AddBooks;