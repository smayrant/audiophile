import Heading from "../../Components/Heading/Heading";
import Navbar from "../../Components/Navbar/Navbar";
import img from "../../Assets/Images/category-page-earphones-mobile.jpg";
import ProductDetailSm from "../../Components/ProductDetailSm/ProductDetailSm";
import BestGear from "../../Components/BestGear/BestGear";
import Footer from "../../Components/Footer/Footer";
import ShopProductContainer from "../../Components/ShopProductContainer/ShopProductContainer";

function Earphones() {
  const text =
    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.";
  return (
    <div>
      <Navbar />
      <Heading title={"speakers"} />
      <ProductDetailSm imgSrc={img} title={"zx9 speaker"} text={text} />

      <ShopProductContainer />
      <BestGear />
      <Footer />
    </div>
  );
}

export default Earphones;
