import classes from "./Summary.module.scss";
import SummaryItem from "../SummaryItem/SummaryItem";
import Footer from "../Footer/Footer";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation";

function Summary() {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleClick = () => {
    setIsOrderConfirmed(true);
  };

  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const cartItems = useSelector((state) => state.cart.items);
  const shipping = 50;
  const vat = cartItems.length < 1 ? 0 : cartTotal * 0.2;
  const grandTotal = cartTotal + shipping + vat;
  return (
    <Fragment>
      <div className={classes.summary}>
        <h5>summary</h5>
        {cartItems.map((item) => (
          <SummaryItem
            key={item.id}
            img={item.cartImg}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <table>
          <tbody>
            <tr>
              <td className={classes.summary_checkoutKey}>total</td>
              <td
                className={classes.summary_checkoutValue}
              >{`$${cartTotal}`}</td>
            </tr>
            <tr>
              <td className={classes.summary_checkoutKey}>shipping</td>
              <td
                className={classes.summary_checkoutValue}
              >{`$${shipping}`}</td>
            </tr>
            <tr>
              <td className={classes.summary_checkoutKey}>vat (included)</td>
              <td className={classes.summary_checkoutValue}>{`$${vat.toFixed(
                2
              )}`}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className={classes.summary_checkoutSpacer}></tr>
            <tr className={classes.summary_checkoutTotal}>
              <td className={classes.summary_checkoutKey}>grand total</td>
              <td
                className={classes.summary_checkoutTotalValue}
              >{`$${grandTotal.toFixed(2)}`}</td>
            </tr>
          </tfoot>
        </table>
        <button className={classes.summary_button} onClick={handleClick}>
          continue & pay
        </button>
        {isOrderConfirmed && <OrderConfirmation grandTotal={grandTotal} />}
      </div>
      <Footer />
    </Fragment>
  );
}

export default Summary;
