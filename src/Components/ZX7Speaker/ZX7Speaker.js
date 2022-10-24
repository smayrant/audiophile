import speaker from "../../Assets/Images/speaker-zx7-mobile.jpg";
import speakerTablet from "../../Assets/Images/speaker-zx7-tablet.jpg";
import speakerDesktop from "../../Assets/Images/speaker-zx7-desktop.jpg";
import classes from "./ZX7Speaker.module.scss";
import { Link } from "react-router-dom";

function ZX7Speaker() {
  return (
    <div className={classes.zx7}>
      <picture>
        <source media="(min-width: 960px)" srcset={speakerDesktop} />
        <source media="(min-width: 768px)" srcset={speakerTablet} />
        <img src={speaker} alt={"ZX7 speaker on stand"} />
      </picture>
      <div className={classes.zx7_info}>
        <h3>zx7 speaker</h3>
        <Link to="/products/zx7-speaker">
          <button>see product</button>
        </Link>
      </div>
    </div>
  );
}

export default ZX7Speaker;
