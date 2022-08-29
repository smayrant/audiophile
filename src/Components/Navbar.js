import classes from "./Navbar.module.scss";

function Navbar() {
  return (
    <header className={classes.header}>
      <div>mobile menu</div>
      <h1>audiophile</h1>
      <div>shopping cart</div>
    </header>
  );
}

export default Navbar;
