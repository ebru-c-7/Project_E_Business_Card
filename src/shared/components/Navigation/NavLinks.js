import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";
import { AuthContext } from "./../../context/context";
// import AuthMode from "./AuthMode";

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <React.Fragment>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/ebcards">E-Business-Cards</NavLink>
      </li>
      {!auth.isLoggedIn && (
        <li>
          <a href="/" onClick={(e) => e.preventDefault()} className="drop">
            Authenticate{" "}
          </a>
          <ul>
            <li>
              <NavLink to={`/people/authenticate/login`}>Log In</NavLink>
            </li>
            <li>
              <NavLink to={`/people/authenticate/signup`}>Sign Up</NavLink>
            </li>
          </ul>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/my-portfolio">My Portfolio</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/logout" onClick={(e)=>{
            e.preventDefault();
            auth.logout()
            }}>Logout</NavLink>
        </li>
      )}
    </React.Fragment>
  );
};

export default NavLinks;
