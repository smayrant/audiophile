import { Fragment, useState } from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import classes from "./OrderConfirmation.module.scss";
import checkmarkIcon from "../../Assets/Images/order-confirmation-checkmark.svg";
import SummaryItem from "../SummaryItem/SummaryItem";
import { useSelector } from "react-redux";

function OrderConfirmation(props) {
  const cartItems = useSelector((state) => state.cart.items);
  const [showOtherItems, setShowOtherItems] = useState(false);

  const handleViewOtherItems = () => {
    setShowOtherItems(!showOtherItems);
  };

  const otherCartItems = cartItems.slice(1);
  return (
    <Fragment>
      <Backdrop />
      <div className={classes.orderConfirmation}>
        <div className={classes.orderConfirmation_headerContainer}>
          <img src={checkmarkIcon} alt="Order Confirmation Checkmark Icon" />
          <button className={classes.orderConfirmation_closeButton}>X</button>
        </div>
        <h4>thank you for your order</h4>
        <p className={classes.orderConfirmation_text}>
          You will receive an email confirmation shortly.
        </p>
        <div className={classes.orderConfirmation_orderContainer}>
          <div className={classes.orderConfirmation_orderInfo}>
            <div className={classes.orderConfirmation_itemContainer}>
              <ui>
                <li className={classes.orderConfirmation_firstCartItem}>
                  <SummaryItem
                    className={classes.orderConfirmation_otherCartItem__active}
                    key={cartItems[0].id}
                    img={cartItems[0].cartImg}
                    name={cartItems[0].name}
                    price={cartItems[0].price}
                    quantity={cartItems[0].quantity}
                  />
                </li>
                {otherCartItems.map((item) => {
                  return (
                    <li
                      className={`${
                        showOtherItems
                          ? classes.orderConfirmation_otherCartItem__active
                          : classes.orderConfirmation_otherCartItem__inactive
                      }`}
                    >
                      <SummaryItem
                        key={item.id}
                        img={item.cartImg}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                      />
                    </li>
                  );
                })}
              </ui>
            </div>
            {cartItems.length > 1 && (
              <div className={classes.orderConfirmation_btnContainer}>
                <hr />
                <button
                  onClick={handleViewOtherItems}
                  className={classes.orderConfirmation_toggleItemsBtn}
                >
                  {!showOtherItems
                    ? `and ${cartItems.length - 1} other item(s)`
                    : "view less"}
                </button>
              </div>
            )}
          </div>
          <div className={classes.orderConfirmation_totalContainer}>
            <span className={classes.orderConfirmation_grandTotal__text}>
              grand total
            </span>
            <span
              className={classes.orderConfirmation_grandTotal}
            >{`$${props.grandTotal.toFixed(2)}`}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default OrderConfirmation;
