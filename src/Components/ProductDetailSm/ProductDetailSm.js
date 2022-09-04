import classes from "./ProductDetailSm.module.scss";

function ProductDetailSm(props) {
  return (
    <div className={classes.productDetailSm}>
      <img src={props.imgSrc} alt={props.alt} />
      {props.newProduct && <h6>new product</h6>}
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      {props.seeProduct && <button>see product</button>}
      {props.addToCart && (
        <span className={classes.productDetailSm_price}>{props.price}</span>
      )}
      {props.addToCart && (
        <div>
          <div>
            <button className={classes.productDetailSm_qtBtn}>-</button>
            <span>1</span>
            <button className={classes.productDetailSm_qtBtn}>+</button>
          </div>
          <button>add to cart</button>
        </div>
      )}
    </div>
  );
}

export default ProductDetailSm;
