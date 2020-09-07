import React from "react";

import Carousel from "react-bootstrap/Carousel";
import item1 from "../../../assets/business/card.jpg";
import item2 from "../../../assets/business/computer.jpg";
import item3 from "../../../assets/business/computer-phone.jpg";

const NewsItems = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item1}
          alt="card"
          style={{ height: "40vh" }}
        />
        <Carousel.Caption>
          <h3>E-Business-Card</h3>
          <p>A new approach to business cards.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item2}
          alt="computer"
          style={{ height: "40vh" }}
        />
        <Carousel.Caption>
          <h3>Adapt to New Technologies</h3>
          <p>Adapt to technology in every facet of business</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item3}
          alt="sign up"
          style={{ height: "40vh" }}
        />
        <Carousel.Caption>
          <h3>Get Yours!</h3>
          <p>Sign Up today and create your e.b.c and share with others .</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default NewsItems;
