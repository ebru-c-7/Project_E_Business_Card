import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Shimmer from './Shimmer'
import SkeletonItem from "./SkeletonItem";

import ImgItem from "../../assets/business/logo.png";

import "../../cards/cards.css";

const SkeletonCard = (props) => {
  const cardArr = [1, 2, 3].map((n) => (
    <div key={n} className="skeleton-wrapper">
      <Card style={{ width: "16rem", margin: "10px" }}>
        <Card.Body>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Card.Img
              variant="top"
              style={{ width: "5rem", marginRight: "0.6rem" }}
              src={ImgItem}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                width: "100%",
              }}
            >
              <SkeletonItem type="title" width="" />
              <SkeletonItem type="title" width="" />
              <SkeletonItem type="title" width="" />
            </div>
          </div>
          <Card.Header>Contact Info:</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Tel:
              <SkeletonItem type="text" width="77%" />
            </ListGroup.Item>
            <ListGroup.Item>
              E-Mail:
              <SkeletonItem type="text" width="63%" />
            </ListGroup.Item>
            <ListGroup.Item>
              Location: <SkeletonItem type="text" width="52%" />
            </ListGroup.Item>
          </ListGroup>
          <Card.Text style={{ fontSize: "smaller", fontStyle: "italic" }}>
            <SkeletonItem element="span" type="text" width="84%" />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="social-media text-muted">
          {[1, 2, 3].map((n) => (
            <SkeletonItem key={n} type="avatar" width="" />
          ))}
        </Card.Footer>
      </Card>
      <Shimmer />
    </div>
  ));
  return cardArr;
  //
  //   <div className="skeleton-card">
  //     <SkeletonElement type="title" />
  //     <SkeletonElement type="text" />
  //     <SkeletonElement type="text" />
  //     <SkeletonElement type="text" />
  //   </div>
  //   {/*  */}
  // </div>
};

export default SkeletonCard;
