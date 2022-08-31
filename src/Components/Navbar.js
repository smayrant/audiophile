import classes from "./Navbar.module.scss";
import logo from "../Assets/Images/logo.svg";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <header className={classes.navbar_header}>
        <div className={classes.navbar_headerContainer}>
          <div> menu</div>
          <img src={logo} alt="" />
          <div> cart</div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
