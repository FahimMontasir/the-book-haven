import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SimpleNav from '../SimpleNav/SimpleNav';
import './EditBooks.css';

const AddBooks = () => {
  const { register, handleSubmit } = useForm();

  //submit all to mongodb
  const onSubmit = data => {
    const { bookName, authorName, price } = data;
    const ProductDetails = { bookName, authorName, price }
    console.log(ProductDetails)
    fetch('https://httpbin.org/post', {
      method: 'POST',
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
      <form onSubmit={handleSubmit(onSubmit)} className="form-card-edit d-flex flex-column align-items-center">
        <input type="text" name="bookName" placeholder="Enter Book Name" ref={register({ required: true })} />
        <input type="text" name="authorName" placeholder="Enter Author Name" ref={register({ required: true })} />
        <input type="number" name="price" placeholder="Enter Price" ref={register({ required: true })} />
        <input type="submit" />
      </form>
    </>
  )
};

export default AddBooks;