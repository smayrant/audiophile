import React from "react";
import classes from "./YX1Earphones.module.scss";
import earphones from "../../Assets/Images/earphones-yx1.jpg";

function YX1Earphones() {
  return (
    <div className={classes.yx1}>
      <img src={earphones} alt="YX1 Earphones" />
      <div className={classes.yx1_infoContainer}>
        <div>
          <h4>yx1 earphones</h4>
          <button>see product</button>
        </div>
      </div>
    </div>
  );
}

export default YX1Earphones;
