import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Section from './Section';
import '../App.css';


class Header extends Component {
  render() {
    return (
      <div className="warper">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">FH digital development</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Section />
      </div>
    );
  }
}

export default Header;
