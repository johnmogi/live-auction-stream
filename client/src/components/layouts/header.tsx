import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';


export class Header extends Component {
  render() {
    return <> 
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Auction Site</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
            <NavLink className="nav-link" to="/bids" exact>
              Bids
            </NavLink>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>

    
     </>;
  }
}