import React, { createContext, useState } from 'react';
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
import Orders from './components/Orders/Orders';
import ProtectedRoute from './components/LoginPage/ProtectedRoute/ProtectedRoute';
export const booksContext = createContext();
const App = () => {
  const [books, setBooks] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({ name: "", email: "" })
  return (
    <booksContext.Provider value={[books, setBooks, loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <ProtectedRoute path="/orders">
            <Orders></Orders>
          </ProtectedRoute>
          <ProtectedRoute path="/admin">
            <Admin></Admin>
          </ProtectedRoute>
          <ProtectedRoute path="/checkout/:id">
            <CheckoutPage></CheckoutPage>
          </ProtectedRoute>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <h1 className="text-center text-danger mt-5">404 error! Page not found</h1>
          </Route>
        </Switch>
      </Router>
    </booksContext.Provider>
  );
};

export default App;