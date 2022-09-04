import classes from "./Hero.module.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.hero_textContainer}>
        <h6>new product</h6>
        <h1>
          xx99 mark ii <span>headphones</span>
        </h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/products/mark-ii-headphones">
          <button>see product</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
