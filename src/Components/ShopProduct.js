import classes from "./ShopProduct.module.scss";
import rightArrow from "../Assets/Images/arrow-right.svg";

function ShopProduct(props) {
  return (
    <div className={classes.shopProduct}>
      <img
        className={classes.shopProduct_img}
        src={props.imgSrc}
        alt={props.alt}
      />
      <div className={classes.shopProduct_detailContainer}>
        <h6>{props.productName}</h6>
        <p>
          shop{" "}
          <span>
            <img src={rightArrow} alt="Right arrow icon" />
          </span>
        </p>
      </div>
    </div>
  );
}

export default ShopProduct;
