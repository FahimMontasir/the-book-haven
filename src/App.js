import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/">

        </Route>
        <Route path="/">

        </Route>
      </Switch>
    </Router>
  );
};

export default App;