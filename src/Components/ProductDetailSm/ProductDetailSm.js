import classes from "./ProductDetailSm.module.scss";

function ProductDetailSm(props) {
  return (
    <div className={classes.productDetailsSm}>
      <img src={props.imgSrc} alt={props.alt} />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      <button>see product</button>
    </div>
  );
}

export default ProductDetailSm;
