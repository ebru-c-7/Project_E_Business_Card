import React from "react";

import EBCardItem from "./EBCardItem";

const EBCardList = (props) => {
  let styleIcon = {
    fontSize: "30px",
    color: "white",
    marginBottom: "10px",
  };

  let styleDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "15px"
  };

  let items;
  items =
    props.cards.length === 0 ? (
      <div style={styleDiv}>
        <i className="fas fa-frown" style={styleIcon}></i>
        <h6 style={{ fontStyle: "italic", color: "white" }}>No cards found!</h6>
      </div>
    ) : (
      props.cards.map((card) => (
        <EBCardItem
          actions={props}
          key={Math.random() * 1000}
          {...card}
        ></EBCardItem>
      ))
    );
  return items;
};

export default EBCardList;
