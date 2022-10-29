import classes from "./SeeProduct.module.scss";
import { Link } from "react-router-dom";

function SeeProduct(props) {
  const { desktopImg, tabletImg, mobileImg, alt } = props;
  return (
    <div className={classes.seeProduct}>
      <picture>
        <source media="(min-width: 992px)" srcSet={desktopImg} />
        <source media="(min-width: 768px)" srcSet={tabletImg} />
        <img src={mobileImg} alt={alt} />
      </picture>
      <h3>{props.title}</h3>
      <Link to={props.seeProductLink}>
        <button>see product</button>
      </Link>
    </div>
  );
}

export default SeeProduct;
