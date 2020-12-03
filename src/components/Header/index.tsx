import React, { Fragment } from 'react';
import { Row, Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './header.scss';
const Header = () => {
  return (
    <Navbar bg="light" variant="light" sticky="top" className="d-flex flex-row justify-content-between align-items-center w-100">
      <Navbar.Brand>
        <img src={logo} alt="" className="logo" />
      </Navbar.Brand>
      <Container className="mx-auto justify-content-end">
        <Nav>
          <Nav.Link className="mr-2">
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link className="mr-2">
            <Link to="/blogs">About</Link>
          </Nav.Link>
          <Nav.Link className="mr-2">
            <Link to="/blogs">Blog</Link>
          </Nav.Link>
          <Nav.Link className="mr-2">
            <Link to="/blogs">Contact</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
