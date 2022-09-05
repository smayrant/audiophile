import classes from "./Features.module.scss";

function Features(props) {
  return (
    <div className={classes.features}>
      <h5 className={classes.features_title}>features</h5>
      <p>{props.paragraph1}</p>
      <p>{props.paragraph2}</p>
    </div>
  );
}

export default Features;
