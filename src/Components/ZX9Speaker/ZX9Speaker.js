import classes from "./ZX9Speaker.module.scss";
import speaker from "../../Assets/Images/speaker-zx9-mobile.png";
import { Link } from "react-router-dom";

function ZX9Speaker() {
  return (
    <div className={classes.zx9}>
      <div className={classes.zx9Container}>
        <img src={speaker} alt="" />
        <h2>
          zx9 <span>speaker</span>
        </h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to="/products/zx9-speaker">
          <button>see product</button>
        </Link>
      </div>
    </div>
  );
}

export default ZX9Speaker;
