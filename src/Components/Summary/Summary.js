import classes from "./Summary.module.scss";
import SummaryItem from "../SummaryItem/SummaryItem";
import Footer from "../Footer/Footer";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function Summary() {
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const cartItems = useSelector((state) => state.cart.items);

  const shipping = 50;
  const vat = cartItems.length < 1 ? 0 : cartTotal * 0.2;
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
              <td className={classes.summary_checkoutValue}>{`$${vat}`}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className={classes.summary_checkoutSpacer}></tr>
            <tr className={classes.summary_checkoutTotal}>
              <td className={classes.summary_checkoutKey}>grand total</td>
              <td className={classes.summary_checkoutTotalValue}>{`$${
                cartTotal + shipping + vat
              }`}</td>
            </tr>
          </tfoot>
        </table>
        <button>continue & pay</button>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Summary;
