import classes from "./Summary.module.scss";
import SummaryItem from "../SummaryItem/SummaryItem";
import Footer from "../Footer/Footer";
import { Fragment } from "react";

function Summary() {
  return (
    <Fragment>
      <div className={classes.summary}>
        <h5>summary</h5>
        <SummaryItem />
        <table>
          <tbody>
            <tr>
              <td className={classes.summary_checkoutKey}>total</td>
              <td className={classes.summary_checkoutValue}>$2,999</td>
            </tr>
            <tr>
              <td className={classes.summary_checkoutKey}>shipping</td>
              <td className={classes.summary_checkoutValue}>$50</td>
            </tr>
            <tr>
              <td className={classes.summary_checkoutKey}>vat (included)</td>
              <td className={classes.summary_checkoutValue}>$1079</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className={classes.summary_checkoutSpacer}></tr>
            <tr className={classes.summary_checkoutTotal}>
              <td className={classes.summary_checkoutKey}>grand total</td>
              <td className={classes.summary_checkoutTotalValue}>$4,446</td>
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
