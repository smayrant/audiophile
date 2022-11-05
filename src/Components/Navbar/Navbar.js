import { useState } from "react";
import classes from "./Navbar.module.scss";
import logo from "../../Assets/Images/logo.svg";
import cart from "../../Assets/Images/cart.svg";
import hamburger from "../../Assets/Images/hamburger.svg";
import CartModal from "../CartModal/CartModal";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartQty = useSelector((state) => state.cart.totalQuantity);
  console.log(cartQty > 0);
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_header}>
        <div className={classes.navbar_headerContainer}>
          <div className={classes.navbar_leftContainer}>
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (isCartOpen) {
                  setIsCartOpen(!isCartOpen);
                }
              }}
            >
              <img src={hamburger} alt="Hamburger menu icon" />
            </button>
            <Link to="/">
              <img src={logo} alt="Audiophile logo" />
            </Link>
          </div>
          <nav className={classes.navbar_linkContainer}>
            <Link className={classes.navbar_link} to="/">
              home
            </Link>
            <Link className={classes.navbar_link} to="/headphones">
              headphones
            </Link>
            <Link className={classes.navbar_link} to="/speakers">
              speakers
            </Link>
            <Link className={classes.navbar_link} to="/earphones">
              earphones
            </Link>
          </nav>
          <button
            className={classes.navbar_cartBtn}
            onClick={() => {
              setIsCartOpen(!isCartOpen);
              if (isMenuOpen) {
                setIsMenuOpen(!isMenuOpen);
              }
            }}
          >
            <img src={cart} alt="Cart icon" />
            {cartQty > 0 && <span>{cartQty}</span>}
          </button>
        </div>
      </div>

      <div
        className={
          isCartOpen ? classes.navbar_cartOpen : classes.navbar_cartClosed
        }
      >
        {isCartOpen && <CartModal setCartState={setIsCartOpen} />}
      </div>
      {isMenuOpen && <Menu />}
    </div>
  );
}

export default Navbar;
