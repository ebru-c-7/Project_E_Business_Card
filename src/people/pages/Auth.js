import React, { useContext, useState } from "react";
import {withRouter} from 'react-router-dom';

import Container from "react-bootstrap/Container";

import { AuthContext } from "./../../shared/context/context";
import useHttp from "./../../shared/hooks/http-hook";

import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";

const Auth = (props) => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendHttpRequest, clearError } = useHttp();
  const mode = props.match.params.mode;

  const logInHandler = async (event) => {
    event.preventDefault();

    let body = JSON.stringify({
      email: "",
      password: "",
    });
    let headers = { "Content-Type": "application/json" };

    try {
      const responseData = await sendHttpRequest(
        "http://localhost:5000/login",
        "POST",
        body,
        headers
      );
      auth.login(responseData.pId, responseData.token);
    } catch (err) {}
  };

  const signUpHandler = async (event) => {
    event.preventDefault();

    let body = JSON.stringify({
      email: "",
      password: "",
    });
    let headers = { "Content-Type": "application/json" };

    try {
      const responseData = await sendHttpRequest(
        "http://localhost:5000/signup",
        "POST",
        body,
        headers
      );
      auth.login(responseData.pId, responseData.token);
    } catch (err) {}
  };

  return <Container fluid="md" className="main-part" >
    {mode === "login" && <LogIn />}
    {mode === "signup" && <SignUp />}
  </Container>;
};

export default withRouter(Auth);
