import classes from "./CartModal.module.scss";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import CartItem from "../CartItem/CartItem";

function CartModal(props) {
  const cartItems = useSelector((state) => state.items);
  const totalQty = useSelector((state) => state.totalQuantity);
  const cartTotal = useSelector((state) => state.cartTotal);

  const dispatch = useDispatch();

  const emptyCartHandler = () => {
    dispatch(cartActions.emptyCart());
  };

  const toggleVisibility = () => {
    props.setCartState(false);
  };

  return (
    <Fragment>
      <div
        onClick={() => {
          props.setCartState(false);
        }}
        className={classes.cartModal_backdrop}
      ></div>
      <div className={classes.cartModal}>
        <button
          onClick={toggleVisibility}
          className={classes.cartModal_closeBtn}
        >
          X
        </button>

        {/* If there are no items in the cart, display an empty cart message. Otherwise, list the items in the cart, total and checkout button */}
        {cartItems.length > 0 ? (
          <div>
            <div className={classes.cartModal_headingContainer}>
              <h5>cart {`(${totalQty})`}</h5>
              <button onClick={emptyCartHandler}>Remove all</button>
            </div>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                cartImg={item.cartImg}
                id={item.id}
              />
            ))}
            <div className={classes.cartModal_totalContainer}>
              <span className={classes.cartModal_total}>total</span>
              <span
                className={classes.cartModal_totalPrice}
              >{`$${cartTotal}`}</span>
            </div>
            <button className={classes.cartModal_checkoutBtn}>checkout</button>
          </div>
        ) : (
          <p className={classes.cartModal_emptyMsg}>Your cart is empty!</p>
        )}
      </div>
    </Fragment>
  );
}

export default CartModal;
