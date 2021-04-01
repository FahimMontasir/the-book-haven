import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteamSquare } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './SideNav.css'
import { Button } from 'react-bootstrap';

const SideNav = () => {
  const { url } = useRouteMatch()
  return (
    <ProSidebar className="sidebar-height">
      <SidebarHeader>
        <h3 className="text-center">The Book Haven</h3>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<FontAwesomeIcon icon={faSteamSquare} size="2x" />}>
            Manage Books
          <Link to={`${url}/manage-books`} />
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faPlusSquare} size="2x" />}>
            Add Books
            <Link to={`${url}/add-books`} />
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faEdit} size="2x" />}>
            Edit Books
            <Link to={`${url}/edit-books/noValidId`} />
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-center">© 2021 Fahim All Rights Reserved</p>
        <Button as={Link} to="/" variant="outline-light">Back to Home</Button>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideNav;
