import React from "react";
import ShopProductContainer from "../ShopProductContainer/ShopProductContainer";
import classes from "./MenuDrawer.module.scss";

const MenuDrawer = () => {
  return (
    <div className={classes.menuDrawer}>
      <ShopProductContainer />
    </div>
  );
};

export default MenuDrawer;
