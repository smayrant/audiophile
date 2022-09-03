import classes from "./Navbar.module.scss";
import logo from "../../Assets/Images/logo.svg";
import cart from "../../Assets/Images/cart.svg";
import hamburger from "../../Assets/Images/hamburger.svg";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <header className={classes.navbar_header}>
        <div className={classes.navbar_headerContainer}>
          <img src={hamburger} alt="Hamburger menu icon" />
          <img src={logo} alt="Audiophile logo" />
          <img src={cart} alt="Cart icon" />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
