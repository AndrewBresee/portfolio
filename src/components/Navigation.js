import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <NavItem eventKey={1}>
            <Link to="home">Home</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="pictures">Pictures</Link>
          </NavItem>
          <NavItem eventKey={3}>
            <Link to="about">About Me</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
