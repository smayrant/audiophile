import { Fragment } from "react";
import classes from "./CartModal.module.scss";
import zx7 from "../../Assets/Images/zx7-cart.jpg";

function CartModal(props) {
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
          onClick={() => {
            props.setCartState(false);
          }}
          className={classes.cartModal_closeBtn}
        >
          X
        </button>
        <div className={classes.cartModal_headingContainer}>
          <h5>cart (1)</h5>
          <button>Remove all</button>
        </div>
        <div className={classes.cartModal_cartItem_container}>
          <div className={classes.cartModal_cartItem}>
            <img src={zx7} alt="Cart item icon" />
            <div className={classes.cartModal_infoContainer}>
              <div className={classes.cartModal_info}>
                <span className={classes.cartModal_title}>xx99 MK II</span>
              </div>
              <div>
                <span className={classes.cartModal_price}>$2,999</span>
              </div>
            </div>
          </div>
          <div className={classes.cartModal_qtContainer}>
            <button className={classes.cartModal_qtDown}>-</button>
            <span className={classes.cartModal_qt}>1</span>
            <button className={classes.cartModal_qtUp}>+</button>
          </div>
        </div>
        <div className={classes.cartModal_totalContainer}>
          <span className={classes.cartModal_total}>total</span>
          <span className={classes.cartModal_totalPrice}>$5,396</span>
        </div>
        <button className={classes.cartModal_checkoutBtn}>checkout</button>
      </div>
    </Fragment>
  );
}

export default CartModal;
