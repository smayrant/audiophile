import classes from "./PictureContainer.module.scss";

function PictureContainer(props) {
  return (
    <div className={classes.pictureContainer}>
      <img src={props.img1} alt={props.alt1} />
      <img src={props.img2} alt={props.alt2} />
      <img src={props.img3} alt={props.alt3} />
    </div>
  );
}

export default PictureContainer;
