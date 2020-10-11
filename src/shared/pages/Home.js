import React from "react";

import Container from "react-bootstrap/Container";
import NewsItems from "../components/Home/NewsItems";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import imgItem1 from "../../assets/business/share-with.jpg";
import imgItem2 from "../../assets/business/share.jpg";

const Home = () => {
  return (
    <Container fluid style={{ position: "relative", top: "10vh" }}>
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <NewsItems />
        </Col>
      </Row>
      <hr />
      <Row style={{ marginTop: "20px" }} className="justify-content-center">
        <Col sm={12} md={5} lg={4}>
          <Image src={imgItem1} roundedCircle style={{ height: "200px" }} />
        </Col>
        <Col sm={12} md={6} lg={5}>
          <h3>Join US Today!</h3>
          <p>
            To start enjoying a virtual business card portfolio, join us today
            if you are not a member.{"\n\n"}
            Don't forget to create your electronic business card!
          </p>
        </Col>
      </Row>
      <hr />
      <Row style={{ marginTop: "20px" }} className="justify-content-md-center">
        <Col xs={12} md={6} lg={6}>
          <h3>Check Out Our Members!</h3>
          <p>
            You can also check out our public e-business-cards (e.b.c.) to see
            some of our members. {"\n\n"}Don't forget that not all members share
            their cards publicly. So, sign up today to reach out more people!
          </p>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <Image src={imgItem2} roundedCircle style={{ height: "200px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
