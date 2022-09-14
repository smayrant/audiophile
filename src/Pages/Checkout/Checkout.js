import classes from "./Checkout.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import GoBackButton from "../../Components/GoBackButton/GoBackButton";
import { Fragment } from "react";
import Summary from "../../Components/Summary/Summary";
import CartModal from "../../Components/CartModal/CartModal";

function Checkout() {
  return (
    <Fragment>
      <Navbar />
      <GoBackButton />
      <CartModal />
      <div className={classes.checkout}>
        <h3>checkout</h3>

        <form>
          <fieldset>
            <legend>billing details</legend>
            <div className={classes.checkout_inputContainer}>
              <label className={classes.checkout_label} for="name">
                Name
              </label>
              <input
                className={classes.checkout_input}
                type="text"
                name="name"
                placeholder="Alexei Ward"
              />
            </div>
            <div className={classes.checkout_inputContainer}>
              <label className={classes.checkout_label} for="email">
                Email Address
              </label>
              <input
                className={classes.checkout_input}
                type="email"
                name="email"
                placeholder="alexei@mail.com"
              />
            </div>
            <div className={classes.checkout_inputContainer}>
              <label className={classes.checkout_label} for="phone number">
                Phone Number
              </label>
              <input
                className={classes.checkout_input}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone number"
                placeholder="+1 202-555-0136"
                maxlength="12"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>shipping info</legend>
            <div className={classes.checkout_inputContainer}>
              <label className={classes.checkout_label} for="address">
                Your Address
              </label>

              <input
                className={classes.checkout_input}
                type="text"
                name="address"
                placeholder="1137 WIlliams Avenue"
              />
            </div>
            <div className={classes.checkout_inputContainer}>
              <label className={classes.checkout_label} for="zip">
                Zip Code
              </label>

              <input
                className={classes.checkout_input}
                type="text"
                name="zip"
                placeholder="10001"
                pattern="[0-9]{5}"
              />
            </div>
            <div className={classes.checkout_inputContainer}>
              <label className={classes.checkout_label} for="city">
                City
              </label>

              <input
                className={classes.checkout_input}
                type="text"
                name="city"
                placeholder="New York"
              />
            </div>
            <div className={classes.checkout_inputContainer}>
              <label className={classes.checkout_label} for="country">
                Country
              </label>

              <input
                className={classes.checkout_input}
                type="text"
                name="country"
                placeholder="United States"
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>payment details</legend>
            <span className={classes.checkout_label}>Payment Method</span>
            <div>
              <div className={classes.checkout_radioContainer}>
                <label className={classes.checkout_paymentLabel} for="e-money">
                  <input type="radio" value="e-Money" checked />
                  <span>e-Money</span>
                </label>
              </div>
              <div className={classes.checkout_radioContainer}>
                <label className={classes.checkout_paymentLabel} for="cod">
                  <input type="radio" value="Cash on Delivery" />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
            <div>
              <label
                className={classes.checkout_inputContainer}
                for="e-moneyNumber"
              >
                <span className={classes.checkout_label}>e-Money Number</span>
                <input
                  className={classes.checkout_input}
                  type="text"
                  placeholder="238521991"
                />
              </label>
              <label
                className={classes.checkout_inputContainer}
                for="e-moneyPin"
              >
                <span className={classes.checkout_label}>e-Money Pin</span>
                <input
                  className={classes.checkout_input}
                  type="text"
                  placeholder="6891"
                />
              </label>
            </div>
          </fieldset>
        </form>
      </div>
      <Summary />
    </Fragment>
  );
}

export default Checkout;
