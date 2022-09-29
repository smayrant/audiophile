import classes from "./ProductDetailSm.module.scss";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

function ProductDetailSm(props) {
  const dispatch = useDispatch();

  const qtyToAdd = useSelector((state) => state.qtyToAdd);

  const { name, id, price, imgSrc, cartImg, quantity } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ name, id, price, cartImg, quantity }));
  };

  const increaseQtyHandler = () => {
    dispatch(cartActions.increaseQty());
  };

  const decreaseQtyHandler = () => {
    dispatch(cartActions.decreaseQty());
  };
  return (
    <div className={classes.productDetailSm}>
      <img src={imgSrc} alt={props.alt} />
      {props.newProduct && <h5>new product</h5>}
      <h3 className={props.seeProduct ? classes.centerText : ""}>
        {props.title}
      </h3>
      <p>{props.text}</p>
      {props.seeProduct && (
        <button className={classes.productDetailSm_seeProduct__btn}>
          see product
        </button>
      )}
      {props.addToCart && (
        <span
          className={classes.productDetailSm_price}
        >{`$${props.price}`}</span>
      )}
      {props.addToCart && (
        <div className={classes.productDetailSm_purchaseContainer}>
          <div className={classes.productDetailSm_qtContainer}>
            <button
              onClick={decreaseQtyHandler}
              className={classes.productDetailSm_qtDown}
            >
              -
            </button>
            <span className={classes.productDetailSm_qt}>{qtyToAdd}</span>
            <button
              onClick={increaseQtyHandler}
              className={classes.productDetailSm_qtUp}
            >
              +
            </button>
          </div>
          <button
            onClick={addToCartHandler}
            id={classes.productDetailSm_addToCart}
          >
            add to cart
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductDetailSm;
