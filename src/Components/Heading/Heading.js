import React from "react";
import classes from "./Heading.module.scss";

function Heading(props) {
  return (
    <div className={classes.heading}>
      <h4>{props.title}</h4>
    </div>
  );
}

export default Heading;
