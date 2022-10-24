import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import zx9ImgMobile from "../../../../Assets/Images/zx9-product-mobile.jpg";
import zx9ImgTablet from "../../../../Assets/Images/zx9-product-tablet.jpg";
import zx9ImgDesktop from "../../../../Assets/Images/zx9-product-desktop.jpg";
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
import galleryImg1Mobile from "../../../../Assets/Images/zx9-gallery-1-mobile.jpg";
import galleryImg1Tablet from "../../../../Assets/Images/zx9-gallery-1-tablet.jpg";
import galleryImg1Desktop from "../../../../Assets/Images/zx9-gallery-1-desktop.jpg";
import galleryImg2Mobile from "../../../../Assets/Images/zx9-gallery-2-mobile.jpg";
import galleryImg2Tablet from "../../../../Assets/Images/zx9-gallery-2-tablet.jpg";
import galleryImg2Desktop from "../../../../Assets/Images/zx9-gallery-2-desktop.jpg";
import galleryImg3Mobile from "../../../../Assets/Images/zx9-gallery-3-mobile.jpg";
import galleryImg3Tablet from "../../../../Assets/Images/zx9-gallery-3-tablet.jpg";
import galleryImg3Desktop from "../../../../Assets/Images/zx9-gallery-3-desktop.jpg";
import mayLikeImg1Mobile from "../../../../Assets/Images/zx7-mayLike-mobile.jpg";
import mayLikeImg1Tablet from "../../../../Assets/Images/zx7-mayLike-tablet.jpg";
import mayLikeImg1Desktop from "../../../../Assets/Images/zx7-mayLike-desktop.jpg";
import mayLikeImg2Mobile from "../../../../Assets/Images/xx99-mayLike-mobile.jpg";
import mayLikeImg2Tablet from "../../../../Assets/Images/xx99-mayLike-tablet.jpg";
import mayLikeImg2Desktop from "../../../../Assets/Images/xx99-mayLike-desktop.jpg";
import mayLikeImg3Mobile from "../../../../Assets/Images/xx59-mayLike-mobile.jpg";
import mayLikeImg3Tablet from "../../../../Assets/Images/xx59-mayLike-tablet.jpg";
import mayLikeImg3Desktop from "../../../../Assets/Images/xx59-mayLike-desktop.jpg";
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
        mobileImg={zx9ImgMobile}
        tabletImg={zx9ImgTablet}
        desktopImg={zx9ImgDesktop}
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

      <div className={classes.zx9_inTheBoxContainer}>
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
      </div>

      <PictureContainer
        mobileImg1={galleryImg1Mobile}
        mobileImg2={galleryImg2Mobile}
        mobileImg3={galleryImg3Mobile}
        tabletImg1={galleryImg1Tablet}
        tabletImg2={galleryImg2Tablet}
        tabletImg3={galleryImg3Tablet}
        desktopImg1={galleryImg1Desktop}
        desktopImg2={galleryImg2Desktop}
        desktopImg3={galleryImg3Desktop}
      />
      <h4 className={classes.zx9_mayLike_heading}>you may also like</h4>
      <div className={classes.zx9_seeProductContainer}>

      <SeeProduct
        mobileImg={mayLikeImg1Mobile}
        tabletImg={mayLikeImg1Tablet}
        desktopImg={mayLikeImg1Desktop}
        imgAlt={"ZX7 Speaker"}
        title={"zx7 speaker"}
        seeProductLink={"/products/zx7-speaker"}
        />
      <SeeProduct
        mobileImg={mayLikeImg2Mobile}
        tabletImg={mayLikeImg2Tablet}
        desktopImg={mayLikeImg2Desktop}
        imgAlt={"XX99 Mark I Headphones"}
        title={"xx99 mark i"}
        seeProductLink={"/products/mark-i-headphones"}
      />
      <SeeProduct
        mobileImg={mayLikeImg3Mobile}
        tabletImg={mayLikeImg3Tablet}
        desktopImg={mayLikeImg3Desktop}
        imgAlt={"XX59 Headphones"}
        title={"xx59"}
        seeProductLink={"/products/xx59-headphones"}
        />
        </div>
      <ShopProductContainer />
      <BestGear />
      <Footer />
    </div>
  );
}

export default ZX9;
