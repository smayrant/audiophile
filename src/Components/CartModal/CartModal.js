import classes from "./CartModal.module.scss";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import Backdrop from "../UI/Backdrop/Backdrop";
import ReactDOM from "react-dom";

function CartModal(props) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  const dispatch = useDispatch();

  const emptyCartHandler = () => {
    dispatch(cartActions.emptyCart());
  };

  const toggleVisibility = () => {
    props.setCartState(false);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-portal")
      )}
      <div className={classes.cartModal}>
        {/* If there are no items in the cart, display an empty cart message. Otherwise, list the items in the cart, the total and checkout button */}
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
            <Link to={"/checkout"}>
              <button
                onClick={toggleVisibility}
                className={classes.cartModal_checkoutBtn}
              >
                checkout
              </button>
            </Link>
          </div>
        ) : (
          <p className={classes.cartModal_emptyMsg}>Your cart is empty!</p>
        )}
      </div>
    </Fragment>
  );
}

export default CartModal;
