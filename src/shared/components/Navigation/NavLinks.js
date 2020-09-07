import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

import "./Navigation.css";
import AuthMode from "./AuthMode";

const NavLinks = () => {
  return (
    <React.Fragment>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/home" eventKey="home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/ecards" eventKey="cards">
          E-Business-Cards
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {/* <Nav.Link as={NavLink} to="/authenticate" eventKey="auth">
          Authenticate
        </Nav.Link> */}
        <AuthMode>Authenticate</AuthMode>
      </Nav.Item>
    </React.Fragment>
  );
};

export default NavLinks;
