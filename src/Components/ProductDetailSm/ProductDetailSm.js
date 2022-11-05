import classes from "./ProductDetailSm.module.scss";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment } from "react";

function ProductDetailSm(props) {
  const dispatch = useDispatch();

  const qtyToAdd = useSelector((state) => state.cart.qtyToAdd);

  const {
    name,
    id,
    price,
    mobileImg,
    tabletImg,
    desktopImg,
    cartImg,
    quantity,
    reverseFlex,
    addToCart,
    alt,
    newProduct,
    seeProduct,
    seeProductLink,
    text,
    title,
  } = props;

  const formattedPrice = price ? price.toLocaleString() : 0;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ name, id, price, cartImg, quantity }));
  };

  const increaseQtyHandler = () => {
    dispatch(cartActions.increaseQty());
  };

  const decreaseQtyHandler = () => {
    dispatch(cartActions.decreaseQty());
  };
  return (
    <Fragment>
      <ToastContainer
        autoClose={2500}
        position="top-center"
        closeOnClick
        draggable
      />
      <div className={classes.productDetailSm}>
        {/* element is given a specific class name based on truthiness of props to determine the styles that are applied to the element. If this component is used in a category page, it's given the productInfo_container class, if the element needs to be reversed, it is given the 'reverse' modifier. If the component is used in the product detail page to add products to the cart it is given the addProductToCart class*/}
        <div
          className={
            addToCart
              ? `${classes.addProductToCart}`
              : !reverseFlex
              ? `${classes.productDetailSm_productInfo_container}`
              : `${classes.productDetailSm_productInfo_container} ${classes.productDetailSm_productInfo_container_reverse}`
          }
        >
          <picture>
            <source media="(min-width: 992px)" srcSet={desktopImg} />
            <source media="(min-width: 768px)" srcSet={tabletImg} />
            <img
              className={classes.productDetailSm_img}
              src={mobileImg}
              alt={alt}
            />
          </picture>

          <div className={classes.productDetailSm_productInfo}>
            {newProduct && <h5>new product</h5>}
            <h3 className={seeProduct ? classes.centerText : ""}>{title}</h3>
            <p>{text}</p>
            {seeProduct && (
              <Link to={seeProductLink}>
                <button className={classes.productDetailSm_seeProduct__btn}>
                  see product
                </button>
              </Link>
            )}
            {addToCart && (
              <span
                className={classes.productDetailSm_price}
              >{`$${formattedPrice}`}</span>
            )}
            {addToCart && (
              <div className={classes.productDetailSm_purchaseContainer}>
                <div className={classes.productDetailSm_qtContainer}>
                  <button
                    onClick={decreaseQtyHandler}
                    className={classes.productDetailSm_qtDown}
                  >
                    -
                  </button>
                  <span className={classes.productDetailSm_qt}>{qtyToAdd}</span>
                  <button
                    onClick={increaseQtyHandler}
                    className={classes.productDetailSm_qtUp}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={addToCartHandler}
                  id={classes.productDetailSm_addToCart}
                >
                  add to cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductDetailSm;
