import bestGearImg from "../../Assets/Images/best-gear-mobile.jpg";
import classes from "./BestGear.module.scss";

function BestGear() {
  return (
    <div className={classes.bestGear}>
      <img src={bestGearImg} alt="Male listening to audio on earphones" />
      <div className={classes.bestGear_infoContainer}>
        <h4>
          bringing you the <span>best</span> audio gear
        </h4>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default BestGear;
