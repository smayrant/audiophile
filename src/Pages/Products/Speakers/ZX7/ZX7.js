import classes from "./ZX7.module.scss";
import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import zx7ImgMobile from "../../../../Assets/Images/zx7-product-mobile.jpg";
import zx7ImgTablet from "../../../../Assets/Images/zx7-product-tablet.jpg";
import zx7ImgDesktop from "../../../../Assets/Images/zx7-product-desktop.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import GoBackButton from "../../../../Components/UI/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBoxItem from "../../../../Components/InTheBoxItem/InTheBoxItem";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import SeeProduct from "../../../../Components/SeeProduct/SeeProduct";
import ShopProductContainer from "../../../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../../../Components/BestGear/BestGear";
import Footer from "../../../../Components/Footer/Footer";
import galleryImg1Mobile from "../../../../Assets/Images/zx7-gallery-1-mobile.jpg";
import galleryImg1Tablet from "../../../../Assets/Images/zx7-gallery-1-tablet.jpg";
import galleryImg1Desktop from "../../../../Assets/Images/zx7-gallery-1-desktop.jpg";
import galleryImg2Mobile from "../../../../Assets/Images/zx7-gallery-2-mobile.jpg";
import galleryImg2Tablet from "../../../../Assets/Images/zx7-gallery-2-tablet.jpg";
import galleryImg2Desktop from "../../../../Assets/Images/zx7-gallery-2-desktop.jpg";
import galleryImg3Mobile from "../../../../Assets/Images/zx7-gallery-3-mobile.jpg";
import galleryImg3Tablet from "../../../../Assets/Images/zx7-gallery-3-tablet.jpg";
import galleryImg3Desktop from "../../../../Assets/Images/zx7-gallery-3-desktop.jpg";
import mayLikeImg1Mobile from "../../../../Assets/Images/zx9-mayLike-mobile.jpg";
import mayLikeImg1Tablet from "../../../../Assets/Images/zx9-mayLike-tablet.jpg";
import mayLikeImg1Desktop from "../../../../Assets/Images/zx9-mayLike-desktop.jpg";
import mayLikeImg2Mobile from "../../../../Assets/Images/xx99-mayLike-mobile.jpg";
import mayLikeImg2Tablet from "../../../../Assets/Images/xx99-mayLike-tablet.jpg";
import mayLikeImg2Desktop from "../../../../Assets/Images/xx99-mayLike-desktop.jpg";
import mayLikeImg3Mobile from "../../../../Assets/Images/xx59-mayLike-mobile.jpg";
import mayLikeImg3Tablet from "../../../../Assets/Images/xx59-mayLike-tablet.jpg";
import mayLikeImg3Desktop from "../../../../Assets/Images/xx59-mayLike-desktop.jpg";
import cartImg from "../../../../Assets/Images/zx7-cart.jpg";

function ZX7() {
  const zx7Text =
    "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.";

  const paragraph1 =
    "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. ";

  const paragraph2 =
    "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.";
  return (
    <div className={classes.zx7}>
      <Navbar />
      <GoBackButton />
      <ProductDetailSm
        newProduct={false}
        mobileImg={zx7ImgMobile}
        tabletImg={zx7ImgTablet}
        desktopImg={zx7ImgDesktop}
        title={"zx7 speaker"}
        text={zx7Text}
        seeProduct={false}
        price={3500}
        addToCart={true}
        id={5}
        name={"zx7"}
        cartImg={cartImg}
      />
      <Features paragraph1={paragraph1} paragraph2={paragraph2} />
      <div className={classes.zx7_inTheBoxContainer}>
        <h4 className={classes.zx7_inTheBox}>in the box</h4>
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
            <InTheBoxItem qty={1} boxItem={"3.5mm 7.5m audio cable"} />
          </li>
          <li>
            <InTheBoxItem qty={1} boxItem={"7.5m optical cable"} />
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
      <h4 className={classes.zx7_mayLike_heading}>you may also like</h4>
      <div className={classes.zx7_seeProductContainer}>
        <SeeProduct
          mobileImg={mayLikeImg1Mobile}
          tabletImg={mayLikeImg1Tablet}
          desktopImg={mayLikeImg1Desktop}
          imgAlt={"ZX9 Speaker"}
          title={"zx9 speaker"}
          seeProductLink={"/products/zx9-speaker"}
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
export default ZX7;
