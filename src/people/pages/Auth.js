import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import Container from "react-bootstrap/Container";

import { AuthContext } from "./../../shared/context/context";
import useHttp from "./../../shared/hooks/http-hook";

import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";
import LoadingSpinner from "../../shared/UI/LoadingSpinner";
import ErrorModal from "../../shared/UI/ErrorModal";

const Auth = (props) => {
  const auth = useContext(AuthContext);

  const { isLoading, error, sendHttpRequest, clearError } = useHttp();
  const mode = props.match.params.mode;

  const logInHandler = async (event, email, password) => {
    if (event) event.preventDefault();

    let body = JSON.stringify({
      email,
      password,
    });

    let headers = { "Content-Type": "application/json" };

    try {
      const responseData = await sendHttpRequest(
        `${process.env.REACT_APP_BACKEND_URL}/people/authenticate/login`,
        "POST",
        body,
        headers
      );
      auth.login(responseData.pId, responseData.token, responseData.email);
    } catch (err) {
      console.log(err);
    }
  };

  const signUpHandler = async (event, name, email, password, card) => {
    if (event) event.preventDefault();

    let body = JSON.stringify({
      name,
      email,
      password,
    });

    let headers = { "Content-Type": "application/json" };

    let token, pId;
    try {
      const responseData = await sendHttpRequest(
        `${process.env.REACT_APP_BACKEND_URL}/people/authenticate/signup`,
        "POST",
        body,
        headers
      );
      pId = responseData.pId;
      token = responseData.token;
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => newCardHandler(card, token, pId, email), 2000);
  };

  const newCardHandler = async (card, token, pId, email) => {
    const formData = new FormData();

    for (let key in card) {
      if (key === "logoImg") {
        formData.append("image", card[key]);
      } else {
        formData.append(key, card[key]);
      }
    }

    let body = formData;

    try {
      await sendHttpRequest(
        `${process.env.REACT_APP_BACKEND_URL}/ebcards/${email}`,
        "POST",
        body,
        { Authorization: "Bearer " + token }
      );
      auth.login(pId, token, email);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal show={!!error} onHide={clearError} errorMessage={error} />

      <Container fluid="md" className="main-part">
        {isLoading && <LoadingSpinner asOverlay />}
        {mode === "login" && <LogIn onLogin={logInHandler} />}
        {mode === "signup" && <SignUp onSignup={signUpHandler} />}
      </Container>
    </React.Fragment>
  );
};

export default withRouter(Auth);
