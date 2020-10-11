import React from "react";

import EBCardItem from "./EBCardItem";

const EBCardList = (props) => {
  let items;
  items =
    props.cards.length === 0 ? (
      <h6 style={{fontStyle: "italic"}}>No cards found!</h6>
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
