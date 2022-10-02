import classes from "./SeeProduct.module.scss";
import { Link } from "react-router-dom";

function SeeProduct(props) {
  return (
    <div className={classes.seeProduct}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <h3>{props.title}</h3>
      <Link to={props.seeProductLink}>
        <button>see product</button>
      </Link>
    </div>
  );
}

export default SeeProduct;
