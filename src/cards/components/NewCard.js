import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import ImageUpload from "./ImageUpload";

const NewCard = (props) => {
  return (
    <React.Fragment>
      <h5>{props.children}</h5>
      <Form.Row>
        <Form.Group as={Col} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={props.name}
            disabled={props.name}
            placeholder="Enter your name"
            required
            onChange={(e) => props.changeName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="position">
          <Form.Label>Position</Form.Label>
          <Form.Control
            defaultValue={props.position && props.position}
            onChange={(e) => props.onChange("position", e.target.value)}
            required
            placeholder="Enter occupation"
          />
          <Form.Control.Feedback type="invalid">
            Please enter your occupation.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="company">
          <Form.Label>Company</Form.Label>
          <Form.Control
            defaultValue={props.company && props.company}
            onChange={(e) => props.onChange("company", e.target.value)}
            required
            placeholder="Enter company name"
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          Please enter your company.
        </Form.Control.Feedback>

        <Form.Group as={Col} controlId="location">
          <Form.Label>City and Country</Form.Label>
          <Form.Control
            defaultValue={props.location && props.location}
            onChange={(e) => props.onChange("location", e.target.value)}
            placeholder="Optional: Enter location as 'City, Country'"
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="tel">
          <Form.Label>Telephone</Form.Label>
          <Form.Control
            defaultValue={props.tel && props.tel}
            onChange={(e) => props.onChange("tel", e.target.value)}
            required
            placeholder="Contact phone"
            type="tel"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="contactEmail">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control
            defaultValue={props.email && props.email}
            onChange={(e) => props.onChange("email", e.target.value)}
            required
            placeholder="Contact e-mail"
            type="email"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid contact address.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="linkedin" sm={12} md={6} lg={6}>
          <Form.Label>LinkedIn Address</Form.Label>
          <Form.Control
            defaultValue={props.linkedin && props.linkedin}
            onChange={(e) => props.onChange("linkedin", e.target.value)}
            placeholder="Opt: your linkedin address"
            type="url"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="twitter" sm={12} md={6} lg={6}>
          <Form.Label>Twitter Address</Form.Label>
          <Form.Control
            defaultValue={props.twitter && props.twitter}
            onChange={(e) => props.onChange("twitter", e.target.value)}
            placeholder="Opt: your twitter address"
            type="url"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="facebook" sm={12} md={6} lg={6}>
          <Form.Label>Facebook Address</Form.Label>
          <Form.Control
            defaultValue={props.facebook && props.facebook}
            onChange={(e) => props.onChange("facebook", e.target.value)}
            placeholder="Opt: your facebook address"
            type="url"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="instagram" sm={12} md={6} lg={6}>
          <Form.Label>Instagram Address</Form.Label>
          <Form.Control
            defaultValue={props.instagram && props.instagram}
            onChange={(e) => props.onChange("instagram", e.target.value)}
            placeholder="Opt: your instagram address"
            type="url"
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="slogan" sm={12} md={6} lg={6}>
        <Form.Label>Slogan</Form.Label>
        <Form.Control
          defaultValue={props.slogan && props.slogan}
          onChange={(e) => props.onChange("slogan", e.target.value)}
          placeholder="Opt: Add your motto to the card"
          type="text"
          maxLength="20"
        />
      </Form.Group>

      <Form.Group controlId="logo-file">
        {!props.position && <ImageUpload onChange={props.onChange} />}
      </Form.Group>
    </React.Fragment>
  );
};

export default NewCard;
