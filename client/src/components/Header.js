import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Section from './Section';
import '../App.css';


class Header extends Component {
  render() {
    return (
      <header>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="../App.js">FH digital development</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Home</NavItem>
              <NavItem eventKey={2} href="#">Work</NavItem>
              <NavItem eventKey={3} href="#">About</NavItem>
            </Nav>
            <ul className="nav navbar-nav navbar-right" >
              <li>
                <a href="https://github.com/FelipeAtGA" rel="noopener noreferrer" title="github" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/felipe-hernandez/" rel="noopener noreferrer" title="linked-in" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="mailto:felipeneo@hotmail.com" rel="noopener noreferrer" title="email" target="_blank">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
        <Section />
      </header>
    );
  }
}

export default Header;
