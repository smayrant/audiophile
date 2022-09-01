import classes from "./ZX9Speaker.module.scss";
import speaker from "../Assets/Images/speaker-zx9-mobile.png";

function ZX9Speaker() {
  return (
    <div className={classes.zx9}>
      <div className={classes.zx9Container}>
        <img src={speaker} alt="" />
        <h3>
          zx9 <span>speaker</span>
        </h3>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button>see product</button>
      </div>
    </div>
  );
}

export default ZX9Speaker;
