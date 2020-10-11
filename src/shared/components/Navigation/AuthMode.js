import React from "react";
import { NavLink } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

const AuthMode = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="mode" id="authmode">
        {props.children}
      </Dropdown.Toggle>
      <Dropdown.Menu style={{backgroundColor: "#f8f9fa"}}>
        <Dropdown.Item className="dropDownLink" as={NavLink} to={`/people/authenticate/${"login"}`} eventKey="auth-login">
          Log In
        </Dropdown.Item>
        <Dropdown.Item className="dropDownLink" as={NavLink} to={`/people/authenticate/${"signup"}`} eventKey="auth-signup">
          Sıgn Up
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AuthMode;
