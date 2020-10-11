import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import useCard from "../../shared/hooks/card-hook";
import NewCard from "../../cards/components/NewCard";

const SignUp = (props) => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const { card, changeHandler } = useCard();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      setValidated(true);
      props.onSignup(event, name, email, password, card);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter email"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid e-mail address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <hr />
      <NewCard changeName={setName} onChange={changeHandler}>
        E-Business-Card Information:
      </NewCard>

      <div className="text-center">
        <Button variant="outline-primary" type="submit" size="lg">
          JOIN US
        </Button>
      </div>
    </Form>
  );
};

export default SignUp;
