import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import ECardList from "../components/ECardList";
import "./../cards.css";

const Ecards = () => {
  return (
    <React.Fragment>
      <Container fluid style={{ position: "relative", top: "10vh" }}>
        <Row className="cardGap justify-content-center">
          <ECardList />
        </Row>
      </Container>

      <Navbar fixed="bottom" bg="light" variant="light" expand="sm">
      <Navbar.Collapse className="justify-content-center navbar-foot" id="search-bar">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 navbar-input" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="search-bar" />
      </Navbar>
    </React.Fragment>
  );
};

export default Ecards;
