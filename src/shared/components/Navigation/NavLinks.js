import React, {useContext} from "react";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

import "./Navigation.css";
import { AuthContext } from "./../../context/context";
import AuthMode from "./AuthMode";

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <React.Fragment>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/home" eventKey="home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/ebcards" eventKey="cards">
          E-Business-Cards
        </Nav.Link>
      </Nav.Item>
     {!auth.isLoggedIn && <Nav.Item>
        {/* <Nav.Link as={NavLink} to="/authenticate" eventKey="auth">
          Authenticate
        </Nav.Link> */}
        <AuthMode>Authenticate</AuthMode>
      </Nav.Item>}
      {auth.isLoggedIn && <Nav.Item>
        <Nav.Link as={NavLink} to="/my-portfolio" eventKey="portfolio">
          My Portfolio
        </Nav.Link>
      </Nav.Item>}
      {auth.isLoggedIn && 
      <Nav.Item>
        <Nav.Link onClick={auth.logout}>Logout</Nav.Link>
        </Nav.Item>}

    </React.Fragment>
  );
};

export default NavLinks;
