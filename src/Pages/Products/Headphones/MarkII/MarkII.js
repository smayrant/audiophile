import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import mark2Img from "../../../../Assets/Images/category-page-xx992-mobile.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import classes from "./MarkII.module.scss";
import GoBackButton from "../../../../Components/GoBackButton/GoBackButton";

function MarkII() {
  const mark2Text =
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.";
  return (
    <div className={classes.markII}>
      <Navbar />
      <GoBackButton />
      <ProductDetailSm
        newProduct={true}
        imgSrc={mark2Img}
        title={"xx99 markii headphones"}
        text={mark2Text}
        seeProduct={false}
        price={"$2,999"}
        addToCart={true}
      />
    </div>
  );
}

export default MarkII;
