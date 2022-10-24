import React from "react";
import classes from "./Heading.module.scss";

function Heading(props) {
  return (
    <div className={classes.heading}>
      <h3>{props.title}</h3>
    </div>
  );
}

export default Heading;
