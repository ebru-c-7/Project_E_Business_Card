import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import SocialMedia from "./SocialMedia";
import ImgItem from "../../assets/business/logo.png";

const ECardItem = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Card.Img
            variant="top"
            style={{ width: "6.5rem" }}
            src={props.logo || ImgItem}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Card.Title style={{ display: "inline-block" }}>
              {props.name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {props.position}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {props.company}
            </Card.Subtitle>
          </div>
        </div>
        <Card.Header>Contact Info:</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Tel:{" "}
            <a className="social" href={`tel:${props.tel}`}>
              {props.tel}
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            E-Mail:{" "}
            <a className="social" href={`mailto:${props.mail}`}>
              {props.mail}
            </a>
          </ListGroup.Item>
          {props.location && <ListGroup.Item>
            Location: {props.location}
          </ListGroup.Item>}
        </ListGroup>
        <Card.Text style={{ fontSize: "smaller", fontStyle: "italic" }}>
          {props.slogan}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted flexBox">
        <SocialMedia media={props.socialMedia} />
      </Card.Footer>
    </Card>
  );
};

export default ECardItem;
