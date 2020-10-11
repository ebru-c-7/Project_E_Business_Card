import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import NewCard from "./NewCard";
import LoadingSpinner from "../../shared/UI/LoadingSpinner";

import useCard from "../../shared/hooks/card-hook";
import useHttp from "./../../shared/hooks/http-hook";
import ErrorModal from "../../shared/UI/ErrorModal";

const NewCardModal = (props) => {
  const [validated, setValidated] = useState(false);
  const { card, changeHandler } = useCard(props.card);
  let { pId, token, email } = props.person;

  const { isLoading, error, sendHttpRequest, clearError } = useHttp();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      if (!props.card) {
        newCardHandler(card, token, pId, email);
      } else {
        editCardHandler(card, props.ecid, token);
      }
    }
  };

  const editCardHandler = async (card, ecid, token) => {
    let body = JSON.stringify(card);

    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };

    try {
      await sendHttpRequest(
        "http://localhost:5000/ebcards/" + ecid,
        "PATCH",
        body,
        headers
      );
      props.onSave();
      setValidated(false);
      props.onHide();
    } catch (err) {
      console.log(err);
      setValidated(false);
    }
  };

  const newCardHandler = async (card, token, pId, email) => {
    const formData = new FormData();

    for (let key in card) {
      if (key === "logoImg") {formData.append("image", card[key]);} 
      else {formData.append(key, card[key]); }
    }

    let body = formData;

    try {
      await sendHttpRequest(
        "http://localhost:5000/ebcards/" + email,
        "POST",
        body,
        { Authorization: "Bearer " + token }
      );
      props.onSave();
      setValidated(false);
      props.onHide();
    } catch (err) {
      console.log(err);
      setValidated(false);
      props.onHide();
    }
  };

  return (
    <React.Fragment>
      <ErrorModal show={!!error} onHide={clearError} errorMessage={error} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{props.card ? "Edit Card" : "Add New Card"}</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Body>
            {isLoading && <LoadingSpinner asOverlay />}
            <NewCard name={props.name} onChange={changeHandler} {...props.card}>
              E-Business-Card Information:
            </NewCard>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default NewCardModal;
