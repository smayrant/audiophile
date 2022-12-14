import classes from "./ShopProduct.module.scss";
import rightArrow from "../../Assets/Images/arrow-right.svg";
import { Link } from "react-router-dom";

function ShopProduct(props) {
  return (
    <div className={classes.shopProduct}>
      <img
        className={classes.shopProduct_img}
        src={props.imgSrc}
        alt={props.alt}
      />
      <div className={classes.shopProduct_detailContainer}>
        <h5>{props.productName}</h5>
        <Link className={classes.shopProduct_link} to={`/${props.productName}`}>
          shop{" "}
          <span>
            <img src={rightArrow} alt="Right arrow icon" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ShopProduct;
