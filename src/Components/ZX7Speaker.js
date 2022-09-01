import speaker from "../Assets/Images/speaker-zx7-mobile.jpg";
import classes from "./ZX7Speaker.module.scss";

function ZX7Speaker() {
  return (
    <div className={classes.zx7}>
      <img src={speaker} alt="ZX7 speaker on stand" />
      <div className={classes.zx7_info}>
        <h4>zx7 speaker</h4>
        <button>see product</button>
      </div>
    </div>
  );
}

export default ZX7Speaker;
