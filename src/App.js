import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import LoginPage from './components/LoginPage/LoginPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/checkout">
          <CheckoutPage></CheckoutPage>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <h1 className="text-center text-danger mt-5">404 error! Page not found</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;