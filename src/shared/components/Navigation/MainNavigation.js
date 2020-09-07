import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLinks from "./NavLinks";
import Image from "react-bootstrap/Image";

import imgItem from "../../../assets/business/logo.png";

import "./Navigation.css";

const MainNavigation = () => {
  return (
    <Container>
      <Navbar fixed="top" bg="light" variant="light" expand="sm">
        <Navbar.Brand href="/home">
          <Image
            src={imgItem}
            alt="logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="bg-light" id="basic-navbar-nav">
          <Nav
            justify
            variant="pills"
            defaultkey="/home"
            style={{ width: "100%" }}
          >
            <NavLinks />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MainNavigation;
