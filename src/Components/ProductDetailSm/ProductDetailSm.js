import classes from "./ProductDetailSm.module.scss";

function ProductDetailSm(props) {
  return (
    <div className={classes.productDetailSm}>
      <img src={props.imgSrc} alt={props.alt} />
      {props.newProduct && <h5>new product</h5>}
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      {props.seeProduct && <button>see product</button>}
      {props.addToCart && (
        <span className={classes.productDetailSm_price}>{props.price}</span>
      )}
      {props.addToCart && (
        <div className={classes.productDetailSm_purchaseContainer}>
          <div className={classes.productDetailSm_qtContainer}>
            <span className={classes.productDetailSm_qtDown}>-</span>
            <span className={classes.productDetailSm_qt}>1</span>
            <span className={classes.productDetailSm_qtUp}>+</span>
          </div>
          <button id={classes.productDetailSm_addToCart}>add to cart</button>
        </div>
      )}
    </div>
  );
}

export default ProductDetailSm;
