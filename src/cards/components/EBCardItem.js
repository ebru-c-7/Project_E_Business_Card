import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { AuthContext } from "./../../shared/context/context";
import SubMenu from "./SubMenu";
import SocialMedia from "./SocialMedia";
import ImgItem from "../../assets/business/logo.png";
import "../cards.css";

const EBCardItem = (props) => {
  const auth = useContext(AuthContext);

  let socialMedia = {
    linkedin: props.linkedin,
    twitter: props.twitter,
    facebook: props.facebook,
    instagram: props.instagram,
  };

  return (
    <Card style={{ width: "16rem" }}>
      <Card.Body>
        {auth.isLoggedIn && (
          <SubMenu
            className="card-button"
            id={props.id}
            {...props.actions}
            isMyCard={props.creator.id === auth.pId}
            isActive={props.active}
          />
        )}{" "}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Card.Img
            variant="top"
            style={{ width: "5rem", marginRight: "0.6rem" }}
            src={
              props.logoImg ? `http://localhost:5000/${props.logoImg}` : ImgItem
            }
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Card.Title style={{ display: "inline-block" }}>
              {props.creator.name}
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
            {auth.isLoggedIn ? (
              <a className="social" href={`tel:${props.tel}`}>
                {props.tel}
              </a>
            ) : (
              <Nav.Link
                as={NavLink}
                style={{ display: "inline", padding:"0" }}
                to="/people/authenticate/login"
              >
                Please sign in!
              </Nav.Link>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            E-Mail:{" "}
            {auth.isLoggedIn ? (
              <a className="social" href={`mailto:${props.email}`}>
                {props.email}
              </a>
            ) : (
              <Nav.Link
                as={NavLink}
                style={{ display: "inline", padding:"0" }}
                to="/people/authenticate/login"
              >
                Please sign in!
              </Nav.Link>
            )}
          </ListGroup.Item>
          {props.location && (
            <ListGroup.Item>Location: {props.location}</ListGroup.Item>
          )}
        </ListGroup>
        <Card.Text style={{ fontSize: "smaller", fontStyle: "italic" }}>
          {props.slogan}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="social-media text-muted">
        <SocialMedia media={socialMedia} />
      </Card.Footer>
    </Card>
  );
};

export default EBCardItem;
