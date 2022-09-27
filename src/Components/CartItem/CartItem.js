import classes from "./CartItem.module.scss";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

function CartItem(props) {
  const { name, price, quantity, cartImg, id } = props;

  const dispatch = useDispatch();

  const increaseQtyHandler = () => {
    dispatch(cartActions.addItemToCart({ name, id, price }));
  };

  const decreaseQtyHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div className={classes.cartItem}>
      <div className={classes.cartItem_cartItem}>
        <img src={cartImg} alt="Cart item icon" />
        <div className={classes.cartItem_infoContainer}>
          <div className={classes.cartItem_info}>
            <span className={classes.cartItem_title}>{name}</span>
          </div>
          <div>
            <span className={classes.cartItem_price}>{`$${price}`}</span>
          </div>
        </div>
      </div>
      <div className={classes.cartItem_qtContainer}>
        <button
          onClick={decreaseQtyHandler}
          className={classes.cartItem_qtDown}
        >
          -
        </button>
        <span className={classes.cartItem_qt}>{quantity}</span>
        <button onClick={increaseQtyHandler} className={classes.cartItem_qtUp}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
