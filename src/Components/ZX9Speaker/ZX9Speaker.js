import classes from "./ZX9Speaker.module.scss";
import speaker from "../../Assets/Images/speaker-zx9-mobile.png";
import speakerTablet from "../../Assets/Images/speaker-zx9-tablet.png";
import speakerDesktop from "../../Assets/Images/speaker-zx9-desktop.png";
import { Link } from "react-router-dom";

function ZX9Speaker() {
  return (
    <div className={classes.zx9}>
      <div className={classes.zx9Container}>
        <picture>
          <source media="(min-width: 992px)" srcSet={speakerDesktop} />
          <source media="(min-width: 768px)" srcSet={speakerTablet} />
          <img src={speaker} alt={"ZX9 speaker"} />
        </picture>
        <div className={classes.zx9_infoContainer}>
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
    </div>
  );
}

export default ZX9Speaker;
