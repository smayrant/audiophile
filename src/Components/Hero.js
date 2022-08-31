import React from "react";
import classes from "./Hero.module.scss";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.hero_textContainer}>
        <h5>new product</h5>
        <h1>
          xx99 mark ii <span>headphones</span>
        </h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button>see product</button>
      </div>
    </div>
  );
}

export default Hero;
