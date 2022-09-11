import classes from "./Features.module.scss";

function Features(props) {
  return (
    <div className={classes.features}>
      <h4 className={classes.features_title}>features</h4>
      <p>{props.paragraph1}</p>
      <p>{props.paragraph2}</p>
    </div>
  );
}

export default Features;
