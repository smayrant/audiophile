import React from "react";
import classes from "./YX1Earphones.module.scss";
import earphones from "../../Assets/Images/earphones-yx1.jpg";
import earphonesTablet from "../../Assets/Images/earphones-yx1-tablet.jpg";
import earphonesDesktop from "../../Assets/Images/earphones-yx1-desktop.jpg";
import { Link } from "react-router-dom";

function YX1Earphones() {
  return (
    <div className={classes.yx1}>
      <picture>
        <source media="(min-width: 992px)" srcSet={earphonesDesktop} />
        <source media="(min-width: 768px)" srcSet={earphonesTablet} />
        <img src={earphones} alt={"ZX7 speaker on stand"} />
      </picture>
      <div className={classes.yx1_infoContainer}>
        <div className={classes.yx1_info}>
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
