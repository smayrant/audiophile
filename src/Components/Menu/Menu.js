import Backdrop from "../UI/Backdrop/Backdrop";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import MenuDrawer from "../MenuDrawer/MenuDrawer";

const Menu = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-portal")
      )}
      <Fragment>
        {ReactDOM.createPortal(
          <MenuDrawer />,
          document.getElementById("menu-portal")
        )}
      </Fragment>
    </Fragment>
  );
};

export default Menu;
