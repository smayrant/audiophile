import Heading from "../../Components/Heading/Heading";
import Navbar from "../../Components/Navbar/Navbar";
import ProductDetailSm from "../../Components/ProductDetailSm/ProductDetailSm";
import zx9Img from "../../Assets/Images/category-page-zx9-mobile.jpg";
import zx9ImgTablet from "../../Assets/Images/category-page-zx9-tablet.jpg";
import zx9ImgDesktop from "../../Assets/Images/category-page-zx9-desktop.jpg";
import zx7Img from "../../Assets/Images/category-page-zx7-mobile.jpg";
import zx7ImgTablet from "../../Assets/Images/category-page-zx7-tablet.jpg";
import zx7ImgDesktop from "../../Assets/Images/category-page-zx7-desktop.jpg";
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
          mobileImg={zx9Img}
          tabletImg={zx9ImgTablet}
          desktopImg={zx9ImgDesktop}
          title={"zx9 speaker"}
          text={zx9Text}
          seeProduct={true}
          addToCart={false}
          seeProductLink={"/products/zx9-speaker"}
        />
      </div>
      <div className={classes.productDetailSm_container}>
        <ProductDetailSm
          newProduct={false}
          mobileImg={zx7Img}
          tabletImg={zx7ImgTablet}
          desktopImg={zx7ImgDesktop}
          title={"zx7 speaker"}
          text={zx7Text}
          seeProduct={true}
          addToCart={false}
          seeProductLink={"/products/zx7-speaker"}
          reverseFlex={true}
        />
      </div>
      <ShopProductContainer />
      <BestGear />
      <Footer />
    </div>
  );
}

export default Speakers;
