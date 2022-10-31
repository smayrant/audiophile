import classes from "./YX1.module.scss";
import ProductDetailSm from "../../../../Components/ProductDetailSm/ProductDetailSm";
import yx1ImgMobile from "../../../../Assets/Images/yx1-product-mobile.jpg";
import yx1ImgTablet from "../../../../Assets/Images/yx1-product-tablet.jpg";
import yx1ImgDesktop from "../../../../Assets/Images/yx1-product-desktop.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import GoBackButton from "../../../../Components/UI/GoBackButton/GoBackButton";
import Features from "../../../../Components/Features/Features";
import InTheBoxItem from "../../../../Components/InTheBoxItem/InTheBoxItem";
import PictureContainer from "../../../../Components/PictureContainer/PictureContainer";
import SeeProduct from "../../../../Components/SeeProduct/SeeProduct";
import ShopProductContainer from "../../../../Components/ShopProductContainer/ShopProductContainer";
import BestGear from "../../../../Components/BestGear/BestGear";
import Footer from "../../../../Components/Footer/Footer";
import galleryImg1Mobile from "../../../../Assets/Images/yx1-gallery-1-mobile.jpg";
import galleryImg1Tablet from "../../../../Assets/Images/yx1-gallery-1-tablet.jpg";
import galleryImg1Desktop from "../../../../Assets/Images/yx1-gallery-1-desktop.jpg";
import galleryImg2Mobile from "../../../../Assets/Images/yx1-gallery-2-mobile.jpg";
import galleryImg2Tablet from "../../../../Assets/Images/yx1-gallery-2-tablet.jpg";
import galleryImg2Desktop from "../../../../Assets/Images/yx1-gallery-2-desktop.jpg";
import galleryImg3Mobile from "../../../../Assets/Images/yx1-gallery-3-mobile.jpg";
import galleryImg3Tablet from "../../../../Assets/Images/yx1-gallery-3-tablet.jpg";
import galleryImg3Desktop from "../../../../Assets/Images/yx1-gallery-3-desktop.jpg";
import mayLikeImg1Mobile from "../../../../Assets/Images/xx99-mayLike-mobile.jpg";
import mayLikeImg1Tablet from "../../../../Assets/Images/xx99-mayLike-tablet.jpg";
import mayLikeImg1Desktop from "../../../../Assets/Images/xx99-mayLike-desktop.jpg";
import mayLikeImg2Mobile from "../../../../Assets/Images/xx59-mayLike-mobile.jpg";
import mayLikeImg2Tablet from "../../../../Assets/Images/xx59-mayLike-tablet.jpg";
import mayLikeImg2Desktop from "../../../../Assets/Images/xx59-mayLike-desktop.jpg";
import mayLikeImg3Mobile from "../../../../Assets/Images/zx9-mayLike-mobile.jpg";
import mayLikeImg3Tablet from "../../../../Assets/Images/zx9-mayLike-tablet.jpg";
import mayLikeImg3Desktop from "../../../../Assets/Images/zx9-mayLike-desktop.jpg";
import cartImg from "../../../../Assets/Images/yx1-cart.jpg";

function YX1() {
  const yx1Text =
    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.";

  const paragraph1 =
    "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. ";

  const paragraph2 =
    "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.";
  return (
    <div className={classes.yx1}>
      <Navbar />
      <GoBackButton />
      <ProductDetailSm
        newProduct={true}
        mobileImg={yx1ImgMobile}
        tabletImg={yx1ImgTablet}
        desktopImg={yx1ImgDesktop}
        title={"yx1 earphones"}
        text={yx1Text}
        seeProduct={false}
        price={599}
        addToCart={true}
        id={6}
        name={"yx1"}
        cartImg={cartImg}
      />

      <div className={classes.yx1_featuresContainer}>
        <Features paragraph1={paragraph1} paragraph2={paragraph2} />
        <div className={classes.yx1_inTheBoxContainer}>
          <h4 className={classes.yx1_inTheBox}>in the box</h4>
          <ul>
            <li>
              <InTheBoxItem qty={2} boxItem={"earphone unit"} />
            </li>
            <li>
              <InTheBoxItem qty={6} boxItem={"multi-size earplugs"} />
            </li>
            <li>
              <InTheBoxItem qty={1} boxItem={"user manual"} />
            </li>
            <li>
              <InTheBoxItem qty={1} boxItem={"USB-C charging cable"} />
            </li>
            <li>
              <InTheBoxItem qty={1} boxItem={"travel pouch"} />
            </li>
          </ul>
        </div>
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
      <h4 className={classes.yx1_mayLike_heading}>you may also like</h4>
      <div className={classes.yx1_seeProductContainer}>
        <SeeProduct
          mobileImg={mayLikeImg1Mobile}
          tabletImg={mayLikeImg1Tablet}
          desktopImg={mayLikeImg1Desktop}
          imgAlt={"XX99 Mark I Headphones"}
          title={"xx99 mark i"}
          seeProductLink={"/products/mark-i-headphones"}
        />
        <SeeProduct
          mobileImg={mayLikeImg2Mobile}
          tabletImg={mayLikeImg2Tablet}
          desktopImg={mayLikeImg2Desktop}
          imgAlt={"XX59 Headphones"}
          title={"xx59"}
          seeProductLink={"/products/xx59-headphones"}
        />
        <SeeProduct
          mobileImg={mayLikeImg3Mobile}
          tabletImg={mayLikeImg3Tablet}
          desktopImg={mayLikeImg3Desktop}
          imgAlt={"ZX9 Speaker"}
          title={"zx9 speaker"}
          seeProductLink={"/products/zx9-speaker"}
        />
      </div>
      <ShopProductContainer />
      <BestGear />
      <Footer />
    </div>
  );
}
export default YX1;
