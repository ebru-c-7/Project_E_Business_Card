import React from "react";

import "./Skeleton.css";

const SkeletonItem = (props) => {
  const classes = `skeleton ${props.type}`;

  const element =
    props.element === "span" ? (
      <span className={classes} style={{ width: props.width }}></span>
    ) : (
      <div className={classes} style={{ width: props.width }}></div>
    );

  return element;
};

export default SkeletonItem;
