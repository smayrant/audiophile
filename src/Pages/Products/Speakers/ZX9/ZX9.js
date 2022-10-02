import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import zx9Img from "../../../../Assets/Images/category-page-zx9-mobile.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import classes from "./ZX9.module.scss";
import GoBackButton from "../../../../Components/UI/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBoxItem from "../../../../Components/InTheBoxItem/InTheBoxItem";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import SeeProduct from "../../../../Components/SeeProduct/SeeProduct";
import ShopProductContainer from "../../../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../../../Components/BestGear/BestGear";
import Footer from "../../../../Components/Footer/Footer";
import galleryImg1 from "../../../../Assets/Images/zx9-gallery-1-mobile.jpg";
import galleryImg2 from "../../../../Assets/Images/zx9-gallery-2-mobile.jpg";
import galleryImg3 from "../../../../Assets/Images/zx9-gallery-3-mobile.jpg";
import mayLikeImg1 from "../../../../Assets/Images/zx7-mayLike-mobile.jpg";
import mayLikeImg2 from "../../../../Assets/Images/xx99-mayLike-mobile.jpg";
import mayLikeImg3 from "../../../../Assets/Images/xx59-mayLike-mobile.jpg";
import cartImg from "../../../../Assets/Images/zx9-cart.jpg";

function ZX9() {
  const zx9Text =
    "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.";

  const paragraph1 =
    "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).";

  const paragraph2 =
    "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.";
  return (
    <div className={classes.zx9}>
      <Navbar />
      <GoBackButton />
      <ProductDetailSm
        newProduct={true}
        imgSrc={zx9Img}
        title={"zx9 speaker"}
        text={zx9Text}
        seeProduct={false}
        price={4500}
        addToCart={true}
        id={4}
        name={"zx9"}
        cartImg={cartImg}
      />
      <Features paragraph1={paragraph1} paragraph2={paragraph2} />
      <h4 className={classes.zx9_inTheBox}>in the box</h4>
      <ul>
        <li>
          <InTheBoxItem qty={2} boxItem={"speaker unit"} />
        </li>
        <li>
          <InTheBoxItem qty={2} boxItem={"speaker cloth panel"} />
        </li>
        <li>
          <InTheBoxItem qty={1} boxItem={"user manual"} />
        </li>
        <li>
          <InTheBoxItem qty={1} boxItem={"3.5mm 10m audio cable"} />
        </li>
        <li>
          <InTheBoxItem qty={1} boxItem={"10m optical cable"} />
        </li>
      </ul>

      <PictureContainer
        img1={galleryImg1}
        img2={galleryImg2}
        img3={galleryImg3}
      />
      <h4 className={classes.zx9_mayLike_heading}>you may also like</h4>
      <SeeProduct
        imgSrc={mayLikeImg1}
        imgAlt={"ZX7 Speaker"}
        title={"zx7 speaker"}
        seeProductLink={"/products/zx7-speaker"}
      />
      <SeeProduct
        imgSrc={mayLikeImg2}
        imgAlt={"XX99 Mark I Headphones"}
        title={"xx99 mark i"}
        seeProductLink={"/products/mark-i-headphones"}
      />
      <SeeProduct
        imgSrc={mayLikeImg3}
        imgAlt={"XX59 Headphones"}
        title={"xx59"}
        seeProductLink={"/products/xx59-headphones"}
      />
      <ShopProductContainer />
      <BestGear />
      <Footer />
    </div>
  );
}

export default ZX9;
