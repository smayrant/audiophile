import bestGearImg from "../../Assets/Images/best-gear-mobile.jpg";
import bestGearImgTablet from "../../Assets/Images/best-gear-tablet.jpg";
import bestGearImgDesktop from "../../Assets/Images/best-gear-desktop.jpg";
import classes from "./BestGear.module.scss";

function BestGear() {
  return (
    <div className={classes.bestGear}>
      <picture>
        <source media="(min-width: 960px)" srcset={bestGearImgDesktop} />
        <source media="(min-width: 768px)" srcset={bestGearImgTablet} />
        <img
          src={bestGearImg}
          alt={"Male sitting and listening to audio on headphones"}
        />
      </picture>
      <div className={classes.bestGear_infoContainer}>
        <h3>
          bringing you the <span>best</span> audio gear
        </h3>
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
