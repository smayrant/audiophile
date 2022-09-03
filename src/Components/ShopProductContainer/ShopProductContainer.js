import classes from "./ShopProductContainer.module.scss";
import ShopProduct from "../ShopProduct/ShopProduct";
import earphonesThumbnail from "../../Assets/Images/category-thumbnail-earphones.png";
import speakersThumbnail from "../../Assets/Images/category-thumbnail-speakers.png";
import headphonesThumbnail from "../../Assets/Images/category-thumbnail-headphones.png";

function ShopProductContainer() {
  return (
    <div className={classes.shopProductContainer}>
      <ShopProduct
        imgSrc={headphonesThumbnail}
        alt={"Headphones Thumbnail"}
        productName={"headphones"}
      />
      <ShopProduct
        imgSrc={speakersThumbnail}
        alt={"Speakers Thumbnail"}
        productName={"speakers"}
      />
      <ShopProduct
        imgSrc={earphonesThumbnail}
        alt={"Earphones Thumbnail"}
        productName={"earphones"}
      />
    </div>
  );
}

export default ShopProductContainer;
