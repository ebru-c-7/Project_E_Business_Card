import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const LogIn = (props) => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      props
        .onLogin(event, email, password)
        .then()
        .catch((err) => console.log(err));
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row className="justify-content-center">
        <Form.Group as={Col} sm={10} md={6} lg={6} controlId="email">
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
      </Form.Row>

      <Form.Row className="justify-content-center">
        <Form.Group as={Col} sm={10} md={6} lg={6} controlId="password">
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
      <div className="text-center">
        <Button variant="outline-primary" type="submit" size="lg">
          LOGIN
        </Button>
      </div>
    </Form>
  );
};

export default LogIn;
