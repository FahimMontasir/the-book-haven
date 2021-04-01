import React, { useContext } from 'react';
import HomeNav from '../Home/HomeNav/HomeNav';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { booksContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const LoginPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const { register, handleSubmit } = useForm();
  const [books, setBooks, loggedInUser, setLoggedInUser] = useContext(booksContext);
  //email password login method
  const onSubmit = ({ email, password, name }) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const { email } = result.user;
        setLoggedInUser({ name, email })
        history.replace(from);
      })
  };

  //google login method
  const handleGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName: name, email } = result.user;
        setLoggedInUser({ name, email });
        history.replace(from);
      })
  }

  return (
    <div>
      <HomeNav></HomeNav>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)} className="form-card-edit d-flex flex-column align-items-center">
          <input type="text" name="name" placeholder="your name" ref={register({ required: true })} />
          <input type="email" name="email" placeholder="enter your valid email" ref={register({ required: true })} />
          <input type="password" name="password" placeholder="Enter your password" ref={register({ required: true, minLength: 6 })} />
          <Button variant="outline-dark" type="submit">Sign up now!</Button>
          <h5 style={{ margin: "20px" }}>Or continue with google</h5>
          <Button onClick={handleGoogle} variant="outline-dark"><FontAwesomeIcon icon={faGoogle} size="2x" /></Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;