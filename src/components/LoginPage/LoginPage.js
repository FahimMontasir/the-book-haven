import React from 'react';
import HomeNav from '../Home/HomeNav/HomeNav';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  //email password login method
  const onSubmit = data => {
    console.log(data)
  };
  //google login method
  const handleGoogle = () => {
    console.log('hello google')
  }
  return (
    <div>
      <HomeNav></HomeNav>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)} className="form-card-edit d-flex flex-column align-items-center">
          <input type="email" name="email" placeholder="enter your valid email" ref={register({ required: true })} />
          <input type="password" name="password" placeholder="Enter your password" ref={register({ required: true })} />
          <Button variant="outline-dark" type="submit">Login or create one</Button>
          <h5 style={{ margin: "20px" }}>Or continue with google</h5>
          <Button onClick={handleGoogle} variant="outline-dark"><FontAwesomeIcon icon={faGoogle} size="2x" /></Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;