import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SimpleNav from '../SimpleNav/SimpleNav';
import './AddBooks.css'
const axios = require('axios');

const AddBooks = () => {
  const { register, handleSubmit } = useForm();
  const [imgUrl, setImgUrl] = useState({})

  //submit all to mongodb
  const onSubmit = data => {
    const { bookName, authorName, price } = data;
    const ProductDetails = { bookName, authorName, price, "img": imgUrl.display_url }
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

  //to store image in imageBB 
  const handleImage = e => {
    const imgData = new FormData();
    imgData.set('key', '4ee92500539aec53d74737b7e5955151');
    imgData.append('image', e.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imgData)
      .then(function (response) {
        setImgUrl(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <>
      <SimpleNav> Add BOOKs</SimpleNav>
      <form onSubmit={handleSubmit(onSubmit)} className="form-card">
        <input type="text" name="bookName" placeholder="Enter Book Name" ref={register({ required: true })} />
        <input type="text" name="authorName" placeholder="Enter Author Name" ref={register({ required: true })} />
        <input type="number" name="price" placeholder="Enter Price" ref={register({ required: true })} />
        <input onChange={handleImage} type="file" />
        {imgUrl.title && <h5 className="text-success ml-3">image successfully uploaded(name:{imgUrl.title})</h5>}
        <input type="submit" />
      </form>
    </>
  )
};

export default AddBooks;