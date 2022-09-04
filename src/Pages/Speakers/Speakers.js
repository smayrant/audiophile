import Heading from "../../Components/Heading/Heading";
import Navbar from "../../Components/Navbar/Navbar";
import ProductDetailSm from "../../Components/ProductDetailSm/ProductDetailSm";
import zx9Img from "../../Assets/Images/category-page-zx9-mobile.jpg";
import zx7Img from "../../Assets/Images/category-page-zx7-mobile.jpg";
import ShopProductContainer from "../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../Components/BestGear/BestGear";
import Footer from "../../Components/Footer/Footer";
import classes from "../../Components/ProductDetailSm/ProductDetailSm.module.scss";

function Speakers() {
  const zx9Text =
    "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.";

  const zx7Text =
    "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.";

  return (
    <div>
      <Navbar />
      <Heading title={"speakers"} />
      <div className={classes.productDetailSm_container}>
        <ProductDetailSm
          newProduct={true}
          imgSrc={zx9Img}
          title={"zx9 speaker"}
          text={zx9Text}
          seeProduct={true}
          addToCart={false}
        />
      </div>
      <div className={classes.productDetailSm_container}>
        <ProductDetailSm
          newProduct={false}
          imgSrc={zx7Img}
          title={"zx7 speaker"}
          text={zx7Text}
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

export default Speakers;
