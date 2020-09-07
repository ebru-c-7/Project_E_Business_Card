import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
          <Form.Control.Feedback type="invalid">
            Please enter a valid e-mail address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" />
          <Form.Control.Feedback type="invalid">
            Please enter a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <hr />
      <h5>E-Business-Card Information:</h5>

      <Form.Row>
        <Form.Group as={Col} controlId="position">
          <Form.Label>Position</Form.Label>
          <Form.Control required placeholder="Enter occupation" />
          <Form.Control.Feedback type="invalid">
            Please enter your occupation.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="company">
          <Form.Label>Company</Form.Label>
          <Form.Control reqired placeholder="Enter company name" />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          Please enter your company.
        </Form.Control.Feedback>
      </Form.Row>
      <Form.Group controlId="location">
        <Form.Label>City and Country</Form.Label>
        <Form.Control placeholder="Optional: Enter location as 'City, Country'" />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} controlId="tel">
          <Form.Label>Telephone</Form.Label>
          <Form.Control required placeholder="Contact phone" type="tel" />
          <Form.Control.Feedback type="invalid">
            Please enter a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="contactEmail">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control required placeholder="Contact e-mail" type="email" />
          <Form.Control.Feedback type="invalid">
            Please enter a valid contact address.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="linkedin" sm={12} md={6} lg={6}>
          <Form.Label>LinkedIn Address</Form.Label>
          <Form.Control placeholder="Opt: your linkedin address" type="url" />
        </Form.Group>

        <Form.Group as={Col} controlId="twitter" sm={12} md={6} lg={6}>
          <Form.Label>Twitter Address</Form.Label>
          <Form.Control placeholder="Opt: your twitter address" type="url" />
        </Form.Group>

        <Form.Group as={Col} controlId="facebook" sm={12} md={6} lg={6}>
          <Form.Label>Facebook Address</Form.Label>
          <Form.Control placeholder="Opt: your facebook address" type="url" />
        </Form.Group>

        <Form.Group as={Col} controlId="instagram" sm={12} md={6} lg={6}>
          <Form.Label>Instagram Address</Form.Label>
          <Form.Control placeholder="Opt: your instagram address" type="url" />
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="slogan">
        <Form.Label>Slogan</Form.Label>
        <Form.Control
          placeholder="Opt: Add your motto to the card"
          type="text"
          maxlength="20"
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="outline-primary" type="submit" size="lg">
          JOIN US
        </Button>
      </div>
    </Form>
  );
};

export default SignUp;
