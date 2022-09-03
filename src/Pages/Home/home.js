import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import ShopProductContainer from "../../Components/ShopProductContainer/ShopProductContainer";
import ZX9Speaker from "../../Components/ZX9Speaker/ZX9Speaker";
import ZX7Speaker from "../../Components/ZX7Speaker/ZX7Speaker";
import YX1Earphones from "../../Components/YX1Earphones/YX1Earphones";
import BestGear from "../../Components/BestGear/BestGear";
import Footer from "../../Components/Footer/Footer";

function home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShopProductContainer />
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
      <BestGear />
      <Footer />
    </div>
  );
}

export default home;
