import classes from "./SeeProduct.module.scss";

function SeeProduct(props) {
  return (
    <div className={classes.seeProduct}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <h5>{props.title}</h5>
      <button>see product</button>
    </div>
  );
}

export default SeeProduct;
