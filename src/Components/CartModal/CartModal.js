import { Fragment } from "react";
import classes from "./CartModal.module.scss";
import zx7 from "../../Assets/Images/zx7-cart.jpg";

function CartModal() {
  return (
    <Fragment>
      <div className={classes.cartModal_backdrop}></div>
      <div className={classes.cartModal}>
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
            <span className={classes.cartModal_qtDown}>-</span>
            <span className={classes.cartModal_qt}>1</span>
            <span className={classes.cartModal_qtUp}>+</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CartModal;