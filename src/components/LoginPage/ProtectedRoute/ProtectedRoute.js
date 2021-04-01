import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { booksContext } from '../../../App';

const ProtectedRoute = ({ children, ...rest }) => {
  const [books, setBooks, loggedInUser] = useContext(booksContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;