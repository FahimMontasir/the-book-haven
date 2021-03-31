import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import SideNav from './SideNav/SideNav';
import './Admin.css'
import AddBooks from './AddBooks/AddBooks';
import ManageBooks from './ManageBooks/ManageBooks'
import EditBooks from './EditBooks/EditBooks'
const Admin = () => {
  const { path } = useRouteMatch()
  return (
    <div>
      <Row>
        <Col md={3}>
          <SideNav></SideNav>
        </Col>
        <Col md={9}>
          <Switch>
            <Route path={`${path}/manage-books`}>
              <ManageBooks></ManageBooks>
            </Route>
            <Route path={`${path}/add-books`}>
              <AddBooks></AddBooks>
            </Route>
            <Route path={`${path}/edit-books`}>
              <EditBooks></EditBooks>
            </Route>
            <Route exact path={`${path}`}>
              <AddBooks></AddBooks>
            </Route>
          </Switch>
        </Col>
      </Row>

    </div>
  );
};

export default Admin;