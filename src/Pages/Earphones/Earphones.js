import Heading from "../../Components/Heading/Heading";
import Navbar from "../../Components/Navbar/Navbar";
import yx1Img from "../../Assets/Images/category-page-earphones-mobile.jpg";
import yx1ImgTablet from "../../Assets/Images/category-page-earphones-tablet.jpg";
import yx1ImgDesktop from "../../Assets/Images/category-page-earphones-desktop.jpg";
import ProductDetailSm from "../../Components/ProductDetailSm/ProductDetailSm";
import BestGear from "../../Components/BestGear/BestGear";
import Footer from "../../Components/Footer/Footer";
import ShopProductContainer from "../../Components/ShopProductContainer/ShopProductContainer";
import classes from "../../Components/ProductDetailSm/ProductDetailSm.module.scss";

function Earphones() {
  const text =
    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.";
  return (
    <div>
      <Navbar />
      <Heading title={"earphones"} />
      <div className={classes.productDetailSm_container}>
        <ProductDetailSm
          newProduct={true}
          mobileImg={yx1Img}
          tabletImg={yx1ImgTablet}
          desktopImg={yx1ImgDesktop}
          title={"yx1 wireless earphones"}
          text={text}
          seeProduct={true}
          addToCart={false}
          seeProductLink={"/products/yx1-earphones"}
        />
      </div>

      <ShopProductContainer />
      <BestGear />
      <Footer />
    </div>
  );
}

export default Earphones;
