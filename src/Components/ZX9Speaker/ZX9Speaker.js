import classes from "./ZX9Speaker.module.scss";
import speaker from "../../Assets/Images/speaker-zx9-mobile.png";
import speakerTablet from "../../Assets/Images/speaker-zx9-tablet.png";
import speakerDesktop from "../../Assets/Images/speaker-zx9-desktop.png";
import { Link } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";

function ZX9Speaker() {
  const windowSize = useWindowWidth();
  const imageUrl =
    windowSize >= 960
      ? speakerDesktop
      : windowSize <= 768
      ? speaker
      : speakerTablet;

  return (
    <div className={classes.zx9}>
      <div className={classes.zx9Container}>
        <img src={imageUrl} alt="ZX9 Speaker" />
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
