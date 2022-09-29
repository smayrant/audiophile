import Heading from "../../Components/Heading/Heading";
import Navbar from "../../Components/Navbar/Navbar";
import img from "../../Assets/Images/category-page-earphones-mobile.jpg";
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
          imgSrc={img}
          title={"yx1 wireless earphones"}
          text={text}
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

export default Earphones;
