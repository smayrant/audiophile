import React from "react";
import classes from "./YX1Earphones.module.scss";
import earphones from "../../Assets/Images/earphones-yx1.jpg";
import { Link } from "react-router-dom";

function YX1Earphones() {
  return (
    <div className={classes.yx1}>
      <img src={earphones} alt="YX1 Earphones" />
      <div className={classes.yx1_infoContainer}>
        <div>
          <h4>yx1 earphones</h4>
          <Link to="/products/yx1-earphones">
            <button>see product</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default YX1Earphones;
