import React from "react";

import NavLinks from "./NavLinks";

import imgItem from "../../../assets/business/logo.png";

import "./Navigation.css";
// import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <div className="bgded overlay">
        <div className="wrapper row0">
          <header id="header" className="hoc clear center">
            <a href="/home">
              <img src={imgItem} alt="logo" />
              <h1 id="logo">E-Business Cards</h1>
            </a>
          </header>
        </div>
        <div className="wrapper row1">
          <nav id="mainav" className="hoc clear">
            <ul className="clear">
              <NavLinks />
            </ul>
            <ul className="clear mobile">
              <li>
                <a
                  href="/"
                  onClick={(e) => e.preventDefault()}
                  className="drop"
                >
                  Menu
                </a>
                <ul>
                <NavLinks />
                  {/* <li>
                    <NavLink to={`/people/authenticate/login`}>Log In</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/people/authenticate/signup`}>
                      Sign Up
                    </NavLink>
                  </li> */}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
