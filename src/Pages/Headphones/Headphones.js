import Heading from "../../Components/Heading/Heading";
import Navbar from "../../Components/Navbar/Navbar";
import ProductDetailSm from "../../Components/ProductDetailSm/ProductDetailSm";
import mark2Img from "../../Assets/Images/category-page-xx992-mobile.jpg";
import mark1Img from "../../Assets/Images/category-page-xx991-mobile.jpg";
import xx59Img from "../../Assets/Images/category-page-xx59-mobile.jpg";
import ShopProductContainer from "../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../Components/BestGear/BestGear";
import Footer from "../../Components/Footer/Footer";
import classes from "../../Components/ProductDetailSm/ProductDetailSm.module.scss";

function Headphones() {
  const mark2Text =
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.";

  const mark1Text =
    "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.";

  const xx59Text =
    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.";

  return (
    <div>
      <Navbar />
      <Heading title={"headphones"} />
      <div className={classes.productDetailSm_container}>
        <ProductDetailSm
          newProduct={true}
          imgSrc={mark2Img}
          title={"xx99 markii headphones"}
          text={mark2Text}
          seeProduct={true}
          addToCart={false}
        />
      </div>
      <div className={classes.productDetailSm_container}>
        <ProductDetailSm
          newProduct={false}
          imgSrc={mark1Img}
          title={"xx99 marki headphones"}
          text={mark1Text}
          seeProduct={true}
          addToCart={false}
        />
      </div>
      <div className={classes.productDetailSm_container}>
        <ProductDetailSm
          newProduct={false}
          imgSrc={xx59Img}
          title={"xx59 headphones"}
          text={xx59Text}
          seeProduct={true}
          addToCart={false}
        />
      </div>
      <ShopProductContainer />
      <BestGear />
      <Footer />
    </div>
  );
}

export default Headphones;
