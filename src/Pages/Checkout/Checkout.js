import classes from "./Checkout.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import GoBackButton from "../../Components/UI/GoBackButton/GoBackButton";
import Footer from "../../Components/Footer/Footer";
import { Fragment, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Summary from "../../Components/Summary/Summary";
import OrderConfirmation from "../../Components/OrderConfirmation/OrderConfirmation";
import codIcon from "../../Assets/Images/cod-icon.svg";

const isEmpty = (value) => value.trim().length === 0;

const validateEmail = (email) => {
  if (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return true;
  }
  return false;
};

const validatePhoneNum = (phone) => {
  const validNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (String(phone).match(validNum)) {
    return true;
  }
  return false;
};

function Checkout() {
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const cartItems = useSelector((state) => state.cart.items);

  const [eMoneyView, seteMoneyView] = useState(true);
  const [CODView, setCODView] = useState(false);

  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    phone: true,
    address: true,
    zip: true,
    city: true,
    country: true,
    eMoneyNum: true,
    eMoneyPin: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();
  const zipInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();
  const eMoneyNumInputRef = useRef();
  const eMoneyPinInputRef = useRef();

  const shipping = 50;
  const vat = cartItems.length < 1 ? 0 : cartTotal * 0.2;
  const grandTotal = cartTotal + shipping + vat;

  const cartConfirmedHandler = () => {
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredZip = zipInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredEMoneyNum = eMoneyView ? eMoneyNumInputRef.current.value : "";
    const enteredEMoneyPin = eMoneyView ? eMoneyPinInputRef.current.value : "";

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = validateEmail(enteredEmail);
    const enteredPhoneIsValid = validatePhoneNum(enteredPhone);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredZipIsValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(enteredZip);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredCountryIsValid = !isEmpty(enteredCountry);
    const enteredEMoneyNumIsValid = /^\d{9}$/.test(enteredEMoneyNum);
    const enteredEMoneyPinIsValid = /^\d{4}$/.test(enteredEMoneyPin);

    setFormInputValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      phone: enteredPhoneIsValid,
      address: enteredAddressIsValid,
      zip: enteredZipIsValid,
      city: enteredCityIsValid,
      country: enteredCountryIsValid,
      eMoneyNum: enteredEMoneyNumIsValid,
      eMoneyPin: enteredEMoneyPinIsValid,
    });

    let formIsValid = false;

    if (eMoneyView) {
      formIsValid =
        enteredNameIsValid &&
        enteredEmailIsValid &&
        enteredPhoneIsValid &&
        enteredAddressIsValid &&
        enteredZipIsValid &&
        enteredCityIsValid &&
        enteredCountryIsValid &&
        enteredEMoneyNumIsValid &&
        enteredEMoneyPinIsValid;
    } else {
      formIsValid =
        enteredNameIsValid &&
        enteredEmailIsValid &&
        enteredPhoneIsValid &&
        enteredAddressIsValid &&
        enteredZipIsValid &&
        enteredCityIsValid &&
        enteredCountryIsValid;
    }

    if (formIsValid) {
      setIsOrderConfirmed(true);
    }
  };

  const codViewHandler = () => {
    seteMoneyView(false);
    setCODView(true);
  };

  const eMoneyViewHandler = () => {
    setCODView(false);
    seteMoneyView(true);
  };

  return (
    <Fragment>
      <Navbar />
      <div className={classes.checkoutContainer_main}>
        <GoBackButton />
        <div className={classes.checkoutContainer}>
          <div className={classes.checkout}>
            <h3>checkout</h3>
            <form>
              <fieldset>
                <legend>billing details</legend>
                <div className={classes.checkout_inputContainer_outer}>
                  <div className={classes.checkout_inputContainer}>
                    <div className={classes.checkout_labelContainer}>
                      <label className={classes.checkout_label} htmlFor="name">
                        Name
                      </label>
                      {!formInputValidity.name && (
                        <span className={classes.checkout_errorMessage}>
                          {"Please enter a name"}
                        </span>
                      )}
                    </div>

                    <input
                      required
                      className={
                        formInputValidity.name
                          ? classes["checkout_input"]
                          : `${classes.checkout_input} ${classes.invalid}`
                      }
                      type="text"
                      name="name"
                      placeholder="Alexei Ward"
                      id="name"
                      ref={nameInputRef}
                    />
                  </div>
                  <div className={classes.checkout_inputContainer}>
                    <div className={classes.checkout_labelContainer}>
                      <label className={classes.checkout_label} htmlFor="email">
                        Email Address
                      </label>
                      {!formInputValidity.email && (
                        <span className={classes.checkout_errorMessage}>
                          {"Please enter a valid email "}
                        </span>
                      )}
                    </div>
                    <input
                      className={
                        formInputValidity.email
                          ? classes["checkout_input"]
                          : `${classes.checkout_input} ${classes.invalid}`
                      }
                      type="email"
                      name="email"
                      placeholder="alexei@mail.com"
                      id="email"
                      ref={emailInputRef}
                    />
                  </div>
                </div>
                <div
                  className={`${classes.checkout_inputContainer} ${classes.checkout_inputContainer_phone}`}
                >
                  <div className={classes.checkout_labelContainer}>
                    <label
                      className={classes.checkout_label}
                      htmlFor="phone-number"
                    >
                      Phone Number
                    </label>
                    {!formInputValidity.phone && (
                      <span className={classes.checkout_errorMessage}>
                        {"Please enter a 10 digit phone number "}
                      </span>
                    )}
                  </div>
                  <input
                    className={
                      formInputValidity.phone
                        ? classes["checkout_input"]
                        : `${classes.checkout_input} ${classes.invalid}`
                    }
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="phone"
                    placeholder="202-555-0136"
                    maxLength="12"
                    htmlFor="phone"
                    ref={phoneInputRef}
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend>shipping info</legend>
                <div className={classes.checkout_inputContainer}>
                  <div className={classes.checkout_labelContainer}>
                    <label className={classes.checkout_label} htmlFor="address">
                      Your Address
                    </label>
                    {!formInputValidity.address && (
                      <span className={classes.checkout_errorMessage}>
                        {"Please enter a valid address "}
                      </span>
                    )}
                  </div>
                  <input
                    className={
                      formInputValidity.address
                        ? classes["checkout_input"]
                        : `${classes.checkout_input} ${classes.invalid}`
                    }
                    type="text"
                    name="address"
                    placeholder="1137 WIlliams Avenue"
                    id="address"
                    ref={addressInputRef}
                  />
                </div>
                <div className={classes.checkout_inputContainer_outer}>
                  <div className={classes.checkout_inputContainer}>
                    <div className={classes.checkout_labelContainer}>
                      <label className={classes.checkout_label} htmlFor="zip">
                        Zip Code
                      </label>
                      {!formInputValidity.zip && (
                        <span className={classes.checkout_errorMessage}>
                          {"Please enter a 5 digit zip code"}
                        </span>
                      )}
                    </div>
                    <input
                      className={
                        formInputValidity.zip
                          ? classes["checkout_input"]
                          : `${classes.checkout_input} ${classes.invalid}`
                      }
                      type="text"
                      name="zip"
                      placeholder="10001"
                      pattern="[0-9]{5}"
                      id="zip"
                      ref={zipInputRef}
                    />
                  </div>
                  <div className={classes.checkout_inputContainer}>
                    <div>
                      <div className={classes.checkout_labelContainer}>
                        <label
                          className={classes.checkout_label}
                          htmlFor="city"
                        >
                          City
                        </label>
                        {!formInputValidity.city && (
                          <span className={classes.checkout_errorMessage}>
                            {"Please enter a valid city "}
                          </span>
                        )}
                      </div>
                    </div>
                    <input
                      className={
                        formInputValidity.city
                          ? classes["checkout_input"]
                          : `${classes.checkout_input} ${classes.invalid}`
                      }
                      type="text"
                      name="city"
                      placeholder="New York"
                      id="city"
                      ref={cityInputRef}
                    />
                  </div>
                  <div className={classes.checkout_inputContainer}>
                    <div className={classes.checkout_labelContainer}>
                      <label
                        className={classes.checkout_label}
                        htmlFor="country"
                      >
                        Country
                      </label>
                      {!formInputValidity.country && (
                        <span className={classes.checkout_errorMessage}>
                          {"Please enter a valid country "}
                        </span>
                      )}
                    </div>
                    <input
                      className={
                        formInputValidity.country
                          ? classes["checkout_input"]
                          : `${classes.checkout_input} ${classes.invalid}`
                      }
                      type="text"
                      name="country"
                      placeholder="United States"
                      id="country"
                      ref={countryInputRef}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>payment details</legend>
                <span className={classes.checkout_label}>Payment Method</span>
                <div className={classes.checkout_radioContainer_outer}>
                  <div className={classes.checkout_radioContainer}>
                    <label
                      className={classes.checkout_paymentLabel}
                      htmlFor="e-money"
                    >
                      <input
                        onClick={eMoneyViewHandler}
                        type="radio"
                        value="e-Money"
                        defaultChecked
                        name="radioButton"
                        id="e-money"
                      />
                      <span className={classes.checkout_radioBtn}></span>
                      <span className={classes.checkout_radioLabel}>
                        e-Money
                      </span>
                    </label>
                  </div>
                  <div className={classes.checkout_radioContainer}>
                    <label
                      className={classes.checkout_paymentLabel}
                      htmlFor="cod"
                    >
                      <input
                        onClick={codViewHandler}
                        type="radio"
                        value="Cash on Delivery"
                        name="radioButton"
                        id="cod"
                      />
                      <span className={classes.checkout_radioBtn}></span>
                      <span className={classes.checkout_radioLabel}>
                        Cash on Delivery
                      </span>
                    </label>
                  </div>
                </div>
                {eMoneyView && (
                  <div className={classes.checkout_eMoneyContainer}>
                    <label
                      className={classes.checkout_inputContainer}
                      htmlFor="e-moneyNumber"
                    >
                      <div className={classes.checkout_labelContainer}>
                        <span className={classes.checkout_label}>
                          e-Money Number
                        </span>
                        {!formInputValidity.eMoneyNum && (
                          <span className={classes.checkout_errorMessage}>
                            {"Please enter a valid 9 digit e number "}
                          </span>
                        )}
                      </div>
                      <input
                        className={
                          formInputValidity.eMoneyNum
                            ? classes["checkout_input"]
                            : `${classes.checkout_input} ${classes.invalid}`
                        }
                        type="text"
                        placeholder="238521991"
                        id="e-moneyNumber"
                        name="eMoneyNum"
                        ref={eMoneyNumInputRef}
                      />
                    </label>
                    <label
                      className={classes.checkout_inputContainer}
                      htmlFor="e-moneyPin"
                    >
                      <div className={classes.checkout_labelContainer}>
                        <span className={classes.checkout_label}>
                          e-Money Pin
                        </span>
                        {!formInputValidity.eMoneyPin && (
                          <span className={classes.checkout_errorMessage}>
                            {"Please enter a valid 4 digit pin "}
                          </span>
                        )}
                      </div>
                      <input
                        className={
                          formInputValidity.eMoneyPin
                            ? classes["checkout_input"]
                            : `${classes.checkout_input} ${classes.invalid}`
                        }
                        type="text"
                        placeholder="6891"
                        id="e-moneyPin"
                        name="eMoneyPin"
                        ref={eMoneyPinInputRef}
                      />
                    </label>
                  </div>
                )}
                {CODView && (
                  <div className={classes.checkout_codContainer}>
                    <div>
                      <img src={codIcon} alt="Cash on delivery icon" />
                    </div>
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </fieldset>
            </form>
          </div>
          <Summary onClick={cartConfirmedHandler} />
        </div>
      </div>
      {isOrderConfirmed && <OrderConfirmation grandTotal={grandTotal} />}
      <Footer />
    </Fragment>
  );
}

export default Checkout;
