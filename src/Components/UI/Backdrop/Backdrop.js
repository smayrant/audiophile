import React from "react";
import classes from "./Backdrop.module.scss";

function Backdrop(props) {
  return (
    <div onClick={props.removeBackdrop} className={classes.backdrop}></div>
  );
}

export default Backdrop;
