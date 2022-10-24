import { useState } from "react";
import { Fragment } from "react";
import classes from "./Navbar.module.scss";
import logo from "../../Assets/Images/logo.svg";
import cart from "../../Assets/Images/cart.svg";
import hamburger from "../../Assets/Images/hamburger.svg";
import ShopProductContainer from "../ShopProductContainer/ShopProductContainer";
import CartModal from "../CartModal/CartModal";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <Fragment>
      <div className={classes.navbar}>
        <div className={classes.navbar_header}>
          <div className={classes.navbar_headerContainer}>
            <div className={classes.navbar_leftContainer}>
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <img src={hamburger} alt="Hamburger menu icon" />
              </button>
              <Link to="/">
                <img src={logo} alt="Audiophile logo" />
              </Link>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(true);
              }}
            >
              <img src={cart} alt="Cart icon" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          isMenuOpen ? classes.navbar_menuOpen : classes.navbar_menuClosed
        }
      >
        <ShopProductContainer />
      </div>
      <div
        className={
          isCartOpen ? classes.navbar_cartOpen : classes.navbar_cartClosed
        }
      >
        <CartModal setCartState={setIsCartOpen} />
      </div>
    </Fragment>
  );
}

export default Navbar;
